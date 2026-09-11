import type { IconName } from "@/components/ui/Icon";

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const careerValues: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Continuous Learning",
    body: "Access to ongoing training, AAPC/AHIMA certification sponsorship, and specialty workshops.",
    icon: "graduationCap",
  },
  {
    title: "Supportive Mentorship",
    body: "Learn alongside industry-certified senior coders and healthcare managers dedicated to your growth.",
    icon: "users",
  },
  {
    title: "Merit-Driven Growth",
    body: "Clear career tracks from trainee coder to senior auditor, team lead, and technical manager.",
    icon: "trendingUp",
  },
  {
    title: "Technology & Culture",
    body: "State-of-the-art digital tools, positive work-life balance, and an ethical healthcare environment.",
    icon: "sparkles",
  },
];

export const careerBenefits = careerValues;

export const openPositions: JobOpening[] = [
  {
    id: "medical-coding-specialist",
    title: "Medical Coding Specialist (Inpatient / Outpatient)",
    department: "Healthcare Services",
    location: "Hybrid / On-site (Hyderabad / Pune)",
    type: "Full-Time",
    experience: "1 – 4 Years",
    description:
      "Responsible for reviewing clinical documentation and assigning accurate ICD-10-CM, CPT, and HCPCS codes for hospital and clinic encounters.",
    requirements: [
      "Certified coder (CPC, COC, CCS, or equivalent AAPC/AHIMA credential)",
      "Bachelor's degree in Life Sciences, Pharmacy, Nursing, or related discipline",
      "Demonstrated accuracy of 95%+ in chart abstraction and code assignment",
      "Strong understanding of Anatomy, Physiology, and Medical Terminology",
    ],
    responsibilities: [
      "Review electronic health records and assign accurate codes in compliance with official guidelines",
      "Maintain high accuracy and agreed daily productivity benchmarks",
      "Collaborate with quality auditors and participate in continuous feedback sessions",
    ],
  },
  {
    id: "medical-coding-trainer",
    title: "Senior Medical Coding Trainer & Mentor",
    department: "Training & Skill Development",
    location: "On-site / Classroom",
    type: "Full-Time",
    experience: "3 – 6 Years",
    description:
      "Lead our Skill Development Programs (SDP), delivering engaging training modules, practical chart drills, and CPC/CCS exam preparation.",
    requirements: [
      "AAPC / AHIMA certified (CPC / CCS / CPMA / Approved Instructor credential preferred)",
      "Proven track record of training life science graduates and junior coders",
      "Exceptional communication, presentation, and mentoring abilities",
    ],
    responsibilities: [
      "Deliver comprehensive curriculum across Medical Terminology, Anatomy, ICD-10, and CPT",
      "Conduct mock exams, analyze trainee performance, and provide tailored remediation",
      "Design practical chart exercises and keep course materials aligned with annual code revisions",
    ],
  },
  {
    id: "coding-qa-auditor",
    title: "Quality Assurance & Coding Auditor",
    department: "Quality & Compliance",
    location: "Hybrid",
    type: "Full-Time",
    experience: "3 – 5 Years",
    description:
      "Perform multi-tier pre-bill and post-bill quality audits, analyze error patterns, and formulate corrective feedback for coding teams.",
    requirements: [
      "Certified CPC, CCS, or CPMA with extensive specialty auditing experience",
      "Expertise in payer guidelines, CCI edits, LCD/NCD policies, and DRG validation",
      "Strong analytical skills with proficiency in audit reporting tools",
    ],
    responsibilities: [
      "Audit sample charts across all active client queues to ensure adherence to 98%+ accuracy standards",
      "Prepare detailed audit reports identifying trends, root causes, and training needs",
      "Conduct educational feedback sessions with coding teams",
    ],
  },
  {
    id: "final-semester-intern",
    title: "Medical Coding Intern (Final Semester Students)",
    department: "Internship & Academy",
    location: "On-site / Training Hub",
    type: "Internship (3 – 6 Months)",
    experience: "Fresher / Final Year Student",
    description:
      "Hands-on internship opportunity for graduating students to gain real-world exposure to medical coding, clinical terminology, and industry EHR workflows.",
    requirements: [
      "Currently in the final semester/year of B.Pharm, M.Pharm, B.Sc/M.Sc Life Sciences, Nursing, or Biotech",
      "Keen interest in building a career in Healthcare Technology & Medical Coding",
      "Strong foundational grasp of human biological systems and medical terms",
    ],
    responsibilities: [
      "Complete intensive practical training modules and daily chart coding assignments",
      "Participate in mock audits and certification preparation drills",
      "Work under senior mentors to understand enterprise healthcare workflows",
    ],
  },
];

export const jobOpenings = openPositions;
