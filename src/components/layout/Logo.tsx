import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * Placeholder wordmark drawn in code so the site ships without a licensed
 * logo file. Swap the mark and text for the real brand assets.
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const [first, ...rest] = site.name.split(" ");

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.name} — home`}
    >
      <span
        className={cn(
          "relative inline-flex size-9 shrink-0 items-center justify-center rounded-xl",
          tone === "dark" ? "bg-teal-400 text-navy-950" : "bg-navy-900 text-white",
        )}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M3 13h3.2l2-4.5 2.6 8 2.4-6 1.8 2.5H21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-extrabold tracking-tight",
            tone === "dark" ? "text-white" : "text-navy-900",
          )}
        >
          {first}
          <span className={tone === "dark" ? "text-teal-300" : "text-teal-700"}> {rest.join(" ")}</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em]",
            tone === "dark" ? "text-navy-400" : "text-navy-500",
          )}
        >
          Coding · Billing · RCM
        </span>
      </span>
    </Link>
  );
}
