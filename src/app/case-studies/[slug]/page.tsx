import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, LinkCard } from "@/components/ui/Card";
import { AwaitingContent, CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/ui/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { caseStudies, caseStudiesBySlug } from "@/content/caseStudies";
import { getService } from "@/content/services";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const study = caseStudiesBySlug.get(slug);
  if (!study) return {};

  return buildMetadata({
    title: study.title,
    description: study.challenge,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const study = caseStudiesBySlug.get(slug);
  if (!study) notFound();

  const relatedServices = study.services
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Case Studies", path: "/case-studies" },
          { label: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />

      <PageHero
        eyebrow={study.reference}
        title={study.title}
        description={study.clientType}
        breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: study.reference }]}
      />

      <Section labelledBy="detail-heading">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <SectionHeading id="detail-heading" eyebrow="Challenge" title="What was going wrong" />
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-navy-700">{study.challenge}</p>
              </Reveal>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-900">What we changed</h2>
              <Reveal>
                <CheckList items={study.approach} />
              </Reveal>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy-900">Outcome</h2>
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-navy-700">{study.result}</p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={80} className="space-y-5">
            <Card className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Engagement</p>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-navy-900">Organization type</dt>
                  <dd className="text-navy-600">{study.clientType}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy-900">Services involved</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {relatedServices.map((service) => (
                      <Badge key={service.slug}>{service.navLabel}</Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </Card>

            {study.metrics ? (
              <Card className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Verified results</p>
                <dl className="space-y-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-navy-500">{metric.label}</dt>
                      <dd className="font-display text-2xl font-extrabold text-navy-900">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            ) : (
              <AwaitingContent title="Awaiting verified figures">
                Add a <code className="rounded bg-white px-1.5 py-0.5">metrics</code> array to this case study in{" "}
                <code className="rounded bg-white px-1.5 py-0.5">src/content/caseStudies.ts</code> once the numbers are
                substantiated and, where the client is identifiable, approved in writing. Section 30 of the website
                script prohibits publishing unverified results.
              </AwaitingContent>
            )}
          </Reveal>
        </div>
      </Section>

      {relatedServices.length > 0 ? (
        <Section tone="tint" labelledBy="services-heading">
          <SectionHeading id="services-heading" eyebrow="Services" title="Services used in this engagement" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <LinkCard
                key={service.slug}
                href={`/services/${service.slug}`}
                icon={service.icon}
                title={service.navLabel}
                body={service.summary}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <CTABand />
    </>
  );
}
