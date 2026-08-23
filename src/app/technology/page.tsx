import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { TechnologySection } from "@/components/sections/Shared";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technology",
  description:
    "Technology-enabled healthcare operations: EHR and practice management workflows, clearinghouse handling, reporting dashboards, secure file transfer and quality monitoring.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Technology", path: "/technology" }])} />

      <PageHero
        eyebrow="Technology"
        title="Tools that remove error, not judgement"
        description="Tooling matters where it removes manual error and creates visibility. It does not replace someone who understands the documentation in front of them."
        breadcrumbs={[{ label: "Technology" }]}
      />

      <TechnologySection tone="light" />

      <Section tone="tint" labelledBy="approach-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="We work in your systems, not around them"
            description="Moving clinical and financial data into a vendor platform creates a second source of truth, reconciliation work and an access problem. We avoid all three by working where your data already lives."
          />
          <Reveal delay={80} className="space-y-5">
            <Card className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">What this gives you</p>
              <CheckList
                items={[
                  "Your EHR and PM system remain the authoritative record",
                  "Access is provisioned and revoked by you",
                  "No data migration or duplicate reconciliation",
                  "Audit trails stay inside your systems",
                  "No lock-in created by a proprietary platform",
                ]}
              />
            </Card>
            <Card className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Where automation helps</p>
              <CheckList
                items={[
                  "Claim scrubbing against payer edit rules before submission",
                  "Queue allocation and turnaround tracking",
                  "Remittance import and line-level posting",
                  "Denial categorisation and trend aggregation",
                  "Quality sampling and accuracy tracking",
                ]}
              />
            </Card>
          </Reveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Integration"
        title="Tell us what you run"
        description="Share your EHR, practice management system and clearinghouse setup and we will describe exactly how our team would work inside it."
      />
    </>
  );
}
