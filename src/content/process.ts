/** Section 23 — end-to-end delivery process. */
export const deliveryProcess: ReadonlyArray<{
  step: number;
  title: string;
  body: string;
  outputs: readonly string[];
}> = [
  {
    step: 1,
    title: "Discovery",
    body: "We learn how your organisation actually works: specialties, volumes, systems, payer mix, current owners of each step and where the pain is.",
    outputs: ["Scope summary", "Systems and access list", "Volume baseline"],
  },
  {
    step: 2,
    title: "Assessment",
    body: "We review current coding, billing and RCM performance to find the gaps worth fixing first, and say plainly what we would not change.",
    outputs: ["Findings summary", "Prioritised opportunities", "Proposed service model"],
  },
  {
    step: 3,
    title: "Transition",
    body: "A written transition plan with dates, owners and acceptance criteria, including how work is split during the overlap period.",
    outputs: ["Transition plan", "SOP documentation", "Escalation matrix"],
  },
  {
    step: 4,
    title: "Team deployment",
    body: "Coders and specialists are assigned by specialty and workflow, trained on your documentation and given access under least-privilege rules.",
    outputs: ["Named team structure", "Training completion record", "Access provisioning log"],
  },
  {
    step: 5,
    title: "Quality assurance",
    body: "QA sampling begins from day one, at a higher rate during stabilisation, with findings reviewed weekly rather than monthly.",
    outputs: ["Audit sampling plan", "Accuracy reporting", "Corrective actions"],
  },
  {
    step: 6,
    title: "Reporting",
    body: "Agreed metrics on an agreed cadence, presented with commentary on what moved and why, not just a file attachment.",
    outputs: ["Operational dashboard", "Performance review", "Trend analysis"],
  },
  {
    step: 7,
    title: "Continuous improvement",
    body: "Findings from audits, denials and AR feed back into training, documentation guidance and process change. The loop is the point.",
    outputs: ["Improvement actions", "Provider education topics", "Re-audit results"],
  },
];

/** Section 14 — the claims lifecycle shown as a horizontal strip on the homepage. */
export const revenueCycleStages: ReadonlyArray<{ title: string; body: string }> = [
  { title: "Eligibility", body: "Coverage and benefits confirmed before the encounter." },
  { title: "Authorization", body: "Approvals secured and documented against the visit." },
  { title: "Documentation", body: "Clinical record reviewed for completeness and specificity." },
  { title: "Coding", body: "Codes assigned and quality reviewed before release." },
  { title: "Charge entry", body: "Charges captured and reconciled against the schedule." },
  { title: "Submission", body: "Claims scrubbed against payer edits, then transmitted electronically." },
  { title: "Payment posting", body: "Remittances posted at line level with reasons captured." },
  { title: "AR and denials", body: "Outstanding claims worked by value and root cause." },
  { title: "Reporting", body: "Performance reported back and fed into process change." },
];
