import { getSiteUrl } from "@/lib/siteUrl";

export const site = {
  name: "Ligase Healthcare",
  shortName: "Ligase",
  legalName: "Ligase Healthcare Pvt. Ltd.",
  tagline: "Empowering Healthcare. Building Skills. Creating Opportunities.",
  supportingLine:
    "Ligase Healthcare combines professional healthcare services with practical, career-focused learning to help healthcare organizations and aspiring professionals succeed.",
  description:
    "Professional Medical Coding Services, Industry-Oriented Skill Development Programs, Internships & Certification Preparation Support (CPC, CCS, CRC) — All Under One Healthcare Partner.",
  shareTitle: "Ligase Healthcare — Empowering Healthcare. Building Skills. Creating Opportunities.",
  shareDescription:
    "Professional Medical Coding Services, Industry-Oriented Training, Final-Semester Internships & Certification Support. Building the Healthcare Workforce of Tomorrow.",
  url: getSiteUrl() || "https://ligasehealthcare.com",
  locale: "en_US",
  foundedYear: 2026,

  announcement: {
    text: "Empowering Healthcare. Building Skills. Creating Opportunities.",
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },

  cta: {
    primary: { label: "Get Started", href: "/contact" },
    secondary: { label: "Explore Our Services", href: "/healthcare-solutions" },
    training: { label: "Explore Training", href: "/training" },
    careers: { label: "Start Your Career", href: "/careers" },
  },

  contact: {
    email: "info@ligasehealthcare.com",
    careersEmail: "info@ligasehealthcare.com",
    phone: "+91 75078 50583",
    phoneHref: "tel:+917507850583",
    hours: "Monday to Saturday, 9:00 AM – 6:00 PM IST",
    address: "Bengaluru",
    social: {
      linkedin: "https://www.linkedin.com/company/ligase-healthcare",
      instagram: "https://www.instagram.com/ligasehealthcare",
      facebook: "https://www.facebook.com/ligasehealthcare",
      youtube: "https://www.youtube.com/@ligasehealthcare",
      whatsapp: `https://wa.me/917507850583?text=${encodeURIComponent("Hi Ligase Healthcare team, I would like to know more about your services.")}`,
    },
  },

  offices: [
    {
      label: "Office",
      lines: ["Bengaluru"],
    },
  ],

  metrics: [
    { label: "Medical Coding Accuracy", value: "98%+", note: "Rigorous multi-tier QA and audit standards" },
    { label: "Skill Development Programs", value: "100%", note: "Practical, industry-oriented curriculum" },
    { label: "Certification Exam Support", value: "CPC / CCS / CRC", note: "Comprehensive mock exams & mentorship" },
    { label: "Internship & Placement Focus", value: "Dedicated", note: "Final-semester hands-on clinical charts" },
  ],
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "Code of Conduct", href: "/legal/code-of-conduct" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
] as const;

export const copyrightLine = `© ${new Date().getFullYear()} Ligase Healthcare. All Rights Reserved.`;
export const footerTagline = "Ligase Healthcare — Empowering Healthcare. Building Skills. Creating Opportunities.";
