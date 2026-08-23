"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { insightCategories, insights, type InsightCategory } from "@/content/insights";

const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

/** Section 41 — insights index with category filters. */
export function InsightsBrowser() {
  const [active, setActive] = useState<InsightCategory | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? insights : insights.filter((insight) => insight.category === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter insights by category">
        <FilterButton active={active === "all"} onClick={() => setActive("all")}>
          All topics
        </FilterButton>
        {insightCategories.map((category) => (
          <FilterButton
            key={category.id}
            active={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </FilterButton>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-card border border-dashed border-navy-300 bg-navy-50 p-6 text-sm text-navy-600">
          No articles published in this category yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {filtered.map((insight) => {
            const category = insightCategories.find((item) => item.id === insight.category);

            return (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex h-full flex-col gap-4 rounded-card border border-navy-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{category?.label}</span>
                <h3 className="text-lg font-bold leading-snug text-navy-900">{insight.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600">{insight.excerpt}</p>
                <p className="text-xs text-navy-500">
                  <time dateTime={insight.publishedAt}>{formatter.format(new Date(insight.publishedAt))}</time>
                  {" · "}
                  {insight.readingMinutes} min read
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-teal-700">
                  Read article
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition",
        active
          ? "border-navy-900 bg-navy-900 text-white"
          : "border-navy-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50",
      )}
    >
      {children}
    </button>
  );
}
