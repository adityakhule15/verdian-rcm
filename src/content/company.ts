import type { IconName } from "@/components/ui/Icon";

/** PDF Section 3 — Trust / Introduction strip */
export const trustPoints: ReadonlyArray<{ title: string; body: string; icon: IconName }> = [
  {
    title: "Medical Coding Services",
    body: "Accurate, compliant, and quality-driven coding solutions for healthcare organizations.",
    icon: "clipboardCheck",
  },
  {
    title: "Skill Development Programs",
    body: "Structured, career-focused learning to master clinical terminology, guidelines, and practice.",
    icon: "graduationCap",
  },
  {
    title: "Industry-Oriented Training",
    body: "Practical, real-world case chart exposure preparing students for global benchmarks.",
    icon: "monitor",
  },
  {
    title: "Career-Focused Learning",
    body: "Internships, certification preparation (CPC, CCS, CRC), and long-term career growth.",
    icon: "trendingUp",
  },
];

/** PDF Section 4 — Who We Are */
export const whoWeAre = {
  heading: "Who We Are",
  content:
    "We are a healthcare services and training company offering medical coding, healthcare solutions, professional training, internships, and certification support.",
  highlights: [
    "Integrated Healthcare Services & Talent Development",
    "Specialized Medical Coding Quality & Compliance",
    "Comprehensive Certification Mentorship (AAPC / AHIMA)",
    "Hands-on Final-Semester Internships",
  ],
};

/** PDF Section 5 — Our Mission */
export const mission = {
  statement:
    "To provide quality medical coding services and practical career-focused training that helps healthcare organizations and aspiring professionals succeed.",
  nodes: [
    { label: "Quality", desc: "Commitment to 98%+ coding accuracy and compliance" },
    { label: "Skills", desc: "Industry-grade practical knowledge and competency" },
    { label: "Accuracy", desc: "Precision at every stage of medical documentation" },
    { label: "Growth", desc: "Measurable career acceleration and operational scale" },
    { label: "Success", desc: "Empowered healthcare workforce and thriving partners" },
  ],
};

/** PDF Section 6 — Our Vision */
export const vision = {
  statement:
    "To become a trusted healthcare coding and training partner, recognized for quality, skill development, innovation, and career opportunities.",
  tagline: "Building the Healthcare Workforce of Tomorrow.",
  steps: [
    { stage: "Today", desc: "Foundational learning & domain entry" },
    { stage: "Learn", desc: "Master coding guidelines & anatomy" },
    { stage: "Develop Skills", desc: "Live chart abstraction & QA practice" },
    { stage: "Get Certified", desc: "CPC / CCS / CRC global credentials" },
    { stage: "Build a Career", desc: "Professional healthcare roles & internships" },
    { stage: "Grow With Healthcare", desc: "Lifelong leadership & domain expertise" },
  ],
};

/** PDF Section 7 — Why Choose Us (8 interactive cards) */
export const whyChooseUs: ReadonlyArray<{
  number: string;
  title: string;
  body: string;
  icon: IconName;
}> = [
  {
    number: "01",
    title: "Professional Medical Coding Services",
    body: "High-accuracy inpatient, outpatient, and risk adjustment coding delivered by certified healthcare specialists adhering to strict compliance standards.",
    icon: "fileCheck",
  },
  {
    number: "02",
    title: "Skill Development Programs (SDP)",
    body: "Structured training programs designed for life science graduates, bridging academic theory with enterprise healthcare coding practices.",
    icon: "graduationCap",
  },
  {
    number: "03",
    title: "Short-Duration Medical Coding Programs",
    body: "Targeted, intensive modules for rapid upskilling, specialty coding deep dives, and quick entry into the healthcare workforce.",
    icon: "trendingUp",
  },
  {
    number: "04",
    title: "Final-Semester Internship Opportunities",
    body: "Hands-on industry exposure for college students to gain practical healthcare experience and real-time medical chart handling skills.",
    icon: "building2",
  },
  {
    number: "05",
    title: "Practical, Industry-Oriented Training",
    body: "Curriculum built around simulated real-world medical records, clinical case studies, EHR tools, and actual audit criteria.",
    icon: "monitor",
  },
  {
    number: "06",
    title: "Certification Preparation & Support",
    body: "Comprehensive exam guidance, timed practice simulations, and expert mentorship to achieve high first-time pass rates.",
    icon: "sparkles",
  },
  {
    number: "07",
    title: "CPC, CCS, CRC & Other Certifications",
    body: "Dedicated pathways for AAPC and AHIMA credentials covering physician coding, hospital inpatient coding, and HCC risk adjustment.",
    icon: "badgeCheck",
  },
  {
    number: "08",
    title: "Career-Focused Learning & Development",
    body: "End-to-end support connecting talent with opportunities across hospitals, health systems, and healthcare service providers.",
    icon: "trophy",
  },
];

