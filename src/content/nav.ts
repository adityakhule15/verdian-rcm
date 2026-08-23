import { serviceGroups, servicesInGroup } from "./services";

export type NavLink = { label: string; href: string; description?: string };

/**
 * Top-level labels are kept short so the bar stays on one line; the full page
 * titles live in each page hero and in the footer.
 */
export const primaryNav: ReadonlyArray<
  NavLink & { children?: readonly NavLink[]; megaMenu?: boolean }
> = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Who We Serve", href: "/who-we-serve" },
    ],
  },
  { label: "Services", href: "/services", megaMenu: true },
  { label: "Specialties", href: "/specialties" },
  {
    label: "Why Us",
    href: "/why-choose-us",
    children: [
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Quality & Compliance", href: "/quality-and-compliance" },
      { label: "Technology", href: "/technology" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Healthcare Insights", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/** Columns of the Services mega menu, built from the service taxonomy. */
export const servicesMegaMenu = serviceGroups.map((group) => ({
  ...group,
  items: servicesInGroup(group.id).map((service) => ({
    label: service.navLabel,
    href: `/services/${service.slug}`,
    description: service.summary,
    icon: service.icon,
  })),
}));

export const footerNav: ReadonlyArray<{ heading: string; links: readonly NavLink[] }> = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Quality & Compliance", href: "/quality-and-compliance" },
      { label: "Technology", href: "/technology" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Medical Coding", href: "/services/medical-coding" },
      { label: "Medical Billing", href: "/services/medical-billing" },
      { label: "End-to-End RCM", href: "/services/revenue-cycle-management" },
      { label: "Claims Management", href: "/services/claims-management" },
      { label: "AR Management", href: "/services/accounts-receivable" },
      { label: "Denial Management", href: "/services/denial-management" },
      { label: "Payment Posting", href: "/services/payment-posting" },
      { label: "Credentialing", href: "/services/credentialing" },
      { label: "Analytics & Reporting", href: "/services/healthcare-analytics" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Healthcare Insights", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faqs" },
      { label: "Specialties", href: "/specialties" },
      { label: "Who We Serve", href: "/who-we-serve" },
    ],
  },
];
