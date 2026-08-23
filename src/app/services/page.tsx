import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { ServicesOverview } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Medical coding, medical billing and end-to-end revenue cycle management services, plus clinical documentation improvement, HEDIS support, provider education and scribing.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Services", path: "/services" }])} />

      <PageHero
        eyebrow="Services"
        title="Comprehensive healthcare RCM solutions"
        description={`${services.length} services across medical coding, revenue cycle management and healthcare support. Take the full cycle, or just the stages where you need capacity.`}
        breadcrumbs={[{ label: "Services" }]}
      />

      <ServicesOverview
        heading={{
          eyebrow: "Browse by group",
          title: "Three groups, one revenue cycle",
          description:
            "Coding, revenue cycle management and healthcare support are listed separately so you can find a specific capability quickly — but they are delivered as one connected process.",
        }}
      />

      <CTABand
        eyebrow="Not sure where to start"
        title="Tell us where revenue is leaking"
        description="Describe the symptom — aged AR, repeat denials, coding backlog, authorization failures — and we will recommend the services that address it and the ones you do not need."
      />
    </>
  );
}
