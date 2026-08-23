import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { ClientTypesSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Who We Serve",
  description:
    "Coding, billing and revenue cycle support for hospitals, physician practices, multi-specialty groups, diagnostic centers, ambulatory surgery centers and telehealth providers.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Who We Serve", path: "/who-we-serve" }])} />

      <PageHero
        eyebrow="Who we serve"
        title="Different settings fail in different places"
        description="A hospital's revenue problem is rarely a practice's revenue problem. The service model is shaped around where your revenue actually leaks."
        breadcrumbs={[{ label: "Who We Serve" }]}
      />

      <ClientTypesSection tone="light" />

      <CTABand
        eyebrow="Not listed?"
        title="Tell us about your organization"
        description="If your setting is not listed here, describe it. We will say honestly whether our model fits, and where it would not."
      />
    </>
  );
}
