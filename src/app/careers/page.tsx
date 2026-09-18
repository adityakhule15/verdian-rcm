import { Mail, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CheckList } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { careerValues, openPositions } from "@/content/careers";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export const metadata = buildMetadata({
  title: "Careers at Ligase Healthcare | Medical Coding & Trainer Roles",
  description:
    "Build your career with Ligase Healthcare. Open positions for Medical Coding Specialists, Senior Trainers, QA Auditors, and Final-Semester Interns. Send your resume by email.",
  path: "/careers",
});

const resumeMailto = `mailto:${site.contact.careersEmail}?subject=${encodeURIComponent("Resume — Application for Ligase Healthcare")}&body=${encodeURIComponent("Hi Ligase Healthcare team,\n\nPlease find my resume attached.\n\nFull name:\nPhone:\nPosition applied for:\n\nThank you.")}`;

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
            title="Send Your Resume by Email"
            description="No online form — email your resume and the role you’re applying for. Our hiring team will get back to you."
          />
          <Reveal delay={80}>
            <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <Mail className="size-7" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
                Email your resume to Ligase Healthcare
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                Attach your CV (PDF, DOC, or DOCX), mention the position you want, and include your phone number so we can reach you.
              </p>

              <a
                href={`mailto:${site.contact.careersEmail}`}
                className="mt-5 block font-display text-lg font-bold text-navy-950 hover:text-teal-700 break-all"
              >
                {site.contact.careersEmail}
              </a>
              <ButtonLink href={resumeMailto} size="lg" className="mt-6 w-full sm:w-auto" withArrow>
                Open email to send resume
              </ButtonLink>

              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-navy-500">
                <Sparkles className="mt-0.5 size-3.5 shrink-0 text-teal-600" aria-hidden />
                Opens your email app with a short template — attach your resume before sending.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
