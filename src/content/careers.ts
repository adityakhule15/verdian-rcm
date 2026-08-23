/** Section 35 — careers. */
export type JobOpening = {
  id: string;
  title: string;
  team: "Coding" | "Quality" | "Revenue Cycle" | "Operations" | "Training";
  location: string;
  workMode: "On-site" | "Hybrid" | "Remote";
  experience: string;
  summary: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
};

/**
 * Openings are illustrative role definitions for the launch site. Confirm each
 * one with HR — title, location, experience band and requirements — before the
 * careers page goes live, and remove any role that is not genuinely open.
 */
export const jobOpenings: readonly JobOpening[] = [
  {
    id: "medical-coder",
    title: "Medical Coder",
    team: "Coding",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "1–3 years",
    summary:
      "Review clinical documentation and assign accurate ICD-10-CM, CPT and HCPCS codes for an assigned specialty.",
    responsibilities: [
      "Code assigned charts within agreed turnaround times",
      "Raise documentation queries where the record is unclear",
      "Meet accuracy targets under the account quality plan",
      "Apply payer-specific coding guidance",
    ],
    requirements: [
      "Coding certification (CPC, CCS or equivalent)",
      "Working knowledge of ICD-10-CM, CPT and HCPCS",
      "Experience in at least one clinical specialty",
      "Comfortable working inside client EHR systems",
    ],
  },
  {
    id: "senior-medical-coder",
    title: "Senior Medical Coder",
    team: "Coding",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "4–7 years",
    summary:
      "Handle complex charts and escalations for a specialty and support coders with code-level guidance.",
    responsibilities: [
      "Code complex and escalated charts",
      "Provide guidance to coders on the account",
      "Support audit response and correction",
      "Contribute to specialty coding documentation",
    ],
    requirements: [
      "Coding certification with specialty depth",
      "Track record of sustained accuracy performance",
      "Experience mentoring or reviewing other coders",
    ],
  },
  {
    id: "qa-analyst",
    title: "QA Analyst",
    team: "Quality",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "3–6 years",
    summary:
      "Audit coded charts against the quality plan, categorise errors by root cause and deliver coder feedback.",
    responsibilities: [
      "Execute audit sampling plans",
      "Categorise errors by root cause and impact",
      "Deliver individual coder feedback",
      "Track corrective actions and re-audit results",
    ],
    requirements: [
      "Coding certification",
      "Auditing or quality review experience",
      "Ability to write clear, evidence-based findings",
    ],
  },
  {
    id: "coding-auditor",
    title: "Coding Auditor",
    team: "Quality",
    location: "Global delivery center",
    workMode: "Hybrid",
    experience: "5+ years",
    summary:
      "Run pre-bill, post-bill and focused audits and produce findings clients can act on.",
    responsibilities: [
      "Design and execute audit scopes",
      "Quantify financial and compliance impact",
      "Present findings to internal and client stakeholders",
      "Recommend and follow through on corrective action",
    ],
    requirements: [
      "Coding certification with audit experience",
      "Strong documentation and reporting skills",
      "Familiarity with payer audit expectations",
    ],
  },
  {
    id: "ar-specialist",
    title: "AR Specialist",
    team: "Revenue Cycle",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "1–4 years",
    summary:
      "Work outstanding claims by value and root cause, follow up with payers and document every contact.",
    responsibilities: [
      "Follow up on outstanding claims by call and payer portal",
      "Resolve rejections and route denials for correction",
      "Identify filing-limit risk and escalate",
      "Maintain accurate account notes",
    ],
    requirements: [
      "US healthcare AR or medical billing experience",
      "Comfortable with payer portals and call follow-up",
      "Clear written and spoken English",
    ],
  },
  {
    id: "denial-management-specialist",
    title: "Denial Management Specialist",
    team: "Revenue Cycle",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "2–5 years",
    summary:
      "Categorise, correct and appeal denials, and report the causes back to the teams that can prevent them.",
    responsibilities: [
      "Categorise denials by root cause",
      "Prepare corrected claims and appeals",
      "Track appeal outcomes",
      "Report denial trends by payer and reason",
    ],
    requirements: [
      "Denial management or AR experience",
      "Understanding of payer appeal processes",
      "Analytical approach to recurring issues",
    ],
  },
  {
    id: "medical-billing-specialist",
    title: "Medical Billing Specialist",
    team: "Revenue Cycle",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "1–4 years",
    summary:
      "Handle charge entry, claim creation, scrubbing and submission inside client practice management systems.",
    responsibilities: [
      "Enter charges and demographics accurately",
      "Create and scrub claims against payer edits",
      "Resolve clearinghouse rejections",
      "Reconcile billed charges against schedules",
    ],
    requirements: [
      "Medical billing experience",
      "Familiarity with at least one practice management system",
      "Attention to detail under volume",
    ],
  },
  {
    id: "team-leader",
    title: "Team Leader",
    team: "Operations",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "5+ years",
    summary:
      "Own daily throughput, service levels and team performance for an account or specialty pod.",
    responsibilities: [
      "Manage daily allocation and throughput",
      "Monitor service levels and quality results",
      "Coach team members on performance",
      "Escalate risks before they become client issues",
    ],
    requirements: [
      "Team leadership experience in healthcare operations",
      "Working knowledge of coding or RCM delivery",
      "Comfortable owning metrics and reporting",
    ],
  },
  {
    id: "operations-manager",
    title: "Operations Manager",
    team: "Operations",
    location: "Global delivery center",
    workMode: "Hybrid",
    experience: "8+ years",
    summary:
      "Own the client relationship, reporting cadence and escalation path for one or more accounts.",
    responsibilities: [
      "Own account performance against agreed metrics",
      "Run the client reporting cadence",
      "Manage staffing, capacity and transition plans",
      "Own escalations end to end",
    ],
    requirements: [
      "Healthcare RCM operations management experience",
      "Client-facing communication skills",
      "Experience managing multi-team delivery",
    ],
  },
  {
    id: "trainer",
    title: "Trainer",
    team: "Training",
    location: "Global delivery center",
    workMode: "On-site",
    experience: "4+ years",
    summary:
      "Build and deliver onboarding, specialty and refresher training driven by audit and denial findings.",
    responsibilities: [
      "Deliver onboarding and specialty training",
      "Build content from audit and denial findings",
      "Assess trainee readiness before account release",
      "Measure post-training impact",
    ],
    requirements: [
      "Coding certification and training experience",
      "Ability to build content from performance data",
      "Strong facilitation skills",
    ],
  },
];

export const careerBenefits: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Specialty depth, not chart churn",
    body: "Coders are assigned by specialty and stay there long enough to get genuinely good at it.",
  },
  {
    title: "Certification support",
    body: "Support for certification and continuing education requirements relevant to your role.",
  },
  {
    title: "Structured feedback",
    body: "Quality feedback is individual, evidence-based and delivered regularly, not saved for appraisals.",
  },
  {
    title: "Defined progression",
    body: "Clear paths from coder to senior coder, QA, audit, training and operations roles.",
  },
];

export const jobsById = new Map(jobOpenings.map((job) => [job.id, job]));
