/**
 * Section 30 — case studies.
 *
 * `result` is intentionally a qualitative description of what was measured, not
 * a number. Section 30 of the script requires verified metrics and client
 * permission before any figure is published. Add a `metrics` array to a case
 * study only once the numbers are substantiated and, where the client is
 * identifiable, approved in writing.
 */
export type CaseStudy = {
  slug: string;
  reference: string;
  title: string;
  clientType: string;
  services: readonly string[];
  challenge: string;
  approach: readonly string[];
  result: string;
  /** Verified figures only. Rendered when present, omitted when not. */
  metrics?: ReadonlyArray<{ label: string; value: string }>;
  /** True once the client has approved publication of identifying details. */
  clientApproved: boolean;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "improving-coding-accuracy",
    reference: "Case Study 01",
    title: "Reducing coding rework in a multi-specialty practice",
    clientType: "Multi-specialty physician practice",
    services: ["medical-coding", "coding-auditing", "provider-education"],
    challenge:
      "High coding rework across several specialties, with the same documentation gaps recurring every month and no visibility into which providers or code families were driving it.",
    approach: [
      "Reassigned coding from a shared pool to specialty-aligned coders",
      "Introduced pre-bill audits on the highest-rework code families",
      "Categorised every error by root cause instead of counting errors",
      "Built provider education directly from the audit findings",
      "Re-audited the same samples to confirm corrections held",
    ],
    result:
      "Rework causes were narrowed to a small number of documentation patterns, addressed through targeted provider education, and re-audit confirmed the corrections held. Verified figures are published only with client approval.",
    clientApproved: false,
  },
  {
    slug: "working-down-aged-receivables",
    reference: "Case Study 02",
    title: "Restructuring how aged receivables were worked",
    clientType: "Hospital-affiliated specialty group",
    services: ["accounts-receivable", "denial-management", "healthcare-analytics"],
    challenge:
      "AR was worked oldest-first, so high-value recoverable claims aged past filing limits while low-value balances consumed the team's time. Denial reasons were not being categorised at all.",
    approach: [
      "Segmented aging by payer, value and filing-limit risk",
      "Prioritised recoverable value and claims approaching filing limits",
      "Categorised denials by root cause and routed them to the team that could fix them",
      "Reported denial reasons back to front-end and coding teams weekly",
    ],
    result:
      "Follow-up moved from chronological to value and risk based, and denial reasons became reportable data that front-end teams could act on. Verified figures are published only with client approval.",
    clientApproved: false,
  },
  {
    slug: "front-end-denial-prevention",
    reference: "Case Study 03",
    title: "Preventing eligibility and authorization denials before the visit",
    clientType: "Ambulatory surgery center",
    services: ["eligibility-and-authorization", "denial-management", "claims-management"],
    challenge:
      "A large share of denials were eligibility and authorization related, all of them preventable before the date of service, and all of them expensive to resolve afterwards.",
    approach: [
      "Moved verification to a fixed number of days before the scheduled procedure",
      "Documented authorization reference and validity window against the case",
      "Added a pre-service checkpoint that flagged unverified cases to scheduling",
      "Tracked prevented denials separately from recovered denials",
    ],
    result:
      "Preventable denial categories were addressed before the date of service rather than reworked after rejection. Verified figures are published only with client approval.",
    clientApproved: false,
  },
];

export const caseStudiesBySlug = new Map(caseStudies.map((study) => [study.slug, study]));
