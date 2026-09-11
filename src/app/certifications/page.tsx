import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { CertificationSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { certificationJourneySteps, certificationsList } from "@/content/certifications";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Award, BadgeCheck, Check, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = buildMetadata({
  title: "Medical Coding Certification Support | CPC, CCS, CRC Preparation",
  description:
    "Prepare. Certify. Advance. Comprehensive exam training and mock preparation for AAPC CPC, AHIMA CCS, and CRC credentials with Ligase Healthcare.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Certifications", path: "/certifications" }])} />

      <PageHero
        eyebrow="Certification Pathways"
        title="Prepare. Certify. Advance."
        description="We support aspiring medical coding professionals in preparing for globally recognized AAPC and AHIMA industry credentials with structured curriculum, real-time mock exams, and test strategy guidance."
        breadcrumbs={[{ label: "Certifications" }]}
      />

      <CertificationSection />

      {/* In-depth breakdown of each certification */}
      <Section labelledBy="cert-detail-heading">
        <SectionHeading
          id="cert-detail-heading"
          eyebrow="Certification Profiles"
          title="Master Global Healthcare Coding Credentials"
          description="Detailed overview of competencies, syllabus focus, and career prospects for each credential pathway."
        />

        <div className="mt-12 space-y-10">
          {certificationsList.map((cert, idx) => (
            <Reveal key={cert.id} delay={idx * 80}>
              <div id={cert.id} className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-6 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 font-display text-2xl font-black">
                      {cert.code}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy-950">{cert.title}</h3>
                      <p className="text-xs font-semibold text-navy-500 mt-0.5">Issuing Body: {cert.issuingBody}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
                    <Sparkles className="size-3.5 text-teal-600" />
                    {cert.tag}
                  </span>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-8">{cert.description}</p>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider">
                      Skills & Topics Covered
                    </h4>
                    <ul className="space-y-2.5">
                      {cert.skillsCovered.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5 text-sm text-navy-700">
                          <Check className="size-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-navy-50/70 p-6 border border-navy-100/60 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Career & Placement Outlook
                      </h4>
                      <p className="text-xs text-navy-700 leading-relaxed mb-5">{cert.careerProspects}</p>

                      <div className="rounded-xl bg-white p-4 border border-navy-100/80">
                        <p className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-1">
                          Exam Support Inclusions
                        </p>
                        <p className="text-xs text-navy-600">
                          Full-length mock tests, time management drills, code book tagging strategies, and doubt resolution.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-navy-100">
                      <ButtonLink href="/contact" size="sm" withArrow>
                        Enquire About {cert.code} Training
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="Get Certified"
        title="Ready to Achieve Your Dream Medical Coding Credential?"
        description="Join our upcoming certification preparatory batches and prepare with industry-experienced certified instructors."
        primary={{ label: "Register for Guidance", href: "/contact" }}
        secondary={{ label: "Explore Training Tracks", href: "/training" }}
      />
    </>
  );
}
