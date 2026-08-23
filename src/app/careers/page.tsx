import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { CareerForm } from "@/components/forms/CareerForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { careerBenefits, jobOpenings } from "@/content/careers";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Medical coding, quality assurance, AR, denial management, billing, training and operations roles in healthcare revenue cycle management.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Careers", path: "/careers" }])} />

      <PageHero
        eyebrow="Careers"
        title="Build a healthcare career with depth"
        description="We are looking for medical coders, QA analysts, auditors, AR and denial specialists, trainers and operations leaders who want to get genuinely good at a specialty rather than churn through charts."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <Section labelledBy="benefits-heading">
        <SectionHeading
          id="benefits-heading"
          eyebrow="Why work with us"
          title="What we offer, stated plainly"
          description="No inflated claims about culture. These are the four things that actually differ."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careerBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 50} className="h-full">
              <Card className="h-full space-y-2">
                <p className="font-semibold text-navy-900">{benefit.title}</p>
                <p className="text-sm leading-relaxed text-navy-600">{benefit.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint" labelledBy="openings-heading">
        <SectionHeading
          id="openings-heading"
          eyebrow="Open roles"
          title="Current openings"
          description="Confirm the specific location and requirements with our talent team before applying."
        />

        <div className="mt-12 space-y-4">
          {jobOpenings.map((job, index) => (
            <Reveal key={job.id} delay={Math.min(index * 30, 180)}>
              <Card className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="accent">{job.team}</Badge>
                    <Badge>{job.workMode}</Badge>
                    <Badge>{job.experience}</Badge>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900">{job.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-600">{job.summary}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">{job.location}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="pb-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-700">Responsibilities</p>
                    <CheckList items={job.responsibilities} />
                  </div>
                  <div>
                    <p className="pb-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-700">Requirements</p>
                    <CheckList items={job.requirements} />
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="apply-heading">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            id="apply-heading"
            eyebrow="Apply"
            title="Send us your application"
            description={
              <>
                Attach your resume and tell us which role fits. If nothing on the list matches but you work in
                healthcare coding or RCM, apply anyway and say what you do. You can also email us directly at{" "}
                <a href={`mailto:${site.contact.careersEmail}`} className="font-semibold text-teal-700 underline">
                  {site.contact.careersEmail}
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
