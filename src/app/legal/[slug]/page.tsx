import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { AwaitingContent, CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { legalPages, legalPagesBySlug } from "@/content/legal";
import { legalLinks } from "@/content/site";

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(props: PageProps<"/legal/[slug]">) {
  const { slug } = await props.params;
  const page = legalPagesBySlug.get(slug);
  if (!page) return {};

  return {
    ...buildMetadata({ title: page.title, description: page.summary, path: `/legal/${page.slug}` }),
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage(props: PageProps<"/legal/[slug]">) {
  const { slug } = await props.params;
  const page = legalPagesBySlug.get(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ label: page.title, path: `/legal/${page.slug}` }])}
      />

      <PageHero
        eyebrow="Legal"
        title={page.title}
        description={page.summary}
        breadcrumbs={[{ label: page.title }]}
      >
        <p className="pt-2 text-sm text-navy-300">Last reviewed: {page.lastReviewed}</p>
      </PageHero>

      <Section labelledBy="legal-heading">
        <h2 id="legal-heading" className="sr-only">
          {page.title}
        </h2>

        <AwaitingContent title="Template — not yet legally reviewed" className="mb-12 max-w-3xl">
          This page is a drafting template, not legal advice. Passages marked{" "}
          <strong className="font-semibold text-navy-800">[COMPANY TO CONFIRM]</strong> or{" "}
          <strong className="font-semibold text-navy-800">[COUNSEL TO DRAFT]</strong> must be completed and the whole
          page approved by qualified counsel before launch. Source content lives in{" "}
          <code className="rounded bg-white px-1.5 py-0.5">src/content/legal.ts</code>
        </AwaitingContent>

        <div className="grid gap-12 lg:grid-cols-[1fr_16rem]">
          <article className="max-w-3xl space-y-10">
            {page.sections.map((section) => (
              <Reveal key={section.heading} className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-navy-900">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-navy-700">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? <CheckList items={section.bullets} className="pt-1" /> : null}
              </Reveal>
            ))}
          </article>

          <nav aria-label="Legal pages" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500">Legal</p>
            <ul className="mt-4 space-y-1.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      link.href === `/legal/${page.slug}`
                        ? "block rounded-lg bg-navy-50 px-3 py-2 text-sm font-semibold text-navy-900"
                        : "block rounded-lg px-3 py-2 text-sm text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>
    </>
  );
}
