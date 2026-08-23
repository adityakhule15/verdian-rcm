import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconCard, LinkCard } from "@/components/ui/Card";
import { AwaitingContent, CheckList, WorkflowStrip } from "@/components/ui/Bits";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { site } from "@/content/site";
import { faqs } from "@/content/faqs";
import { specialties } from "@/content/specialties";
import { deliveryProcess, revenueCycleStages } from "@/content/process";
import { caseStudies } from "@/content/caseStudies";
import {
  clientTypes,
  complianceNotice,
  coreValues,
  qualityPractices,
  technologyCategories,
  technologyNotice,
  trustPoints,
  whyChooseUs,
} from "@/content/company";
import { serviceGroups, servicesInGroup } from "@/content/services";

/** Section 5 — trust strip. */
export function TrustStrip() {
  return (
    <Section tone="tint" className="py-14 lg:py-16" labelledBy="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow="Why healthcare organizations choose us"
        title="Built for accuracy, compliance and accountability"
        align="center"
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {trustPoints.map((point, index) => (
          <Reveal key={point.title} delay={index * 60} className="h-full">
            <IconCard icon={point.icon} title={point.title} body={point.body} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Sections 8 and 9 — service overview by group. */
export function ServicesOverview({
  heading = {
    eyebrow: "Our services",
    title: "Comprehensive healthcare RCM solutions",
    description:
      "From medical coding to final payment, our integrated services help healthcare organizations manage the financial and administrative processes that decide whether care gets paid for.",
  },
}: {
  /** Pass a different heading where the page hero already carries this one. */
  heading?: { eyebrow: string; title: string; description: string };
}) {
  return (
    <Section labelledBy="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <div className="mt-12 space-y-12">
        {serviceGroups.map((group) => (
          <Reveal key={group.id}>
            <div className="flex flex-col gap-3 border-b border-navy-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon name={group.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">{group.label}</h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-navy-600">{group.blurb}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicesInGroup(group.id).map((service) => (
                <LinkCard
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  icon={service.icon}
                  title={service.navLabel}
                  body={service.summary}
                  footer={service.ctaLabel}
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 14 — the revenue cycle as one connected process. */
export function RevenueCycleFlow() {
  return (
    <Section tone="dark" labelledBy="flow-heading">
      <SectionHeading
        id="flow-heading"
        tone="dark"
        eyebrow="End-to-end delivery"
        title="Nothing falls between the handoffs"
        description="Most revenue leakage happens where ownership changes hands. We run the cycle as one process with a named owner and a measured outcome at every stage."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {revenueCycleStages.map((stage, index) => (
          <Reveal key={stage.title} delay={index * 40}>
            <Card tone="dark" className="flex h-full items-start gap-4">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-400/15 text-sm font-bold text-teal-300">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{stage.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-300">{stage.body}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <ButtonLink href="/services/revenue-cycle-management" variant="onDark" withArrow>
          Explore end-to-end RCM
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

/** Section 12 — specialty coverage. */
export function SpecialtiesGrid({
  limit,
  heading = {
    eyebrow: "Specialties",
    title: "Multi-specialty medical coding",
    description:
      "Coders are assigned by specialty rather than pooled, so the person reading your documentation this month is the one who read it last month.",
  },
}: {
  limit?: number;
  /** Pass a different heading where the page hero already carries this one. */
  heading?: { eyebrow: string; title: string; description: string };
}) {
  const shown = limit ? specialties.slice(0, limit) : specialties;

  return (
    <Section tone="tint" labelledBy="specialties-heading">
      <SectionHeading
        id="specialties-heading"
        eyebrow={heading.eyebrow}
        title={heading.title}
        description={heading.description}
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((specialty, index) => (
          <Reveal key={specialty.slug} delay={Math.min(index * 25, 200)}>
            <Link
              href={`/specialties/${specialty.slug}`}
              className="group flex h-full items-center justify-between gap-3 rounded-card border border-navy-100 bg-white px-5 py-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition group-hover:bg-teal-50 group-hover:text-teal-700">
                  <Icon name={specialty.icon} className="size-4.5" />
                </span>
                <span className="text-sm font-semibold text-navy-900">{specialty.name}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-teal-700" aria-hidden />
            </Link>
          </Reveal>
        ))}
      </div>

      {limit && specialties.length > limit ? (
        <Reveal className="mt-10">
          <ButtonLink href="/specialties" variant="secondary" withArrow>
            View all {specialties.length} specialties
          </ButtonLink>
        </Reveal>
      ) : null}
    </Section>
  );
}

/** Section 24 — why choose us. */
export function WhyChooseUsGrid({ tone = "light" }: { tone?: "light" | "tint" }) {
  return (
    <Section tone={tone} labelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow="Why choose us"
        title="What working with us actually looks like"
        description="No claims we cannot stand behind. These are the operating commitments that show up in day-to-day delivery."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, index) => (
          <Reveal key={item.title} delay={index * 50} className="h-full">
            <IconCard icon={item.icon} title={item.title} body={item.body} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 26 — quality, security and compliance. */
export function QualityAndCompliance() {
  return (
    <Section labelledBy="quality-heading">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          id="quality-heading"
          eyebrow="Quality, security & compliance"
          title="Discipline you can audit, not adjectives"
          description="Healthcare organizations need accuracy, confidentiality and process discipline. Ours is built on documented workflows, quality monitoring, access control and continuous training."
        >
          <div className="mt-2 rounded-card border border-navy-200 bg-navy-50 p-5">
            <p className="text-sm font-semibold text-navy-900">On compliance claims</p>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">{complianceNotice}</p>
          </div>
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2">
          {qualityPractices.map((practice, index) => (
            <Reveal key={practice.title} delay={index * 40} className="h-full">
              <div className="flex h-full items-start gap-3 rounded-card border border-navy-100 bg-white p-5 shadow-soft">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon name={practice.icon} className="size-4.5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">{practice.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">{practice.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Section 27 — technology, described by category. */
export function TechnologySection({ tone = "tint" }: { tone?: "light" | "tint" }) {
  return (
    <Section tone={tone} labelledBy="technology-heading">
      <SectionHeading
        id="technology-heading"
        eyebrow="Technology"
        title="Technology-enabled healthcare operations"
        description="Our teams work inside your systems rather than moving your data into ours. That keeps your records authoritative and your access controls yours to revoke."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {technologyCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 40} className="h-full">
            <IconCard icon={category.icon} title={category.title} body={category.body} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <p className="max-w-3xl text-sm leading-relaxed text-navy-500">{technologyNotice}</p>
      </Reveal>
    </Section>
  );
}

/** Section 23 — delivery process. */
export function DeliveryProcess({ tone = "light" }: { tone?: "light" | "tint" }) {
  return (
    <Section tone={tone} labelledBy="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="Our process"
        title="How an engagement actually starts"
        description="Seven stages, each with a defined output. You will know what happens next and who owns it at every point."
      />

      <ol className="mt-12 grid gap-5 lg:grid-cols-2">
        {deliveryProcess.map((step, index) => (
          <Reveal key={step.step} delay={index * 40} as="li" className="h-full">
            <div className="flex h-full gap-5 rounded-card border border-navy-100 bg-white p-6 shadow-soft">
              <span className="font-display text-2xl font-extrabold text-navy-200">
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600">{step.body}</p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {step.outputs.map((output) => (
                    <li
                      key={output}
                      className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.6875rem] font-semibold text-navy-700"
                    >
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/**
 * Section 29 — performance.
 *
 * Renders metric labels and how each is measured. Numbers appear only for
 * metrics that carry a verified value in site.ts.
 */
export function PerformanceSection() {
  const verified = site.metrics.filter((metric) => metric.value);

  return (
    <Section tone="dark" labelledBy="performance-heading">
      <SectionHeading
        id="performance-heading"
        tone="dark"
        eyebrow="Performance"
        title="Built around measurable performance"
        description="These are the metrics we report on and hold ourselves to. We publish numbers only where the company can substantiate them, so figures appear here as they are verified."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 40} className="h-full">
            <Card tone="dark" className="flex h-full flex-col gap-2">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-300">{metric.label}</p>
              <p className="font-display text-3xl font-extrabold text-white">
                {metric.value ?? <span className="text-navy-500">Reported</span>}
              </p>
              <p className="text-sm leading-relaxed text-navy-300">{metric.note}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      {verified.length === 0 ? (
        <Reveal className="mt-10 rounded-panel border border-dashed border-white/20 bg-white/[0.03] p-6">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-300">Internal note</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-navy-300">
            Add verified figures to <code className="rounded bg-white/10 px-1.5 py-0.5">site.metrics</code> in{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5">src/content/site.ts</code> and they will render as
            headline numbers here. Section 29 of the website script prohibits publishing unsubstantiated statistics such
            as accuracy percentages, coder counts or denial reduction claims.
          </p>
        </Reveal>
      ) : null}
    </Section>
  );
}

/** Section 30 — case studies. */
export function CaseStudiesSection({ limit }: { limit?: number }) {
  const shown = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <Section labelledBy="case-studies-heading">
      <SectionHeading
        id="case-studies-heading"
        eyebrow="Case studies"
        title="Results that matter"
        description="Anonymised engagements describing the problem, what we changed and what was measured. Client names and figures are published only with permission and verification."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {shown.map((study, index) => (
          <Reveal key={study.slug} delay={index * 60} className="h-full">
            <Link
              href={`/case-studies/${study.slug}`}
              className="group flex h-full flex-col gap-4 rounded-card border border-navy-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{study.reference}</span>
              <h3 className="text-lg font-bold leading-snug text-navy-900">{study.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">{study.clientType}</p>
              <p className="text-sm leading-relaxed text-navy-600">{study.challenge}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-teal-700">
                Read case study
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 31 — testimonials. Empty until genuine, permissioned quotes exist. */
export function TestimonialsSection() {
  if (site.testimonials.length === 0) {
    return (
      <Section tone="tint" labelledBy="testimonials-heading">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client feedback"
          title="What our clients say"
          description="This section is reserved for genuine client testimonials."
        />
        <AwaitingContent title="Awaiting approved testimonials" className="mt-8">
          Add real testimonials to <code className="rounded bg-white px-1.5 py-0.5">site.testimonials</code> in{" "}
          <code className="rounded bg-white px-1.5 py-0.5">src/content/site.ts</code>, each with the person&apos;s name,
          designation, organization and written permission to publish. Section 31 of the website script prohibits
          placeholder or invented quotes, so nothing is shown until then.
        </AwaitingContent>
      </Section>
    );
  }

  return (
    <Section tone="tint" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Client feedback"
        title="What our clients say"
        align="center"
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {site.testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex h-full flex-col gap-5">
            <blockquote className="text-base leading-relaxed text-navy-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <div className="mt-auto border-t border-navy-100 pt-4">
              <p className="font-semibold text-navy-900">{testimonial.name}</p>
              <p className="text-sm text-navy-600">
                {testimonial.designation}, {testimonial.organization}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/** Section 32 — FAQ. */
export function FaqSection({ limit }: { limit?: number }) {
  const shown = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Section labelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions we get asked first"
          description="If your question is not here, ask it directly — we would rather answer it than have you guess."
        >
          <ButtonLink href="/contact" variant="secondary" className="mt-3 self-start" withArrow>
            Ask us directly
          </ButtonLink>
        </SectionHeading>

        <Reveal>
          <Accordion items={shown} />
          {limit && faqs.length > limit ? (
            <Link href="/faqs" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
              See all {faqs.length} questions
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}

/** Section 28 — who we serve. */
export function ClientTypesSection({ tone = "tint" }: { tone?: "light" | "tint" }) {
  return (
    <Section tone={tone} labelledBy="clients-heading">
      <SectionHeading
        id="clients-heading"
        eyebrow="Who we serve"
        title="Healthcare organizations we support"
        description="Different settings fail in different places. The service model changes accordingly."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {clientTypes.map((client, index) => (
          <Reveal key={client.title} delay={index * 50} className="h-full">
            <IconCard icon={client.icon} title={client.title} body={client.body}>
              <CheckList items={client.needs} className="mt-3 border-t border-navy-100 pt-4" />
            </IconCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 7 — core values, reused on the about page. */
export function CoreValuesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {coreValues.map((value, index) => (
        <Reveal key={value.title} delay={index * 50} className="h-full">
          <IconCard icon={value.icon} title={value.title} body={value.body} />
        </Reveal>
      ))}
    </div>
  );
}

/** Section 20 — quality assurance loop, reused across pages. */
export function QualityLoop({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <WorkflowStrip
      tone={tone}
      steps={["Coder review", "QA review", "Error analysis", "Feedback", "Corrective action", "Re-audit"]}
    />
  );
}
