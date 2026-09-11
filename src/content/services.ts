import type { IconName } from "@/components/ui/Icon";

export interface HealthcareSolution {
  id: string;
  title: string;
  navLabel: string;
  summary: string;
  icon: IconName;
  details: string[];
  deliverables: string[];
}

/** PDF Section 8 — Our Healthcare Solutions */
export const healthcareSolutions: HealthcareSolution[] = [
  {
    id: "medical-coding",
    title: "Medical Coding Services",
    navLabel: "Medical Coding",
    summary:
      "Comprehensive diagnostic and procedural code assignment across inpatient, outpatient, emergency, and risk adjustment records.",
    icon: "fileCheck",
    details: [
      "Inpatient facility coding (ICD-10-CM / ICD-10-PCS) with accurate MS-DRG / APR-DRG assignment.",
      "Outpatient hospital, ASC, and clinic coding (CPT & HCPCS Level II with appropriate modifier usage).",
      "Hierarchical Condition Category (HCC) and risk adjustment coding for value-based care programs.",
      "Specialty-aligned coding coverage across surgical, diagnostic, evaluation & management, and emergency encounters.",
    ],
    deliverables: [
      "Inpatient & Outpatient Chart Coding",
      "HCC & Risk Adjustment Coding",
      "Emergency Department (ED) Coding",
      "Evaluation & Management (E/M) Levelling",
    ],
  },
  {
    id: "healthcare-support",
    title: "Healthcare Support Solutions",
    navLabel: "Healthcare Support",
    summary:
      "End-to-end operational and administrative support designed to optimize clinical documentation, revenue cycle workflows, and workflow efficiency.",
    icon: "stethoscope",
    details: [
      "Clinical documentation review and physician query support to capture medical necessity accurately.",
      "Charge review and entry assistance to ensure seamless encounter processing.",
      "Healthcare operational backlog clearance with dedicated, scalable teams.",
      "Workflow consulting and administrative harmonization for medical institutions.",
    ],
    deliverables: [
      "Clinical Documentation Review",
      "Revenue Cycle Operational Support",
      "Charge Verification & Entry",
      "Backlog Clearance & Surge Support",
    ],
  },
  {
    id: "coding-quality",
    title: "Coding Quality & Accuracy",
    navLabel: "Quality & Accuracy",
    summary:
      "Multi-tier quality auditing, compliance reviews, and pre-bill checks to guarantee 98%+ coding accuracy and reduce claim rejections.",
    icon: "clipboardCheck",
    details: [
      "Pre-bill and post-bill coding audits conducted by certified senior auditors.",
      "Statistical random sampling and focused high-risk specialty chart reviews.",
      "Root-cause denial analysis and coder feedback loops to prevent recurring errors.",
      "Regulatory compliance alignment with CMS, HIPAA, AHA Coding Clinic, and AMA guidelines.",
    ],
    deliverables: [
      "Multi-Tier Audit Sampling",
      "Root Cause Denial Analysis",
      "Compliance & Policy Verification",
      "Auditor Feedback & Training Feeds",
    ],
  },
  {
    id: "workforce-development",
    title: "Healthcare Workforce Development",
    navLabel: "Workforce Development",
    summary:
      "Tailored training, talent incubation, and skill development programs creating high-performing, certified healthcare professionals.",
    icon: "users",
    details: [
      "Customized corporate training programs for hospitals, healthcare groups, and RCM firms.",
      "Campus-to-corporate incubation converting fresh life-science graduates into productive coders.",
      "Continuous Medical Education (CME) and annual coding update workshops.",
      "Pre-placement screening and technical competency evaluations.",
    ],
    deliverables: [
      "Corporate Upskilling Programs",
      "Campus Incubation & SDP",
      "Annual Code Set Update Seminars",
      "Competency & Benchmark Assessments",
    ],
  },
];

/** PDF Section 9 — Medical Coding Services breakdown */
export const medicalCodingServiceAreas = [
  {
    title: "Medical Coding",
    description: "Standardized code assignment adhering to official ICD-10, CPT, and HCPCS guidelines.",
    icon: "fileCheck" as IconName,
  },
  {
    title: "Inpatient Coding",
    description: "Acute care and hospital chart abstraction with precise DRG validation and PCS procedural coding.",
    icon: "building2" as IconName,
  },
  {
    title: "Outpatient Coding",
    description: "Same-day surgery, ambulatory care, observation, and diagnostic clinic coding precision.",
    icon: "clipboardCheck" as IconName,
  },
  {
    title: "HCC Coding & Risk Adjustment",
    description: "Chronic condition capture and RAF score optimization for Medicare Advantage & ACO populations.",
    icon: "shieldCheck" as IconName,
  },
  {
    title: "Coding Quality & Pre-Bill Audits",
    description: "Independent accuracy verification ensuring clean claims and regulatory compliance before submission.",
    icon: "target" as IconName,
  },
  {
    title: "Documentation Review",
    description: "Clinical record analysis identifying gaps, specificity needs, and compliant physician queries.",
    icon: "fileText" as IconName,
  },
  {
    title: "Revenue Cycle Support",
    description: "Synergistic coding and operational workflows to accelerate clean-claim throughput and minimize denials.",
    icon: "workflow" as IconName,
  },
  {
    title: "Specialty-Specific Coding",
    description: "Expertise across Cardiology, Radiology, Orthopedics, Pathology, Gastroenterology, and Oncology.",
    icon: "layers" as IconName,
  },
];
