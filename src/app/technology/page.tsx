import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { TechnologySection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technology-Enabled Healthcare Learning",
  description:
    "We believe technology can transform the way healthcare professionals learn, work, and grow. Modern digital interfaces and intelligent workflows.",
  path: "/technology",
});

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Technology", path: "/technology" }])} />

      <PageHero
        eyebrow="Technology & Innovation"
        title="Technology-Enabled Healthcare Learning"
        description="Smarter Learning. Better Skills. Stronger Healthcare. We integrate AI-inspired healthcare tooling, digital chart abstraction spaces, and real-time performance analytics."
        breadcrumbs={[{ label: "Technology" }]}
      />

      <TechnologySection />
      <CTABand />
    </>
  );
}
