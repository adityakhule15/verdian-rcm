import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { HealthcareSolutionsSection, MedicalCodingSpotlight } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { healthcareSolutions, medicalCodingServiceAreas } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { Check, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "Healthcare Solutions & Medical Coding Services",
  description:
    "Professional medical coding, coding quality assurance, healthcare support solutions, and healthcare workforce development by Ligase Healthcare.",
  path: "/healthcare-solutions",
});

export default function HealthcareSolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Healthcare Solutions", path: "/healthcare-solutions" }])} />

      <PageHero
        eyebrow="Healthcare Solutions"
        title="Accuracy That Supports Better Healthcare Operations"
        description="Ligase Healthcare provides specialized medical coding services, quality audits, healthcare support solutions, and workforce development designed around compliance, quality, and clinical precision."
        breadcrumbs={[{ label: "Healthcare Solutions" }]}
      />

      <HealthcareSolutionsSection />

      {/* Deep-dive into each solution */}
      <Section id="medical-coding" labelledBy="solutions-breakdown-heading">
        <SectionHeading
          id="solutions-breakdown-heading"
          eyebrow="Comprehensive Capabilities"
          title="Our Full Suite of Healthcare Solutions"
          description="Every service area is staffed by certified professionals operating under strict quality assurance frameworks."
        />

        <div className="mt-12 space-y-12">
          {healthcareSolutions.map((sol, idx) => (
            <Reveal key={sol.id} delay={idx * 60}>
              <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-navy-950 text-teal-300">
                      <Icon name={sol.icon} className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy-950">{sol.title}</h3>
                      <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mt-0.5">{sol.navLabel}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
                    <ShieldCheck className="size-4 text-teal-600" />
                    98%+ Accuracy Target
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
                      Scope & Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {sol.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-navy-700 leading-relaxed">
                          <Check className="size-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-navy-50/70 p-6 border border-navy-100/60 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sol.deliverables.map((del) => (
                          <div key={del} className="flex items-center gap-2 text-xs font-semibold text-navy-800">
                            <CheckCircle2 className="size-4 text-teal-600 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-navy-500 mt-6 pt-4 border-t border-navy-100">
                      Standardized under official ICD-10-CM, CPT, HCPCS and CMS compliance rules.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <MedicalCodingSpotlight />

      <CTABand
        eyebrow="Partner With Us"
        title="Ready to Enhance Your Medical Coding Accuracy?"
        description="Connect with our healthcare solutions team to discuss staffing, coding backlogs, or dedicated quality assurance audits."
      />
    </>
  );
}
