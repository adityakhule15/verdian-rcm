import type { IconName } from "@/components/ui/Icon";

/** Section 5 — trust strip directly below the hero. */
export const trustPoints: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Experienced professionals",
    body: "Medical coding, billing and revenue cycle specialists who work healthcare accounts full time.",
    icon: "users",
  },
  {
    title: "Quality focused",
    body: "Multi-level quality checks with findings fed back into training rather than filed away.",
    icon: "clipboardCheck",
  },
  {
    title: "Compliance driven",
    body: "Processes aligned to applicable healthcare, payer and coding requirements.",
    icon: "shieldCheck",
  },
  {
    title: "Scalable operations",
    body: "Capacity that flexes with seasonal volume, new providers and new locations.",
    icon: "trendingUp",
  },
  {
    title: "Transparent reporting",
    body: "Agreed metrics, a fixed cadence and a named contact who explains the movement.",
    icon: "barChart",
  },
];

/** Section 7 — mission, vision, values. */
export const mission =
  "To deliver accurate, compliant and technology-enabled healthcare RCM and medical coding solutions that help healthcare organizations improve efficiency, financial performance and patient-focused operations.";

export const vision =
  "To be a trusted global healthcare services partner recognised for coding excellence, operational reliability, quality and innovation.";

export const coreValues: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Accuracy",
    body: "Precision at every stage of the revenue cycle, because errors compound downstream.",
    icon: "target",
  },
  {
    title: "Integrity",
    body: "Professional, ethical and transparent practice, including when the honest answer is inconvenient.",
    icon: "scale",
  },
  {
    title: "Quality",
    body: "Continuous monitoring, auditing and improvement built into delivery rather than bolted on.",
    icon: "clipboardCheck",
  },
  {
    title: "Accountability",
    body: "Ownership of deliverables, turnaround times and performance against what was agreed.",
    icon: "handshake",
  },
  {
    title: "Innovation",
    body: "Better tooling and workflows adopted where they measurably improve outcomes.",
    icon: "lightbulb",
  },
  {
    title: "Client success",
    body: "Measured by the operational improvement clients can see in their own numbers.",
    icon: "trophy",
  },
];

/**
 * Section 25 — leadership.
 *
 * PLACEHOLDER STRUCTURE ONLY. Section 25 of the script is explicit: publish only
 * real names, photographs, designations and credentials after approval. Populate
 * this array with approved profiles; the page shows an internal notice while it
 * is empty.
 */
export const leadership: ReadonlyArray<{
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}> = [];

/** Roles that make up the delivery organisation. Safe to publish as structure. */
export const teamRoles: ReadonlyArray<{ role: string; focus: string }> = [
  { role: "Medical Coders", focus: "Specialty-aligned code assignment against clinical documentation." },
  { role: "Senior Coders", focus: "Complex charts, escalations and code-level guidance for the team." },
  { role: "QA Managers", focus: "Quality plans, audit sampling and accuracy reporting." },
  { role: "Coding Auditors", focus: "Pre-bill and post-bill audits, root cause and corrective action." },
  { role: "RCM Specialists", focus: "Eligibility, authorization, charge entry and claim submission." },
  { role: "AR Specialists", focus: "Aging analysis, payer follow-up and recovery." },
  { role: "Denial Specialists", focus: "Denial rework, appeals and prevention analysis." },
  { role: "Team Leaders", focus: "Daily throughput, service levels and team performance." },
  { role: "Operations Managers", focus: "Client relationship, reporting cadence and escalation ownership." },
];

/** Section 24 — why choose us. */
export const whyChooseUs: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Experienced healthcare professionals",
    body: "Coding, billing, QA and RCM specialists with healthcare domain depth, not generalists reassigned to a healthcare account.",
    icon: "users",
  },
  {
    title: "Quality first",
    body: "Quality assurance sits inside the workflow. Audits, feedback and re-audit are part of delivery, not an add-on service.",
    icon: "clipboardCheck",
  },
  {
    title: "Multi-specialty expertise",
    body: "Coverage across surgical, diagnostic, primary care and behavioural health specialties, with coders assigned by specialty.",
    icon: "layers",
  },
  {
    title: "Scalable delivery",
    body: "The operating model scales with volume, new providers, new locations and seasonal peaks without renegotiating everything.",
    icon: "trendingUp",
  },
  {
    title: "Data security",
    body: "Role-based access, restricted work environments and documented handling procedures for healthcare information.",
    icon: "lock",
  },
  {
    title: "Transparent communication",
    body: "Defined workflows, agreed service levels, scheduled reporting and a named point of contact.",
    icon: "messageSquare",
  },
];

