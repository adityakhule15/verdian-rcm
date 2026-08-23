/** Section 41 — blog / insights knowledge center. */
export type InsightCategory =
  | "medical-coding"
  | "risk-adjustment"
  | "revenue-cycle"
  | "compliance"
  | "healthcare-technology";

export const insightCategories: ReadonlyArray<{
  id: InsightCategory;
  label: string;
  blurb: string;
  topics: readonly string[];
}> = [
  {
    id: "medical-coding",
    label: "Medical Coding",
    blurb: "Code set updates, specialty coding guidance and documentation requirements.",
    topics: ["ICD-10-CM updates", "CPT updates", "E/M coding", "Specialty coding"],
  },
  {
    id: "risk-adjustment",
    label: "Risk Adjustment",
    blurb: "HCC documentation, validation and programme changes.",
    topics: ["HCC coding", "Documentation", "Risk adjustment updates"],
  },
  {
    id: "revenue-cycle",
    label: "Revenue Cycle",
    blurb: "Denials, AR, claims and payment operations.",
    topics: ["Denial management", "AR management", "Claims", "Payment posting"],
  },
  {
    id: "compliance",
    label: "Compliance",
    blurb: "Coding compliance, auditing practice and documentation integrity.",
    topics: ["Coding compliance", "Auditing", "Documentation"],
  },
  {
    id: "healthcare-technology",
    label: "Healthcare Technology",
    blurb: "RCM technology, analytics and automation in healthcare operations.",
    topics: ["RCM technology", "Healthcare analytics", "AI in healthcare"],
  },
];

export type Insight = {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  publishedAt: string;
  readingMinutes: number;
  author: string;
  /** Paragraphs and headings. Replace with a CMS or MDX source when available. */
  body: ReadonlyArray<{ heading?: string; paragraphs: readonly string[]; bullets?: readonly string[] }>;
};

/**
 * Seed articles written as original editorial content. They contain no
 * statistics, client references or regulatory claims that would need
 * substantiation. Replace or extend through the CMS once one is connected.
 */
export const insights: readonly Insight[] = [
  {
    slug: "why-denials-repeat",
    title: "Why the same denial keeps coming back",
    category: "revenue-cycle",
    excerpt:
      "Reworking a denial recovers one claim. If the same denial reason arrives every month, the claim was never the problem.",
    publishedAt: "2026-07-14",
    readingMinutes: 6,
    author: "Revenue Cycle Team",
    body: [
      {
        paragraphs: [
          "Most denial management effort goes into recovery: find the denial, correct it, resubmit it, appeal if necessary. That work is necessary and it is measurable, which is probably why it gets all the attention.",
          "It also guarantees the same work next month. A denial reason that recurs at a stable rate is not a claims problem. It is a process defect somewhere upstream, and recovery work is the cost of not fixing it.",
        ],
      },
      {
        heading: "Categorise before you rework",
        paragraphs: [
          "The first change is unglamorous: record why each denial happened in a way that can be counted. Not the payer's remark code alone, but the internal cause behind it.",
        ],
        bullets: [
          "Eligibility not verified, or verified against the wrong plan",
          "Authorization missing, expired, or not documented against the visit",
          "Coding does not match documentation",
          "Documentation does not support medical necessity",
          "Demographic or registration data entered incorrectly",
          "Timely filing missed",
        ],
      },
      {
        heading: "Route the fix to whoever can make it",
        paragraphs: [
          "Once denials are categorised by cause, the routing becomes obvious. Eligibility denials belong to the front desk process, not the AR team. Coding mismatches belong to coding QA. Medical necessity gaps belong in provider education.",
          "The AR team still recovers the claim. But the report that matters goes to the team that can stop the next one.",
        ],
      },
      {
        heading: "Measure prevention separately",
        paragraphs: [
          "Prevented denials do not show up in recovery metrics, which is why prevention work quietly loses funding. Track it separately: denial rate by category over time, not just recovery rate.",
          "If a category is trending down and nothing else changed, the upstream fix worked. That is the number worth putting in front of leadership.",
        ],
      },
    ],
  },
  {
    slug: "documentation-specificity-and-risk-adjustment",
    title: "Documentation specificity is the whole risk adjustment programme",
    category: "risk-adjustment",
    excerpt:
      "Risk adjustment problems are almost never coding problems. They are documentation problems that coding cannot solve.",
    publishedAt: "2026-06-02",
    readingMinutes: 7,
    author: "Risk Adjustment Team",
    body: [
      {
        paragraphs: [
          "When a risk adjustment programme underperforms, the coding team is usually the first place anyone looks. It is rarely where the problem lives.",
          "A coder can only report what the record supports. If a chronic condition is being managed but never documented as assessed in the encounter, no amount of coding review makes it reportable.",
        ],
      },
      {
        heading: "The two failure modes",
        paragraphs: [
          "Programmes fail in one of two directions, and the second is far more expensive than the first.",
        ],
        bullets: [
          "Under-capture: conditions are managed and documented informally, but not in a way that supports reporting",
          "Over-capture: conditions are reported on the strength of a problem list or historical reference, without assessment in the encounter",
        ],
      },
      {
        heading: "What review should actually produce",
        paragraphs: [
          "A useful review returns three things, not one. First, the conditions supported by the record. Second, the conditions reported but not supported, which need correcting. Third, and most valuable, the documentation patterns causing the gap.",
          "That third output is what turns a chart review into a programme. Without it you repeat the review next year with the same findings.",
        ],
      },
      {
        heading: "Education has to be specific",
        paragraphs: [
          "Generic documentation training does not change behaviour. Showing a clinician their own charts, with the specific phrasing that made a condition unreportable, does.",
          "Then re-audit. If the pattern persists after education, the problem is workflow or templates, not knowledge.",
        ],
      },
    ],
  },
  {
    slug: "what-a-coding-audit-should-tell-you",
    title: "What a coding audit should tell you, beyond a score",
    category: "compliance",
    excerpt:
      "An accuracy percentage is a starting point. If the audit stops there, nothing changes and you pay for it again next quarter.",
    publishedAt: "2026-05-09",
    readingMinutes: 5,
    author: "Quality Assurance Team",
    body: [
      {
        paragraphs: [
          "Most coding audits deliver an accuracy percentage, a list of discrepancies and a recommendation to provide additional training. All three are true and none of them are actionable.",
          "An audit earns its cost when it tells you what to change, who needs to know, and how you will confirm the change worked.",
        ],
      },
      {
        heading: "Root cause, not error count",
        paragraphs: [
          "Ten errors with one cause is a different problem from ten errors with ten causes. The first is a training or template fix. The second is a hiring, capacity or process problem.",
          "Categorising by cause is the difference between an audit that produces a plan and one that produces a spreadsheet.",
        ],
      },
      {
        heading: "Separate financial and compliance impact",
        paragraphs: [
          "Not all errors matter equally. An error that undercodes costs revenue. An error that overcodes creates audit exposure and potential repayment. A documentation error that does not change the code is a quality signal, not a financial one.",
          "Reporting these together as a single accuracy figure hides the risk that actually needs attention.",
        ],
      },
      {
        heading: "Close it with a re-audit",
        paragraphs: [
          "The last step is the one most often skipped. Re-audit the same scope after corrective action, and report whether the finding recurred.",
          "Without that, you have no evidence the fix worked, and no defensible record that you acted on what you found.",
        ],
      },
    ],
  },
];

export const insightsBySlug = new Map(insights.map((insight) => [insight.slug, insight]));

export function insightsInCategory(category: InsightCategory): Insight[] {
  return insights.filter((insight) => insight.category === category);
}
