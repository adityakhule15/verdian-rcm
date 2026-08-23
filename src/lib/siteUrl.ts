/**
 * Canonical site origin for metadata, sitemap and JSON-LD.
 *
 * On Vercel, `VERCEL_URL` is set automatically even when
 * `NEXT_PUBLIC_SITE_URL` has not been configured yet — without this fallback,
 * Open Graph images point at localhost and WhatsApp/iMessage show no thumbnail.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const vercelHost = process.env.VERCEL_URL?.trim().replace(/\/$/, "");
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}
