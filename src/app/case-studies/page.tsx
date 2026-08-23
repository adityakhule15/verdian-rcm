import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { CaseStudiesSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Anonymised healthcare RCM engagements describing the problem, what changed and what was measured in coding accuracy, AR management and denial prevention.",
  path: "/case-studies",
});

export default function CaseStudiesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Case Studies", path: "/case-studies" }])} />

      <PageHero
        eyebrow="Case studies"
        title="What changed, and how we know"
        description="Each case describes the problem, what we changed and what was measured. Client names and figures are published only where they are verified and permitted."
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      <CaseStudiesSection />

      <CTABand />
    </>
  );
}
