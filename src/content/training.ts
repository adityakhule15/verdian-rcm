import type { IconName } from "@/components/ui/Icon";

export interface TrainingProgram {
  id: string;
  title: string;
  badge: string;
  duration: string;
  overview: string;
  icon: IconName;
  features: string[];
  curriculum: string[];
  suitableFor: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "sdp",
    title: "Skill Development Programs (SDP)",
    badge: "Flagship Program",
    duration: "3 – 6 Months",
    overview:
      "Comprehensive, industry-designed medical coding curriculum transforming life science and healthcare graduates into job-ready coding professionals.",
    icon: "graduationCap",
    features: [
      "In-depth ICD-10-CM, CPT, and HCPCS Level II coding",
      "Live medical record audit and chart analysis practice",
      "Human Anatomy, Physiology & Medical Terminology masterclasses",
      "One-on-one mentorship with certified coding experts",
    ],
    curriculum: [
      "Medical Terminology & Clinical Pathophysiology",
      "ICD-10-CM Coding Guidelines & Conventions",
      "CPT Procedure Coding & Surgical Specialties",
      "HCPCS Coding, Modifiers & Compliance Guidelines",
      "E/M Levelling and Clinical Documentation Integrity",
    ],
    suitableFor: "Graduates in Life Sciences, B.Pharm, Nursing, Biotechnology, and Healthcare disciplines.",
  },
  {
    id: "short-duration",
    title: "Short-Duration Medical Coding Programs",
    badge: "Accelerated Learning",
    duration: "4 – 8 Weeks",
    overview:
      "Intensive fast-track modules focusing on high-demand coding specialties, guidelines updates, and practical chart coding drills.",
    icon: "trendingUp",
    features: [
      "Rapid specialty-focused crash courses",
      "Hands-on case scenario coding",
      "Daily problem-solving and doubt-clearing sessions",
      "Exam practice tests with detailed rationales",
    ],
    curriculum: [
      "Core Coding Conventions Refreshers",
      "Outpatient & Ambulatory Coding Mastery",
      "Risk Adjustment & HCC Coding Highlights",
      "Mock Coding Tests and Accuracy Audits",
    ],
    suitableFor: "Working professionals and graduates seeking quick skill upgrades or career transition into coding.",
  },
  {
    id: "professional",
    title: "Professional Training & Mentorship",
    badge: "Advanced Career Track",
    duration: "Flexible Modular Schedule",
    overview:
      "Advanced professional training designed to elevate working coders and serious aspirants with complex inpatient coding, auditing, and leadership skills.",
    icon: "award" as IconName | "trophy",
    features: [
      "Advanced Inpatient (IP-DRG) and Outpatient coding",
      "Pre-bill and post-bill auditing methodologies",
      "Denial root cause analysis and resolution",
      "Leadership and team supervisory readiness",
    ],
    curriculum: [
      "Inpatient PCS & DRG Assignment Strategies",
      "Specialty Coding: Cardiology, Ortho, Oncology & Surgery",
      "Quality Assurance & Multi-tier Audit Frameworks",
      "Healthcare Compliance, HIPAA & Documentation Review",
    ],
    suitableFor: "Experienced coders, QA specialists, and teams seeking advanced domain expertise.",
  },
];

export const learningJourneySteps = [
  {
    step: "01",
    title: "Learn",
    subtitle: "Build Foundation",
    description: "Build your strong foundation in medical coding, anatomy, clinical terminology, and official coding guidelines.",
    icon: "graduationCap" as IconName,
  },
  {
    step: "02",
    title: "Practice",
    subtitle: "Apply Knowledge",
    description: "Apply theoretical knowledge through practical learning with simulated real-world medical charts.",
    icon: "clipboardCheck" as IconName,
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Strengthen Skills",
    description: "Strengthen coding speed, diagnostic precision, and professional healthcare industry competencies.",
    icon: "trendingUp" as IconName,
  },
  {
    step: "04",
    title: "Prepare",
    subtitle: "Certify With Confidence",
    description: "Prepare rigorously for premier global certifications (AAPC CPC, AHIMA CCS, CRC) with mock exams.",
    icon: "target" as IconName,
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Career & Internships",
    description: "Move seamlessly toward high-impact internship opportunities and successful professional careers.",
    icon: "sparkles" as IconName,
  },
];
