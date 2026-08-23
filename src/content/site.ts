/**
 * Single source of truth for brand, contact and proof values.
 *
 * PLACEHOLDER BRAND. Replace every value in this file with the real company
 * details before launch — see PLACEHOLDERS.md. Nothing here should be hardcoded
 * anywhere else in the codebase.
 */
import { getSiteUrl } from "@/lib/siteUrl";

export const site = {
  name: "Veridian Health RCM",
  shortName: "Veridian",
  legalName: "Veridian Health RCM (placeholder legal entity name)",
  tagline: "Precision in Coding. Excellence in RCM. Confidence in Revenue.",
  supportingLine:
    "Empowering healthcare organizations with accurate medical coding, efficient revenue cycle management and quality-driven healthcare solutions.",
  description:
    "Professional medical coding, medical billing and revenue cycle management services for healthcare organizations. Improve coding accuracy, reduce denials and optimize revenue cycle performance.",
  /** Shorter copy tuned for link previews (WhatsApp, iMessage, LinkedIn). */
  shareTitle: "Veridian Health RCM — Medical Coding & Revenue Cycle Management",
  shareDescription:
    "Accurate medical coding, billing and end-to-end RCM for hospitals, clinics and physician groups. Reduce denials, improve clean-claim rates and accelerate reimbursement.",
  url: getSiteUrl(),
  locale: "en_US",
  foundedYear: 2026,

  announcement: {
    text: "Trusted healthcare revenue cycle and medical coding solutions — accuracy, compliance, faster reimbursement",
    ctaLabel: "Talk to an expert",
    ctaHref: "/contact",
  },

  cta: {
    primary: { label: "Get a Free Consultation", href: "/contact" },
    secondary: { label: "Talk to Our Experts", href: "/contact" },
  },

  contact: {
    email: "info@example.com",
    careersEmail: "careers@example.com",
    phone: "+1 (000) 000-0000",
    phoneHref: "tel:+10000000000",
    phoneAlt: "+91 00000 00000",
    phoneAltHref: "tel:+910000000000",
    hours: "Monday to Friday, extended coverage available by agreement",
    linkedin: "https://www.linkedin.com/",
  },

  offices: [
    {
      label: "US Office",
      lines: ["Street address", "City, State ZIP", "United States"],
    },
    {
      label: "Global Delivery Center",
      lines: ["Street address", "City, State PIN", "India"],
    },
  ],

  /**
   * Verified performance figures only. Leave `value` undefined and the
   * performance section shows the metric label without a number, as required by
   * section 29 of the website script.
   */
  metrics: [
    { label: "Coding Accuracy", value: undefined, note: "Measured through multi-level QA review" },
    { label: "Claim Acceptance", value: undefined, note: "Clean-claim rate at first submission" },
    { label: "Denial Reduction", value: undefined, note: "Tracked against client baseline" },
    { label: "Turnaround Time", value: undefined, note: "Agreed per engagement in the SLA" },
    { label: "Productivity", value: undefined, note: "Charts and claims per coder per day" },
    { label: "Client Satisfaction", value: undefined, note: "Captured in periodic client reviews" },
  ] satisfies ReadonlyArray<{ label: string; value?: string; note: string }>,

  /**
   * Empty until real, permissioned testimonials exist. The section renders an
   * internal placeholder state rather than invented quotes.
   */
  testimonials: [] as ReadonlyArray<{
    quote: string;
    name: string;
    designation: string;
    organization: string;
  }>,

  /** Empty until authorized. Never publish unlicensed client or vendor logos. */
  clientLogos: [] as ReadonlyArray<{ name: string; src: string }>,
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "HIPAA / Security Notice", href: "/legal/hipaa-security-notice" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
] as const;

export const copyrightLine = `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`;
