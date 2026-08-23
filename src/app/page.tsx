import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import {
  CaseStudiesSection,
  DeliveryProcess,
  FaqSection,
  PerformanceSection,
  QualityAndCompliance,
  RevenueCycleFlow,
  ServicesOverview,
  SpecialtiesGrid,
  TechnologySection,
  TestimonialsSection,
  TrustStrip,
  WhyChooseUsGrid,
} from "@/components/sections/Shared";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList, WorkflowStrip } from "@/components/ui/Bits";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, faqSchema } from "@/lib/seo";
import { faqs } from "@/content/faqs";
import { getService } from "@/content/services";
import { site } from "@/content/site";

const HOMEPAGE_FAQ_COUNT = 6;

export const metadata: Metadata = {
  description: site.description,
  keywords: [
    "medical coding services",
    "revenue cycle management",
    "medical billing services",
    "denial management",
    "risk adjustment coding",
    "healthcare RCM company",
  ],
  alternates: { canonical: absoluteUrl("/") },
};

/** Section 9 — medical coding spotlight, driven by the service content. */
function MedicalCodingSpotlight() {
  const coding = getService("medical-coding");
  if (!coding) return null;

  return (
    <Section labelledBy="coding-heading">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <SectionHeading
          id="coding-heading"
          eyebrow="Medical coding"
          title="Coding accuracy is where the revenue cycle is won or lost"
          description={coding.intro[0]}
        >
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services/medical-coding" withArrow>
              Explore medical coding
            </ButtonLink>
            <ButtonLink href="/services/risk-adjustment-coding" variant="secondary">
              Risk adjustment & HCC
            </ButtonLink>
          </div>
        </SectionHeading>

        <Reveal delay={80} className="space-y-6 rounded-panel border border-navy-100 bg-navy-50/60 p-6 sm:p-8">
          {coding.deliverables.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-700">{group.heading}</p>
              <CheckList items={group.items} columns={2} className="mt-4" />
            </div>
          ))}
        </Reveal>
      </div>

      {coding.workflow ? (
        <Reveal className="mt-14">
          <p className="pb-4 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">Coding workflow</p>
          <WorkflowStrip steps={coding.workflow} />
        </Reveal>
      ) : null}
    </Section>
  );
}

/** Section 6 — about the company. */
function AboutPreview() {
  return (
    <Section labelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          id="about-heading"
          eyebrow="About us"
          title="Your strategic partner in healthcare revenue cycle management"
          description={
            <>
              <span className="block">
                We deliver medical coding, medical billing and revenue cycle management for healthcare providers and
                organizations. Our teams combine healthcare domain knowledge, coding expertise, quality assurance and
                process discipline to improve both operational efficiency and financial performance.
              </span>
              <span className="mt-4 block">
                From clinical documentation review and coding through claims, payment posting, accounts receivable and
                denial management, the services are designed to support the complete revenue cycle rather than a slice of
                it.
              </span>
            </>
          }
        >
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about" withArrow>
              Learn more about us
            </ButtonLink>
            <ButtonLink href="/why-choose-us" variant="secondary">
              Why choose us
            </ButtonLink>
          </div>
        </SectionHeading>

        <Reveal delay={80}>
          <div className="rounded-panel border border-navy-100 bg-white p-8 shadow-soft">
            <p className="font-display text-xl font-bold leading-snug text-navy-900">
              Our goal is deliberately narrow.
            </p>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Improve accuracy",
                  body: "Right the first time, because rework costs more than the original work.",
                },
                {
                  title: "Reduce revenue leakage",
                  body: "Find what is being lost quietly: underpayments, missed charges, aged claims.",
                },
                {
                  title: "Accelerate reimbursement",
                  body: "Shorten the distance between the encounter and the payment.",
                },
              ].map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="font-display text-lg font-extrabold text-teal-700">0{index + 1}</span>
                  <div>
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-navy-100 pt-6 text-sm leading-relaxed text-navy-600">
              {site.supportingLine}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Closing block before the footer, pointing at the contact page. */
function ContactPreview() {
  return (
    <Section tone="tint" labelledBy="contact-preview-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          id="contact-preview-heading"
          eyebrow="Contact"
          title="Let's start a conversation"
          description="Tell us about your organization and the services you are looking for. We will review the requirement and come back with a recommended service model."
        />
        <Reveal delay={80} className="rounded-panel border border-navy-100 bg-white p-8 shadow-soft">
          <dl className="space-y-5">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500">Call</dt>
              <dd className="mt-1.5">
                <a href={site.contact.phoneHref} className="text-lg font-semibold text-navy-900 hover:text-teal-700">
                  {site.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500">Email</dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-lg font-semibold text-navy-900 hover:text-teal-700"
                >
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-navy-500">Availability</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-navy-600">{site.contact.hours}</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-1.5 border-t border-navy-100 pt-6 text-sm font-semibold text-teal-700"
          >
            Open the enquiry form
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.slice(0, HOMEPAGE_FAQ_COUNT))} />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesOverview />
      <MedicalCodingSpotlight />
      <RevenueCycleFlow />
      <SpecialtiesGrid limit={12} />
      <WhyChooseUsGrid />
      <QualityAndCompliance />
      <TechnologySection />
      <DeliveryProcess />
      <PerformanceSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FaqSection limit={HOMEPAGE_FAQ_COUNT} />
      <CTABand />
      <ContactPreview />
    </>
  );
}
