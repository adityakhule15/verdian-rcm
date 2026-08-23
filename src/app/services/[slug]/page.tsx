import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, LinkCard } from "@/components/ui/Card";
import { CheckList, Prose, WorkflowStrip } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand, ServiceLeadBlock } from "@/components/ui/CTABand";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { getService, serviceGroups, services, servicesInGroup } from "@/content/services";
import { specialties } from "@/content/specialties";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const group = serviceGroups.find((item) => item.id === service.group);
  const siblings = servicesInGroup(service.group).filter((item) => item.slug !== service.slug);
  const relatedSpecialties = specialties.filter((specialty) => specialty.related.includes(service.slug)).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          breadcrumbSchema([
            { label: "Services", path: "/services" },
            { label: service.navLabel, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        description={service.summary}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.navLabel }]}
      >
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <ButtonLink href="/contact" variant="onDark" size="lg" withArrow>
            {service.ctaLabel}
          </ButtonLink>
          {group ? (
            <ButtonLink
              href="/services"
              size="lg"
              className="border border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              All {group.label.toLowerCase()} services
            </ButtonLink>
          ) : null}
        </div>
      </PageHero>

      <Section labelledBy="overview-heading">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <SectionHeading id="overview-heading" eyebrow="Overview" title="What this service covers" />
            <Reveal>
              <Prose paragraphs={service.intro} />
            </Reveal>
          </div>

          <Reveal delay={80} className="space-y-5">
            {service.deliverables.map((deliverable) => (
              <Card key={deliverable.heading} className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{deliverable.heading}</p>
                <CheckList items={deliverable.items} />
              </Card>
            ))}
          </Reveal>
        </div>
      </Section>

      {service.workflow ? (
        <Section tone="tint" labelledBy="workflow-heading">
          <SectionHeading
            id="workflow-heading"
            eyebrow="Workflow"
            title="How the work moves"
            description="Each stage has a defined owner and a defined output, so nothing waits for someone to notice it."
          />
          <Reveal className="mt-10">
            <WorkflowStrip steps={service.workflow} />
          </Reveal>
        </Section>
      ) : null}

      {service.highlights ? (
        <Section labelledBy="highlights-heading">
          <SectionHeading id="highlights-heading" eyebrow="Detail" title="Worth knowing" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 50} className="h-full">
                <Card className="h-full space-y-2">
                  <p className="font-semibold text-navy-900">{highlight.title}</p>
                  <p className="text-sm leading-relaxed text-navy-600">{highlight.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {relatedSpecialties.length > 0 ? (
        <Section tone="tint" labelledBy="specialty-heading">
          <SectionHeading
            id="specialty-heading"
            eyebrow="Specialties"
            title="Specialties where this comes up most"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSpecialties.map((specialty) => (
              <Link
                key={specialty.slug}
                href={`/specialties/${specialty.slug}`}
                className="group flex items-center justify-between gap-3 rounded-card border border-navy-100 bg-white px-5 py-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Icon name={specialty.icon} className="size-4.5" />
                  </span>
                  <span className="text-sm font-semibold text-navy-900">{specialty.name}</span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-teal-700"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <ServiceLeadBlock serviceTitle={service.title} />

      {siblings.length > 0 && group ? (
        <Section labelledBy="siblings-heading">
          <SectionHeading
            id="siblings-heading"
            eyebrow={group.label}
            title="Related services"
            description={group.blurb}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.slice(0, 6).map((sibling) => (
              <LinkCard
                key={sibling.slug}
                href={`/services/${sibling.slug}`}
                icon={sibling.icon}
                title={sibling.navLabel}
                body={sibling.summary}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <CTABand />
    </>
  );
}