/** Section 26 — quality, security and compliance practices. */
export const qualityPractices: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "HIPAA-conscious operations",
    body: "Workflows designed around protected health information handling, with training and access discipline to match.",
    icon: "shieldCheck",
  },
  {
    title: "Data confidentiality",
    body: "Confidentiality obligations in employment terms, restricted work areas and controlled device policies.",
    icon: "lock",
  },
  {
    title: "Role-based access",
    body: "Access granted by role and revoked on role change, with periodic review of who can reach what.",
    icon: "keyRound",
  },
  {
    title: "Quality audits",
    body: "Sampling plans by coder, specialty and code family, with results tracked over time.",
    icon: "clipboardCheck",
  },
  {
    title: "Process documentation",
    body: "Documented client-specific procedures so delivery does not depend on individual memory.",
    icon: "fileText",
  },
  {
    title: "Secure communication",
    body: "Approved channels for clinical documentation and client correspondence, with secure file transfer.",
    icon: "send",
  },
  {
    title: "Employee training",
    body: "Onboarding, specialty training and refresher programs, including annual privacy and security training.",
    icon: "graduationCap",
  },
  {
    title: "Continuous monitoring",
    body: "Service levels, accuracy and turnaround monitored continuously rather than reviewed after complaints.",
    icon: "activity",
  },
];

export const complianceNotice =
  "We describe how we operate, not certifications we do not hold. Any accreditation, certification or audit attestation is published only where the company genuinely holds it and can evidence it on request.";

/** Section 27 — technology categories, not unauthorised vendor logos. */
export const technologyCategories: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "EHR / EMR workflows",
    body: "Our teams work inside your existing clinical system rather than exporting data into ours.",
    icon: "monitor",
  },
  {
    title: "Practice management systems",
    body: "Charge entry, billing and AR performed in your PM system so your records stay authoritative.",
    icon: "layoutGrid",
  },
  {
    title: "Clearinghouse workflows",
    body: "Submission, rejection and remittance handling through your existing clearinghouse setup.",
    icon: "send",
  },
  {
    title: "Reporting dashboards",
    body: "Operational and financial reporting on an agreed metric set and cadence.",
    icon: "barChart",
  },
  {
    title: "Secure file transfer",
    body: "Controlled transfer of clinical documentation over approved, access-restricted channels.",
    icon: "lock",
  },
  {
    title: "Workflow management",
    body: "Queue allocation, priority rules and turnaround tracking against agreed service levels.",
    icon: "workflow",
  },
  {
    title: "Quality monitoring",
    body: "Audit sampling, error categorisation and coder-level accuracy tracking.",
    icon: "clipboardCheck",
  },
  {
    title: "Data analytics",
    body: "Trend analysis across denials, payer behaviour, productivity and rework.",
    icon: "trendingUp",
  },
];

export const technologyNotice =
  "Named platform logos appear only with the vendor's authorization. Until then we describe capability by category, which is the honest version anyway.";

/** Section 28 — who we serve. */
export const clientTypes: ReadonlyArray<{
  title: string;
  body: string;
  icon: IconName;
  needs: readonly string[];
}> = [
  {
    title: "Hospitals",
    body: "Large-scale coding, billing and revenue cycle operations across departments and service lines.",
    icon: "building2",
    needs: ["Facility and professional coding", "Inpatient and outpatient AR", "Denial management at volume"],
  },
  {
    title: "Physician practices",
    body: "Coding accuracy, billing efficiency and collections for independent and small group practices.",
    icon: "stethoscope",
    needs: ["E/M levelling accuracy", "Charge entry and claims", "Patient balance support"],
  },
  {
    title: "Multi-specialty groups",
    body: "Specialty-aligned coding and RCM support that scales across locations and providers.",
    icon: "layers",
    needs: ["Specialty coder allocation", "Consolidated reporting", "Credentialing for new providers"],
  },
  {
    title: "Diagnostic centers",
    body: "High-volume pathology and radiology coding where consistency decides the outcome.",
    icon: "microscope",
    needs: ["Component split accuracy", "Order and necessity validation", "Throughput at peak volume"],
  },
  {
    title: "Ambulatory surgery centers",
    body: "Surgical coding and revenue cycle operations with implant and global period discipline.",
    icon: "scissors",
    needs: ["Operative report coding", "Implant and supply reporting", "Authorization before service"],
  },
  {
    title: "Telehealth providers",
    body: "Compliant coding and billing for virtual care across multiple states and payers.",
    icon: "monitor",
    needs: ["Place of service and modifier accuracy", "Multi-state payer rules", "Eligibility at scale"],
  },
];
