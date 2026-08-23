import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Tone = "light" | "tint" | "dark";

const tones: Record<Tone, string> = {
  light: "bg-white text-navy-900",
  tint: "bg-navy-50 text-navy-900",
  dark: "bg-navy-950 text-navy-100",
};

export function Section({
  id,
  tone = "light",
  className,
  children,
  as: As = "section",
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  as?: "section" | "div";
  labelledBy?: string;
}) {
  return (
    <As
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-28 py-16 lg:py-24", tones[tone], className)}
    >
      <div className="container-page">{children}</div>
    </As>
  );
}

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "dark" ? "text-teal-300" : "text-teal-700",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div className={cn("text-lg leading-relaxed", tone === "dark" ? "text-navy-200" : "text-navy-600")}>
          {description}
        </div>
      ) : null}
      {children}
    </Reveal>
  );
}
