import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import {
  CareersSection,
  CertificationSection,
  ContactPreview,
  HealthcareSolutionsSection,
  InternshipSection,
  MedicalCodingSpotlight,
  MissionVisionSection,
  StudentSuccessSection,
  TrainingSection,
  TrustStrip,
  WhoWeAreSection,
  WhyChooseUsGrid,
  WhyLigaseEcosystemSection,
} from "@/components/sections/Shared";
import { CTABand } from "@/components/ui/CTABand";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.shareDescription,
  keywords: [
    "Ligase Healthcare",
    "medical coding services",
    "medical coding training",
    "skill development programs",
    "final semester internship healthcare",
    "CPC certification preparation",
    "CCS exam training",
    "CRC risk adjustment coder",
    "healthcare career ecosystem",
  ],
  alternates: { canonical: absoluteUrl("/") },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section: Empowering Healthcare. Building Skills. Creating Opportunities. */}
      <Hero />

      {/* 2. Trust / Introduction Strip */}
      <TrustStrip />

      {/* 3. Who We Are (Split Screen) */}
      <WhoWeAreSection />

      {/* 4. Our Mission & Our Vision */}
      <MissionVisionSection />

      {/* 5. Our Healthcare Solutions */}
      <HealthcareSolutionsSection />

      {/* 6. Medical Coding Services Spotlight */}
      <MedicalCodingSpotlight />

      {/* 7. Training Programs & Learning Journey */}
      <TrainingSection />

      {/* 8. Internship Opportunities */}
      <InternshipSection />

      {/* 9. Certification Support (CPC, CCS, CRC) & Journey */}
      <CertificationSection />

      {/* 10. Why Choose Us (8 Interactive Cards) */}
      <WhyChooseUsGrid />

      {/* 11. Why Ligase? (Healthcare + Training + Career Ecosystem) */}
      <WhyLigaseEcosystemSection />

      {/* 12. Student / Professional Success Section */}
      <StudentSuccessSection />



      {/* 14. Careers Preview */}
      <CareersSection />

      {/* 15. Closing Call to Action */}
      <CTABand />

      {/* 16. Contact Preview */}
      <ContactPreview />
    </>
  );
}
