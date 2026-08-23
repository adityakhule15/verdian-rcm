import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { LogoMark } from "./LogoMark";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const [first, ...rest] = site.name.split(" ");

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="size-9" variant={tone === "dark" ? "dark" : "light"} />
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
