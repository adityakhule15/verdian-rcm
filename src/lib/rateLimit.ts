import "server-only";
import { headers } from "next/headers";

type Bucket = { count: number; resetAt: number };

function positiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

const WINDOW_MS = positiveInt(process.env.LEAD_RATE_LIMIT_WINDOW_MINUTES, 10) * 60 * 1000;
const MAX_SUBMISSIONS = positiveInt(process.env.LEAD_RATE_LIMIT_MAX, 5);

/**
 * Per-instance, in-memory limiter. Enough to stop casual form abuse on a single
 * server; on multi-instance hosting move this to a shared store (Redis,
 * Upstash) or enforce it at the edge or WAF layer instead.
 */
const buckets = new Map<string, Bucket>();

export async function clientKey(): Promise<string> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown";
  return ip;
}

export function isRateLimited(key: string): boolean {
  const now = Date.now();

  for (const [existingKey, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(existingKey);
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_SUBMISSIONS;
}

/** Bots fill hidden inputs; humans never see them. */
export function isHoneypotTripped(formData: FormData): boolean {
  const value = formData.get("website");
  return typeof value === "string" && value.trim().length > 0;
}
