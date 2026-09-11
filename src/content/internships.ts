import type { IconName } from "@/components/ui/Icon";

export interface InternshipBenefit {
  title: string;
  description: string;
  icon: IconName;
}

export const internshipBenefits: InternshipBenefit[] = [
  {
    title: "Practical Exposure",
    description: "Work directly on real-time de-identified healthcare charts, clinical summaries, and industry EHR/EMR workflows.",
    icon: "monitor",
  },
  {
    title: "Industry-Oriented Learning",
    description: "Learn under senior medical coders, QA leaders, and certified trainers with decades of international healthcare experience.",
    icon: "building2",
  },
  {
    title: "Skill Development",
    description: "Develop speed, coding accuracy, clinical query writing, and multi-tier quality review habits essential for enterprise readiness.",
    icon: "trendingUp",
  },
  {
    title: "Career Preparation",
    description: "Receive resume grooming, technical mock interviews, certification advisory, and direct consideration for full-time roles.",
    icon: "handshake",
  },
];

export const internshipDetails = {
  heading: "Turn Classroom Knowledge Into Practical Experience",
  subheading: "Final-Semester Internship Program for Aspiring Healthcare Professionals",
  overview:
    "Our final-semester internship opportunities are designed to help students transition smoothly from academia to the professional healthcare environment. Gain structured hands-on experience, master live coding workflows, and build an enviable portfolio before graduation.",
  eligibility: [
    "Final-year and final-semester students in B.Pharm, M.Pharm, Biotechnology, Microbiology, Nursing, Life Sciences, and Allied Healthcare programs",
    "Passionate individuals seeking to launch an elite career in Medical Coding, Health Informatics, or Healthcare Operations",
    "Basic knowledge of Human Anatomy, Physiology, and Medical Terminology",
  ],
  structure: [
    {
      phase: "Phase 1 (Weeks 1-4)",
      title: "Foundations & Specialty Orientation",
      focus: "Clinical documentation standards, ICD-10/CPT coding conventions, and compliance fundamentals.",
    },
    {
      phase: "Phase 2 (Weeks 5-8)",
      title: "Live Simulated Chart Coding",
      focus: "Hands-on chart abstraction across Outpatient, Inpatient, and Emergency encounters with daily mentoring.",
    },
    {
      phase: "Phase 3 (Weeks 9-12)",
      title: "Quality Audits & Industry Project",
      focus: "Pre-bill quality audits, denial prevention research, final project presentation, and placement readiness.",
    },
  ],
};