/** PDF Section 15 — Student / Professional Success */
export const successCategories = [
  {
    title: "Student Success",
    description: "Empowering life science graduates with high-value skills and launching impactful careers in healthcare technology and coding.",
    icon: "graduationCap" as IconName,
    points: ["Job-ready competencies", "Real medical chart proficiency", "Mentorship from industry veterans"],
  },
  {
    title: "Career Growth",
    description: "Structured pathways from entry-level trainee coder to senior auditor, specialty lead, and healthcare operations manager.",
    icon: "trendingUp" as IconName,
    points: ["Rapid promotion trajectories", "Specialty domain mastery", "Competitive compensation growth"],
  },
  {
    title: "Practical Learning",
    description: "Bridging the gap between university textbooks and actual healthcare business operations through applied case work.",
    icon: "clipboardCheck" as IconName,
    points: ["100+ simulated chart audits", "EHR/EMR workflow simulations", "Direct feedback loops"],
  },
  {
    title: "Skill Development",
    description: "Continuous professional development, specialty workshops, and updated regulatory training on annual coding code updates.",
    icon: "sparkles" as IconName,
    points: ["Annual ICD-10 & CPT updates", "Clinical documentation integrity", "Quality metrics mastery"],
  },
];

/** PDF Section 16 — Why Ligase (The Complete Healthcare Career Ecosystem) */
export const whyLigaseEcosystem = {
  heading: "Why Ligase Healthcare?",
  coreIdea: "Healthcare + Training + Career",
  statement:
    "Ligase Healthcare connects Healthcare Services + Professional Training + Career Development = A Complete Healthcare Career Ecosystem.",
  pillars: [
    {
      title: "Healthcare Services",
      tagline: "Quality & Accuracy",
      description: "Professional medical coding, quality audits, and clinical documentation support for healthcare organizations.",
      icon: "stethoscope" as IconName,
      color: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    },
    {
      title: "Professional Training",
      tagline: "Skills & Practical Knowledge",
      description: "Industry-aligned skill development programs, short courses, and intensive certification preparation.",
      icon: "graduationCap" as IconName,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      title: "Career Development",
      tagline: "Internships & Opportunities",
      description: "Final-semester internships, credentialing pathways, and seamless bridge to healthcare employment.",
      icon: "trophy" as IconName,
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
  ],
};

/** PDF Section 17 — Technology Section */
export const technologySectionData = {
  heading: "Technology-Enabled Healthcare Learning",
  tagline: "Smarter Learning. Better Skills. Stronger Healthcare.",
  content:
    "We believe technology can transform the way healthcare professionals learn, work, and grow. Our platforms integrate modern digital interfaces, data-driven coding analytics, and digital chart simulations to deliver superior learning and operational results.",
  visualPillars: [
    {
      title: "AI-Inspired Healthcare Tools",
      description: "Modern computer-assisted coding (CAC) principles and intelligent rule engines for accuracy.",
      icon: "sparkles" as IconName,
    },
    {
      title: "Digital Coding Workspaces",
      description: "Interactive browser-based chart abstraction portals mirroring actual enterprise EHRs.",
      icon: "monitor" as IconName,
    },
    {
      title: "Data Visualization & Metrics",
      description: "Real-time accuracy scoring, error category tracking, and personalized learning dashboards.",
      icon: "barChart" as IconName,
    },
    {
      title: "Cloud & Network Collaboration",
      description: "Secure, role-based cloud environments ensuring seamless learning and compliant data workflows.",
      icon: "workflow" as IconName,
    },
  ],
};
