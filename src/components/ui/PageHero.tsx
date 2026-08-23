import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-300">
        <li>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 text-navy-500" aria-hidden />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy-100">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Shared dark page header used by every page other than the homepage. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs?: readonly Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-10 pb-16 text-navy-100 lg:pt-14 lg:pb-20">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <Reveal className="mt-8 max-w-3xl space-y-5">
          {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
          <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl">{title}</h1>
          {description ? <div className="text-lg leading-relaxed text-navy-200">{description}</div> : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
