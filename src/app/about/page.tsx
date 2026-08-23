import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { AwaitingContent, Prose } from "@/components/ui/Bits";
import { CTABand } from "@/components/ui/CTABand";
import { CoreValuesGrid } from "@/components/sections/Shared";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { leadership, mission, teamRoles, vision } from "@/content/company";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "A healthcare services organization delivering medical coding, medical billing and revenue cycle management, built around accuracy, quality assurance and process discipline.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "About Us", path: "/about" }])} />

      <PageHero
        eyebrow="About us"
        title="Your strategic partner in healthcare revenue cycle management"
        description="We are a healthcare services organization focused on medical coding, medical billing and revenue cycle management for providers and healthcare organizations."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Section labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            id="story-heading"
            eyebrow="Who we are"
            title="Domain knowledge, quality discipline and a narrow definition of success"
            description={
              <Prose
                paragraphs={[
                  "Our teams combine healthcare domain knowledge, coding expertise, quality assurance and process discipline to help clients improve operational efficiency and financial performance. That combination matters more than any one part of it: coding skill without quality control produces confident errors, and process rigour without domain depth produces slow, correct-looking work.",
                  "From clinical documentation review and medical coding through claims processing, payment posting, accounts receivable and denial management, the services are designed to support the complete revenue cycle rather than a convenient slice of it.",
                  "We would rather be measured on whether your numbers improved than on how much of your work we took over.",
                ]}
                className="mt-0"
              />
            }
          />

          <Reveal delay={80} className="space-y-5">
            <Card className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Our mission</p>
              <p className="text-base leading-relaxed text-navy-700">{mission}</p>
            </Card>
            <Card className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Our vision</p>
              <p className="text-base leading-relaxed text-navy-700">{vision}</p>
            </Card>
            <Card className="space-y-3 border-navy-900 bg-navy-950 text-navy-200">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-300">Brand promise</p>
              <p className="font-display text-lg font-bold leading-snug text-white">{site.tagline}</p>
              <p className="text-sm leading-relaxed">{site.supportingLine}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="tint" labelledBy="values-heading">
        <SectionHeading id="values-heading" eyebrow="Core values" title="What we hold ourselves to" />
        <div className="mt-12">
          <CoreValuesGrid />
        </div>
      </Section>

      {/* Section 25 — leadership. Real, approved profiles only. */}
      <Section id="leadership" labelledBy="leadership-heading">
        <SectionHeading
          id="leadership-heading"
          eyebrow="Leadership"
          title="Founder & leadership team"
          description="Leadership profiles are published with real names, designations and credentials once approved for publication."
        />

        {leadership.length === 0 ? (
          <AwaitingContent title="Awaiting approved leadership profiles" className="mt-10">
            Add the founder or CEO and each leader to{" "}
            <code className="rounded bg-white px-1.5 py-0.5">leadership</code> in{" "}
            <code className="rounded bg-white px-1.5 py-0.5">src/content/company.ts</code> with their real name, role,
            biography, photograph and optional LinkedIn URL. Section 25 of the website script prohibits placeholder names
            or stock profile photographs, so this section stays empty until the real profiles are approved.
          </AwaitingContent>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <Card key={person.name} className="space-y-3">
                <p className="font-display text-lg font-bold text-navy-900">{person.name}</p>
                <p className="text-sm font-semibold text-teal-700">{person.role}</p>
                <p className="text-sm leading-relaxed text-navy-600">{person.bio}</p>
                {person.linkedin ? (
                  <a
                    href={person.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex text-sm font-semibold text-navy-800 hover:text-teal-700"
                  >
                    LinkedIn profile
                  </a>
                ) : null}
              </Card>
            ))}
          </div>
        )}
      </Section>

      <Section tone="tint" labelledBy="team-heading">
        <SectionHeading
          id="team-heading"
          eyebrow="Our team"
          title="The roles behind every engagement"
          description="Delivery is staffed by role, not by headcount claims. This is the structure that sits behind a typical account."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((role, index) => (
            <Reveal key={role.role} delay={index * 40} className="h-full">
              <div className="h-full rounded-card border border-navy-100 bg-white p-5 shadow-soft">
                <p className="font-semibold text-navy-900">{role.role}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{role.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="Work with us"
        title="Let's talk about your revenue cycle"
        description="Tell us what is not working. We will tell you whether we can fix it and what it would take."
      />
    </>
  );
}
