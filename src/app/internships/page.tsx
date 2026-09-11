import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { InternshipSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { internshipBenefits, internshipDetails } from "@/content/internships";
import { ButtonLink } from "@/components/ui/Button";
import { CheckCircle2, FileCheck2, GraduationCap, Laptop, Sparkles, Users } from "lucide-react";

export const metadata = buildMetadata({
  title: "Final-Semester Healthcare & Medical Coding Internships",
  description:
    "Turn Classroom Knowledge Into Practical Experience. Hands-on final-semester internship opportunities in medical coding, EHR workflows, and healthcare data quality with Ligase Healthcare.",
  path: "/internships",
});

export default function InternshipsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Internships", path: "/internships" }])} />

      <PageHero
        eyebrow="Internship Opportunities"
        title="Turn Classroom Knowledge Into Practical Experience"
        description="Our final-semester internship programs provide life sciences and healthcare graduates with real-world exposure, live clinical record coding, and enterprise readiness before graduation."
        breadcrumbs={[{ label: "Internships" }]}
      />

      <InternshipSection />

      {/* Internship Structure / Phases */}
      <Section tone="tint" labelledBy="internship-structure-heading">
        <SectionHeading
          id="internship-structure-heading"
          eyebrow="Program Roadmap"
          title="Structured 3-Phase Internship Journey"
          description="Designed to transition students from classroom theory to professional enterprise execution."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {internshipDetails.structure.map((item, idx) => (
            <Reveal key={item.phase} delay={idx * 80} className="h-full">
              <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-teal-700 uppercase tracking-wider mb-2 block">
                    {item.phase}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy-950 mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-600">{item.focus}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-navy-50 flex items-center gap-2 text-xs font-bold text-navy-700">
                  <Sparkles className="size-4 text-teal-600" />
                  <span>Hands-on Mentorship</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Who Can Apply */}
      <Section labelledBy="eligibility-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            id="eligibility-heading"
            eyebrow="Who Can Apply"
            title="Eligibility & Application Requirements"
            description="We welcome motivated students looking to establish high-impact careers in medical coding, health informatics, and clinical documentation."
          />

          <Reveal delay={80} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm space-y-4">
            <h4 className="font-display text-base font-bold text-navy-950">Target Qualifications:</h4>
            <div className="space-y-3">
              {internshipDetails.eligibility.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-navy-700 leading-relaxed">
                  <CheckCircle2 className="size-4.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-navy-100">
              <ButtonLink href="/contact" withArrow>
                Apply for Internship
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Launch Your Career"
        title="Ready to Apply for the Next Internship Cohort?"
        description="Limited seats per batch to guarantee personalized 1-on-1 mentorship. Secure your place now."
        primary={{ label: "Apply for Internship", href: "/contact" }}
        secondary={{ label: "Explore Training Tracks", href: "/training" }}
      />
    </>
  );
}
