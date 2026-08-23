import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "accent";
  className?: string;
}) {
  const tones = {
    light: "border-navy-200 bg-white text-navy-700",
    dark: "border-white/15 bg-white/10 text-navy-100",
    accent: "border-teal-200 bg-teal-50 text-teal-800",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
