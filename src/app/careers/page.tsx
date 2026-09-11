import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { CareerForm } from "@/components/forms/CareerForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { careerValues, openPositions } from "@/content/careers";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export const metadata = buildMetadata({
  title: "Careers at Ligase Healthcare | Medical Coding & Trainer Roles",
  description:
    "Build your career with Ligase Healthcare. Open positions for Medical Coding Specialists, Senior Trainers, QA Auditors, and Final-Semester Interns.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Careers", path: "/careers" }])} />

      <PageHero
        eyebrow="Careers at Ligase Healthcare"
        title="Build Your Career With Us"
        description="We are building a professional environment where healthcare knowledge, coding skills, continuous learning, and career development come together."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <Section labelledBy="values-heading">
        <SectionHeading
          id="values-heading"
          eyebrow="Why Ligase"
          title="Why Grow Your Career With Ligase Healthcare?"
          description="A supportive, high-standards healthcare culture that invests directly in your credentials and long-term career growth."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {careerValues.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 60} className="h-full">
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 mb-4">
                    <Icon name={benefit.icon} className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-950 mb-2">{benefit.title}</h3>
                  <p className="text-xs text-navy-600 leading-relaxed">{benefit.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint" labelledBy="openings-heading">
        <SectionHeading
          id="openings-heading"
          eyebrow="Opportunities"
          title="Current Openings"
          description="Explore our active roles across healthcare coding, training, auditing, and student internships."
        />

        <div className="mt-12 space-y-6">
          {openPositions.map((job, index) => (
            <Reveal key={job.id} delay={Math.min(index * 40, 180)}>
              <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-navy-100 pb-6 mb-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="accent">{job.department}</Badge>
                      <Badge>{job.type}</Badge>
                      <Badge>{job.experience}</Badge>
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-950">{job.title}</h3>
                    <p className="text-xs font-semibold text-navy-500">{job.location}</p>
                  </div>
                </div>

                <p className="text-sm text-navy-600 leading-relaxed mb-6">{job.description}</p>

                <div className="grid gap-6 sm:grid-cols-2 pt-2 border-t border-navy-50">
                  <div>
                    <p className="pb-3 text-xs font-bold uppercase tracking-wider text-teal-800">Responsibilities</p>
                    <CheckList items={job.responsibilities} />
                  </div>
                  <div>
                    <p className="pb-3 text-xs font-bold uppercase tracking-wider text-teal-800">Requirements</p>
                    <CheckList items={job.requirements} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="apply-heading">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            id="apply-heading"
            eyebrow="Apply Now"
            title="Send Your Resume to Ligase Healthcare"
            description={
              <>
                Attach your resume and state your target role. You can also send your credentials directly to{" "}
                <a href={`mailto:${site.contact.email}`} className="font-bold text-teal-700 underline">
                  {site.contact.email}
                </a>
                .
              </>
            }
          />
          <Reveal delay={80}>
            <CareerForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
