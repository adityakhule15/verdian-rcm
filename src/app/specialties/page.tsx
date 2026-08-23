import { PageHero } from "@/components/ui/PageHero";
import { CTABand } from "@/components/ui/CTABand";
import { SpecialtiesGrid } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { specialties } from "@/content/specialties";

export const metadata = buildMetadata({
  title: "Specialties",
  description:
    "Multi-specialty medical coding across cardiology, orthopedics, surgery, gastroenterology, radiology, pathology, emergency medicine, behavioral health and more.",
  path: "/specialties",
});

export default function SpecialtiesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Specialties", path: "/specialties" }])} />

      <PageHero
        eyebrow="Specialties"
        title="Multi-specialty medical coding"
        description={`${specialties.length} specialties, each with its own documentation conventions and its own ways of losing accuracy. Coders are assigned by specialty, not pooled.`}
        breadcrumbs={[{ label: "Specialties" }]}
      />

      <SpecialtiesGrid
        heading={{
          eyebrow: "Coverage",
          title: "Pick your specialty",
          description:
            "Each page sets out what we focus on in that specialty and the mistakes we see most often, so you can judge the depth before you talk to us.",
        }}
      />

      <CTABand
        eyebrow="Specialty not listed"
        title="Ask about your specialty directly"
        description="If your specialty is not on this list, tell us what it is. We will say plainly whether we have the depth for it rather than promising coverage we do not have."
      />
    </>
  );
}
