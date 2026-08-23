import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, LinkCard } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand, ServiceLeadBlock } from "@/components/ui/CTABand";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata, serviceSchema } from "@/lib/seo";
import { getSpecialty, specialties } from "@/content/specialties";
import { getService } from "@/content/services";

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata(props: PageProps<"/specialties/[slug]">) {
  const { slug } = await props.params;
  const specialty = getSpecialty(slug);
  if (!specialty) return {};

  return buildMetadata({
    title: `${specialty.name} Medical Coding Services`,
    description: specialty.metaDescription,
    path: `/specialties/${specialty.slug}`,
  });
}

export default async function SpecialtyPage(props: PageProps<"/specialties/[slug]">) {
  const { slug } = await props.params;
  const specialty = getSpecialty(slug);
  if (!specialty) notFound();

  const relatedServices = specialty.related
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const others = specialties.filter((item) => item.slug !== specialty.slug).slice(0, 8);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${specialty.name} Medical Coding`,
            description: specialty.metaDescription,
            path: `/specialties/${specialty.slug}`,
          }),
          breadcrumbSchema([
            { label: "Specialties", path: "/specialties" },
            { label: specialty.name, path: `/specialties/${specialty.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Specialty coding"
        title={`${specialty.name} medical coding`}
        description={specialty.summary}
        breadcrumbs={[{ label: "Specialties", href: "/specialties" }, { label: specialty.name }]}
      >
        <div className="pt-2">
          <ButtonLink href="/contact" variant="onDark" size="lg" withArrow>
            Discuss {specialty.name.toLowerCase()} coding
          </ButtonLink>
        </div>
      </PageHero>

      <Section labelledBy="focus-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full space-y-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon name={specialty.icon} className="size-5" />
                </span>
                <h2 id="focus-heading" className="text-xl font-bold text-navy-900">
                  What our coders focus on
                </h2>
              </div>
              <CheckList items={specialty.focus} />
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card className="h-full space-y-5 border-navy-200 bg-navy-50">
              <h2 className="text-xl font-bold text-navy-900">Where accuracy is most often lost</h2>
              <p className="text-sm leading-relaxed text-navy-600">
                These are the recurring failure points in {specialty.name.toLowerCase()} coding. Naming them is how they
                get reviewed rather than repeated.
              </p>
              <CheckList items={specialty.pitfalls} />
            </Card>
          </Reveal>
        </div>
      </Section>

      {relatedServices.length > 0 ? (
        <Section tone="tint" labelledBy="services-heading">
          <SectionHeading
            id="services-heading"
            eyebrow="Related services"
            title={`Services that support ${specialty.name.toLowerCase()}`}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <ServiceLeadBlock serviceTitle={`${specialty.name} coding`} />

      <Section labelledBy="other-heading">
        <SectionHeading id="other-heading" eyebrow="More specialties" title="Other specialties we cover" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/specialties/${item.slug}`}
              className="group flex items-center justify-between gap-3 rounded-card border border-navy-100 bg-white px-5 py-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="text-sm font-semibold text-navy-900">{item.name}</span>
              <ArrowRight
                className="size-4 shrink-0 text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-teal-700"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
