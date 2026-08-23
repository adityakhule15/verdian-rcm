import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export function Card({
  className,
  children,
  tone = "light",
}: {
  className?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-card p-6",
        tone === "dark"
          ? "border border-white/10 bg-white/[0.04] text-navy-100"
          : "border border-navy-100 bg-white text-navy-900 shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconCard({
  icon,
  title,
  body,
  tone = "light",
  className,
  children,
}: {
  icon: IconName;
  title: string;
  body?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Card tone={tone} className={cn("flex h-full flex-col gap-3", className)}>
      <span
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-xl",
          tone === "dark" ? "bg-teal-400/15 text-teal-300" : "bg-navy-50 text-navy-700",
        )}
      >
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className={cn("text-lg font-semibold", tone === "dark" ? "text-white" : "text-navy-900")}>{title}</h3>
      {body ? (
        <p className={cn("text-sm leading-relaxed", tone === "dark" ? "text-navy-300" : "text-navy-600")}>{body}</p>
      ) : null}
      {children}
    </Card>
  );
}

export function LinkCard({
  href,
  icon,
  title,
  body,
  footer,
  className,
}: {
  href: string;
  icon?: IconName;
  title: string;
  body?: string;
  footer?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col gap-3 rounded-card border border-navy-100 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-lift",
        className,
      )}
    >
      {icon ? (
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-teal-50 group-hover:text-teal-700">
          <Icon name={icon} className="size-5" />
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
      {body ? <p className="text-sm leading-relaxed text-navy-600">{body}</p> : null}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-teal-700">
        {footer ?? "Learn more"}
        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
