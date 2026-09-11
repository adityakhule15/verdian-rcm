export type NavLink = { label: string; href: string; description?: string };

export const primaryNav: ReadonlyArray<NavLink> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/healthcare-solutions" },
  { label: "Training", href: "/training" },
  { label: "Internships", href: "/internships" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Healthcare Solutions", href: "/healthcare-solutions" },
    { label: "Training Programs", href: "/training" },
    { label: "Internships", href: "/internships" },
    { label: "Certifications", href: "/certifications" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Medical Coding Services", href: "/healthcare-solutions#medical-coding" },
    { label: "Healthcare Solutions", href: "/healthcare-solutions" },
    { label: "Skill Development Programs (SDP)", href: "/training#sdp" },
    { label: "Professional Training", href: "/training#professional" },
    { label: "Internship Opportunities", href: "/internships" },
    { label: "Certification Support", href: "/certifications" },
  ],
  certifications: [
    { label: "CPC — Certified Professional Coder", href: "/certifications#cpc" },
    { label: "CCS — Certified Coding Specialist", href: "/certifications#ccs" },
    { label: "CRC — Certified Risk Adjustment Coder", href: "/certifications#crc" },
    { label: "Other Medical Coding Certifications", href: "/certifications#other" },
  ],
};
