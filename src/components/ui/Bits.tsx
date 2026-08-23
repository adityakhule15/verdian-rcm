import type { ReactNode } from "react";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function CheckList({
  items,
  tone = "light",
  columns = 1,
  className,
}: {
  items: readonly string[];
  tone?: "light" | "dark";
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-3",
        columns === 2 ? "sm:grid-cols-2" : undefined,
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
              tone === "dark" ? "bg-teal-400/20 text-teal-300" : "bg-teal-50 text-teal-700",
            )}
          >
            <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className={cn("text-sm leading-relaxed", tone === "dark" ? "text-navy-200" : "text-navy-700")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Horizontal, numbered workflow strip used for claim, AR and QA processes. */
export function WorkflowStrip({
  steps,
  tone = "light",
  className,
}: {
  steps: readonly string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-wrap items-stretch gap-3", className)}>
      {steps.map((step, index) => (
        <li
          key={step}
          className={cn(
            "flex min-w-[9.5rem] flex-1 items-center gap-3 rounded-xl border px-4 py-3",
            tone === "dark" ? "border-white/10 bg-white/[0.04]" : "border-navy-100 bg-white shadow-soft",
          )}
        >
          <span
            className={cn(
              "inline-flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
              tone === "dark" ? "bg-teal-400/15 text-teal-300" : "bg-navy-50 text-navy-700",
            )}
          >
            {index + 1}
          </span>
          <span
            className={cn(
              "text-sm font-semibold leading-snug",
              tone === "dark" ? "text-navy-100" : "text-navy-800",
            )}
          >
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

/**
 * Visible, deliberately plain notice used wherever the website script forbids
 * invented content (statistics, testimonials, client logos, leadership
 * profiles). It tells the site owner exactly what to supply instead of quietly
 * rendering nothing.
 */
export function AwaitingContent({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "rounded-panel border border-dashed border-navy-300 bg-navy-50/70 p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-navy-700 shadow-soft">
          <Info className="size-4.5" aria-hidden />
        </span>
        <div className="space-y-2">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy-700">{title}</p>
          <div className="max-w-2xl text-sm leading-relaxed text-navy-600">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

export function Prose({ paragraphs, className }: { paragraphs: readonly string[]; className?: string }) {
  return (
    <div className={cn("space-y-4 text-base leading-relaxed text-navy-600 sm:text-lg", className)}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}
