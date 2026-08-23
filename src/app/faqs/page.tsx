import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { FaqSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { faqs } from "@/content/faqs";

export const metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers about our medical coding and RCM services, coding systems supported, quality assurance, AR and denial management, credentialing, data handling and transition.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ label: "FAQs", path: "/faqs" }])]} />

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="The questions healthcare organizations ask us first, answered without marketing padding."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <FaqSection />

      <CTABand
        eyebrow="Still have questions"
        title="Ask us something specific"
        description="Send the actual question. A specialist will answer it rather than routing you to a brochure."
      />
    </>
  );
}
