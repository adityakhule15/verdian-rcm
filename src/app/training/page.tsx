import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { TrainingSection } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { learningJourneySteps, trainingPrograms } from "@/content/training";
import { ButtonLink } from "@/components/ui/Button";
import { Check, Clock, GraduationCap, Sparkles, Target, UserCheck } from "lucide-react";

export const metadata = buildMetadata({
  title: "Medical Coding Training Programs | Skill Development (SDP)",
  description:
    "Learn Medical Coding. Build Skills. Prepare for Your Career with Ligase Healthcare's Skill Development Programs (SDP), Short-Duration Modules, and Professional Mentorship.",
  path: "/training",
});

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Training Programs", path: "/training" }])} />

      <PageHero
        eyebrow="Training & Skill Development"
        title="Learn Medical Coding. Build Skills. Prepare for Your Career."
        description="Our training programs are designed to provide practical, industry-oriented learning for individuals looking to build a high-growth career in medical coding and healthcare informatics."
        breadcrumbs={[{ label: "Training Programs" }]}
      />

      <TrainingSection />

      {/* In-depth Program Curriculum Breakdown */}
      <Section labelledBy="detailed-programs-heading">
        <SectionHeading
          id="detailed-programs-heading"
          eyebrow="Curriculum Details"
          title="Explore Our Comprehensive Training Tracks"
          description="Every program combines theory, live EHR chart abstraction, and mock exam simulations."
        />

        <div className="mt-12 space-y-10">
          {trainingPrograms.map((prog, idx) => (
            <Reveal key={prog.id} delay={idx * 80}>
              <div className="rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-6 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800 mb-2">
                      <Sparkles className="size-3.5 text-teal-600" />
                      {prog.badge}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-navy-950">{prog.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-navy-700 bg-navy-50 px-4 py-2 rounded-xl">
                    <Clock className="size-4 text-teal-600" />
                    <span>Duration: {prog.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-8">{prog.overview}</p>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider">
                      Curriculum Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {prog.curriculum.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                          <Check className="size-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-navy-50/70 p-6 border border-navy-100/60 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Target Audience & Eligibility
                      </h4>
                      <div className="flex items-start gap-2 text-xs text-navy-700 mb-4">
                        <UserCheck className="size-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{prog.suitableFor}</span>
                      </div>

                      <h4 className="font-display text-sm font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-1.5">
                        {prog.features.map((feat) => (
                          <li key={feat} className="text-xs text-navy-600 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-teal-600" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-navy-100">
                      <ButtonLink href="/contact" size="sm" withArrow>
                        Enquire About This Track
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
        eyebrow="Take the First Step"
        title="Ready to Build Your Career in Medical Coding?"
        description="Speak with our educational counselors to choose the right training program matching your background and career ambitions."
        primary={{ label: "Enrol Now", href: "/contact" }}
        secondary={{ label: "View Certifications", href: "/certifications" }}
      />
    </>
  );
}
