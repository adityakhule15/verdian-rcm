import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { InsightsBrowser } from "@/components/sections/InsightsBrowser";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { insightCategories } from "@/content/insights";

export const metadata = buildMetadata({
  title: "Healthcare Insights",
  description:
    "Practical notes on medical coding, risk adjustment documentation, denial management, revenue cycle operations, compliance and healthcare technology.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Insights", path: "/insights" }])} />

      <PageHero
        eyebrow="Knowledge center"
        title="Healthcare coding and RCM insights"
        description="Practice notes from the work itself — what actually causes denials, why documentation gaps repeat, and what a useful audit looks like."
        breadcrumbs={[{ label: "Insights" }]}
      />

      <Section labelledBy="articles-heading">
        <SectionHeading id="articles-heading" eyebrow="Articles" title="Browse by topic" />
        <div className="mt-10">
          <InsightsBrowser />
        </div>
      </Section>

      <Section tone="tint" labelledBy="topics-heading">
        <SectionHeading
          id="topics-heading"
          eyebrow="Editorial plan"
          title="Topics we cover"
          description="The publishing plan for this section. Each category is written from delivery experience, not repackaged press releases."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 50} className="h-full">
              <Card className="h-full space-y-3">
                <p className="font-semibold text-navy-900">{category.label}</p>
                <p className="text-sm leading-relaxed text-navy-600">{category.blurb}</p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {category.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.6875rem] font-semibold text-navy-700"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="Talk to a specialist"
        title="Have a question these articles do not answer?"
        description="Ask it directly. A specialist will answer rather than sending you a whitepaper."
      />
    </>
  );
}
