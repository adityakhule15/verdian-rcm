import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { QualityLoop, WhyChooseUsGrid } from "@/components/sections/Shared";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Why Choose Us",
  description:
    "Experienced healthcare professionals, quality assurance inside the workflow, multi-specialty coverage, scalable delivery, data security and transparent reporting.",
  path: "/why-choose-us",
});

const differences = [
  {
    claim: "Specialty-aligned coders, not a shared pool",
    detail:
      "The coder reading your operative notes this month is the one who read them last month. Familiarity is what makes consistent coding possible.",
  },
  {
    claim: "Quality assurance is delivery, not an add-on",
    detail:
      "Audit sampling, error categorisation, coder feedback and re-audit run as part of the account, at a higher rate during transition.",
  },
  {
    claim: "Denials reported by cause, not just count",
    detail:
      "You get the reason claims were denied and which upstream process created them, so prevention is possible rather than theoretical.",
  },
  {
    claim: "Your systems stay authoritative",
    detail:
      "We work inside your EHR and practice management system under credentials you control and can revoke immediately.",
  },
  {
    claim: "Figures only where we can evidence them",
    detail:
      "No accuracy percentages, coder counts or denial reduction claims on this site that the company cannot substantiate on request.",
  },
  {
    claim: "A named owner, not a shared inbox",
    detail:
      "An operations manager owns your account performance, reporting cadence and escalations end to end.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Why Choose Us", path: "/why-choose-us" }])} />

      <PageHero
        eyebrow="Why choose us"
        title="Six commitments that show up in the daily work"
        description="Every RCM company says accuracy, compliance and partnership. These are the specific operating choices behind ours."
        breadcrumbs={[{ label: "Why Choose Us" }]}
      />

      <WhyChooseUsGrid />

      <Section tone="tint" labelledBy="difference-heading">
        <SectionHeading
          id="difference-heading"
          eyebrow="In practice"
          title="What that means concretely"
          description="The same commitments, expressed as things you can hold us to."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {differences.map((item, index) => (
            <Reveal key={item.claim} delay={index * 40} className="h-full">
              <div className="flex h-full gap-4 rounded-card border border-navy-100 bg-white p-6 shadow-soft">
                <span className="font-display text-xl font-extrabold text-navy-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{item.claim}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="qa-loop-heading">
        <SectionHeading
          id="qa-loop-heading"
          eyebrow="Quality loop"
          title="The loop that makes the difference"
          description="Most quality programs stop at feedback. The last step is what proves the correction worked."
        />
        <Reveal className="mt-10">
          <QualityLoop />
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
