import type { IconName } from "@/components/ui/Icon";

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  issuingBody: string;
  tag: string;
  description: string;
  icon: IconName;
  skillsCovered: string[];
  careerProspects: string;
}

export const certificationsList: CertificationItem[] = [
  {
    id: "cpc",
    code: "CPC",
    title: "Certified Professional Coder",
    issuingBody: "AAPC (American Academy of Professional Coders)",
    tag: "Gold Standard for Physician Coding",
    description:
      "The gold standard for medical coding in physician office and outpatient clinic settings. Validates mastery of CPT, HCPCS Level II, and ICD-10-CM coding.",
    icon: "badgeCheck",
    skillsCovered: [
      "Physician practice coding & billing",
      "Evaluation and Management (E/M) levelling",
      "Surgical coding & modifier application",
      "Compliance and healthcare reimbursement guidelines",
    ],
    careerProspects: "High demand across physician practices, outpatient clinics, healthcare centers, and RCM companies.",
  },
  {
    id: "ccs",
    code: "CCS",
    title: "Certified Coding Specialist",
    issuingBody: "AHIMA (American Health Information Management Association)",
    tag: "Hospital & Inpatient Mastery",
    description:
      "Demonstrates advanced coding proficiency in hospitals, acute care, and inpatient facilities. Demonstrates data quality mastery in inpatient and outpatient records.",
    icon: "building2",
    skillsCovered: [
      "Inpatient hospital coding (ICD-10-CM & ICD-10-PCS)",
      "MS-DRG and APR-DRG assignment",
      "Outpatient hospital procedures (CPT/HCPCS)",
      "Clinical documentation integrity & hospital compliance",
    ],
    careerProspects: "Prime qualification for hospital coding, health systems, clinical auditing, and senior coding roles.",
  },
  {
    id: "crc",
    code: "CRC",
    title: "Certified Risk Adjustment Coder",
    issuingBody: "AAPC",
    tag: "Value-Based Healthcare & HCC",
    description:
      "Specialized credential validating expertise in Hierarchical Condition Category (HCC) coding and value-based risk adjustment payment models.",
    icon: "shieldCheck",
    skillsCovered: [
      "Risk Adjustment Models (CMS-HCC, HHS-HCC, CDPS)",
      "Chronic condition documentation capture",
      "Predictive scoring & RAF calculation impacts",
      "RADV (Risk Adjustment Data Validation) audit preparedness",
    ],
    careerProspects: "Fastest-growing coding domain with Managed Care Organizations, Medicare Advantage, and ACOs.",
  },
  {
    id: "other",
    code: "Pathway",
    title: "Other Medical Coding Certifications",
    issuingBody: "AAPC / AHIMA Pathways",
    tag: "Specialty & Advanced Pathways",
    description:
      "Comprehensive guidance and preparation for specialty credentials including COC (Outpatient), CIC (Inpatient), CPMA (Auditing), and specialty-specific certifications.",
    icon: "layers",
    skillsCovered: [
      "Certified Outpatient Coder (COC)",
      "Certified Inpatient Coder (CIC)",
      "Certified Professional Medical Auditor (CPMA)",
      "Specialty Coding Credentials (Cardiology, Ortho, etc.)",
    ],
    careerProspects: "Enables multi-track career progression, specialized auditor designations, and managerial advancement.",
  },
];

export const certificationJourneySteps = [
  {
    step: "01",
    title: "Choose Your Certification",
    description: "Identify the ideal certification (CPC, CCS, CRC) matching your career goals and educational background with guidance from our mentors.",
    icon: "target" as IconName,
  },
  {
    step: "02",
    title: "Build Your Knowledge",
    description: "Master medical coding guidelines, anatomy, terminology, and specialty guidelines through structured, high-impact modules.",
    icon: "graduationCap" as IconName,
  },
  {
    step: "03",
    title: "Practice Coding",
    description: "Engage in extensive hands-on coding practice with realistic patient medical records and simulated case charts.",
    icon: "clipboardCheck" as IconName,
  },
  {
    step: "04",
    title: "Prepare for Examination",
    description: "Take full-length timed mock exams under simulated testing conditions with question-by-question rationales and time management techniques.",
    icon: "sparkles" as IconName,
  },
  {
    step: "05",
    title: "Take the Certification Exam",
    description: "Sit for your official AAPC / AHIMA examination with total confidence, backed by thorough preparation.",
    icon: "badgeCheck" as IconName,
  },
  {
    step: "06",
    title: "Advance Your Career",
    description: "Leverage your certified credential to unlock rewarding opportunities across leading global healthcare enterprises.",
    icon: "trophy" as IconName,
  },
];
