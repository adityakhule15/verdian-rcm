import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { MissionVisionSection, WhyChooseUsGrid, WhyLigaseEcosystemSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { whoWeAre, mission, vision } from "@/content/company";
import { site } from "@/content/site";
import { Check, Sparkles } from "lucide-react";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "We are a healthcare services and training company offering medical coding, healthcare solutions, professional training, internships, and certification support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "About Us", path: "/about" }])} />

      <PageHero
        eyebrow="About Ligase Healthcare"
        title="Connecting Healthcare Services, Skills & Career Growth"
        description="Ligase Healthcare is an integrated healthcare solutions and professional skill development company dedicated to empowering healthcare organizations and building the medical workforce of tomorrow."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Section labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            id="story-heading"
            eyebrow="Who We Are"
            title="A Complete Healthcare Career & Services Ecosystem"
            description={
              <>
                <span className="block text-navy-700">
                  {whoWeAre.content}
                </span>
                <span className="mt-4 block text-navy-600 text-sm leading-relaxed">
                  Named after 'Ligase' — the vital enzyme that joins and unites biological strands — we unite healthcare institutions demanding immaculate medical coding accuracy with ambitious life science graduates seeking fulfilling careers.
                </span>
              </>
            }
          />

          <Reveal delay={80} className="space-y-4">
            <Card className="space-y-2 border-teal-200 bg-teal-50/40">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-800">Our Mission</p>
              <p className="text-sm font-medium leading-relaxed text-navy-900">{mission.statement}</p>
            </Card>

            <Card className="space-y-2 border-navy-100 bg-white">
              <p className="text-xs font-bold uppercase tracking-wider text-navy-600">Our Vision</p>
              <p className="text-sm font-medium leading-relaxed text-navy-900">{vision.statement}</p>
            </Card>

            <Card className="space-y-2 border-navy-900 bg-navy-950 text-white shadow-lift">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-teal-300" />
                <p className="text-xs font-bold uppercase tracking-wider text-teal-300">Brand Tagline</p>
              </div>
              <p className="font-display text-base font-bold text-white">{site.tagline}</p>
              <p className="text-xs text-navy-300">{site.supportingLine}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <MissionVisionSection />

      <WhyLigaseEcosystemSection />

      <WhyChooseUsGrid />

      <CTABand
        eyebrow="Join Our Journey"
        title="Ready to Partner with Ligase Healthcare?"
        description="Whether you are looking for medical coding solutions or looking to launch your healthcare coding career, we are ready to assist you."
      />
    </>
  );
}
