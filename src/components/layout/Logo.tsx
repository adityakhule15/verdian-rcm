import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { LogoMark } from "./LogoMark";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3 transition-opacity hover:opacity-95", className)}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="size-9.5 shadow-xs" variant={tone === "dark" ? "dark" : "light"} />
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span
          className={cn(
            "font-display text-[1.125rem] font-black tracking-tight",
            tone === "dark" ? "text-white" : "text-navy-950",
          )}
        >
          LIGASE <span className={tone === "dark" ? "text-teal-300" : "text-teal-600 font-extrabold"}>HEALTHCARE</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em]",
            tone === "dark" ? "text-navy-300" : "text-navy-600",
          )}
        >
          Services · Training · Certifications
        </span>
      </span>
    </Link>
  );
}
