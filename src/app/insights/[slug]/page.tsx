import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { insightCategories, insights, insightsBySlug } from "@/content/insights";

const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const insight = insightsBySlug.get(slug);
  if (!insight) return {};

  return buildMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
  });
}

export default async function InsightPage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const insight = insightsBySlug.get(slug);
  if (!insight) notFound();

  const category = insightCategories.find((item) => item.id === insight.category);
  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: insight.title,
            description: insight.excerpt,
            path: `/insights/${insight.slug}`,
            publishedAt: insight.publishedAt,
            author: insight.author,
          }),
          breadcrumbSchema([
            { label: "Insights", path: "/insights" },
            { label: insight.title, path: `/insights/${insight.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={category?.label}
        title={insight.title}
        description={insight.excerpt}
        breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: insight.title }]}
      >
        <p className="pt-2 text-sm text-navy-300">
          <time dateTime={insight.publishedAt}>{formatter.format(new Date(insight.publishedAt))}</time>
          {" · "}
          {insight.readingMinutes} min read {" · "} {insight.author}
        </p>
      </PageHero>

      <Section labelledBy="article-heading">
        <h2 id="article-heading" className="sr-only">
          Article
        </h2>
        <article className="max-w-3xl space-y-10">
          {insight.body.map((block, index) => (
            <Reveal key={block.heading ?? index} className="space-y-4">
              {block.heading ? (
                <h3 className="font-display text-2xl font-bold text-navy-900">{block.heading}</h3>
              ) : null}
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-navy-700">
                  {paragraph}
                </p>
              ))}
              {block.bullets ? <CheckList items={block.bullets} className="pt-2" /> : null}
            </Reveal>
          ))}
        </article>
      </Section>

      <Section tone="tint" labelledBy="related-heading">
        <SectionHeading id="related-heading" eyebrow="Keep reading" title="Related insights" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="group flex h-full flex-col gap-3 rounded-card border border-navy-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <h3 className="text-lg font-bold leading-snug text-navy-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{item.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-teal-700">
                Read article
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
