import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { QualityAndCompliance, QualityLoop } from "@/components/sections/Shared";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getService } from "@/content/services";

export const metadata = buildMetadata({
  title: "Quality & Compliance",
  description:
    "Documented workflows, multi-level quality audits, role-based access, secure communication and continuous training for healthcare coding and RCM operations.",
  path: "/quality-and-compliance",
});

const auditTypes = getService("coding-auditing")?.deliverables ?? [];

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Quality & Compliance", path: "/quality-and-compliance" }])} />

      <PageHero
        eyebrow="Quality, security & compliance"
        title="How we protect accuracy and confidentiality"
        description="Healthcare organizations need accuracy, confidentiality and process discipline. This page describes how we operate — not certifications we do not hold."
        breadcrumbs={[{ label: "Quality & Compliance" }]}
      />

      <QualityAndCompliance />

      <Section tone="tint" labelledBy="audit-heading">
        <SectionHeading
          id="audit-heading"
          eyebrow="Audit program"
          title="How quality is actually verified"
          description="Quality assurance runs inside delivery. During transition the sampling rate is higher, then settles at the rate agreed in the engagement."
        />

        <Reveal className="mt-10">
          <QualityLoop />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {auditTypes.map((group, index) => (
            <Reveal key={group.heading} delay={index * 60} className="h-full">
              <Card className="h-full space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{group.heading}</p>
                <CheckList items={group.items} />
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="phi-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            id="phi-heading"
            eyebrow="Information handling"
            title="How protected health information is handled"
            description="Specific controls are confirmed in writing during contracting. The principles below apply to every engagement."
          />
          <Reveal delay={80}>
            <Card className="space-y-4">
              <CheckList
                items={[
                  "Access granted at the minimum level needed for the role",
                  "Access reviewed on role change and revoked on exit",
                  "Work performed in restricted environments with controlled device policies",
                  "Clinical documentation exchanged only over approved secure channels",
                  "Confidentiality obligations in employment terms",
                  "Privacy and security training at onboarding and annually",
                  "Documented incident escalation path",
                  "Client-controlled credentials in client systems",
                ]}
              />
              <p className="border-t border-navy-100 pt-4 text-sm leading-relaxed text-navy-500">
                Where a client requires a Business Associate Agreement, specific security schedules or additional
                controls, those are agreed contractually before work begins.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Due diligence"
        title="Reviewing us as a vendor?"
        description="Ask for the specifics. We would rather answer a hard security questionnaire than publish reassuring adjectives."
        primary={{ label: "Request our compliance overview", href: "/contact?intent=compliance" }}
        secondary={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
