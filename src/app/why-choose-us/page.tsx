import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { WhyChooseUsGrid, WhyLigaseEcosystemSection, TrustStrip } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Why Choose Ligase Healthcare",
  description:
    "Professional Medical Coding Services, Skill Development Programs (SDP), Final-Semester Internships, and Certification Support.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Why Choose Us", path: "/why-choose-us" }])} />

      <PageHero
        eyebrow="Why Ligase Healthcare"
        title="Eight Core Strengths That Define Our Advantage"
        description="Comprehensive healthcare medical coding services, career-oriented training, and global certification pathways unified under one dedicated partner."
        breadcrumbs={[{ label: "Why Choose Us" }]}
      />

      <WhyChooseUsGrid />
      <WhyLigaseEcosystemSection />
      <TrustStrip />
      <CTABand />
    </>
  );
}
