import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white shadow-soft hover:bg-navy-800 hover:shadow-lift",
  secondary: "border border-navy-200 bg-white text-navy-900 hover:border-navy-300 hover:bg-navy-50",
  ghost: "text-navy-800 hover:bg-navy-50",
  onDark: "bg-teal-400 text-navy-950 hover:bg-teal-300",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {withArrow ? <ArrowRight className="size-4" aria-hidden /> : null}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isExternal) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
        {children}
        {withArrow ? <ArrowRight className="size-4" aria-hidden /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {withArrow ? <ArrowRight className="size-4" aria-hidden /> : null}
    </Link>
  );
}
