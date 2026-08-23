/**
 * Section 36 — legal pages.
 *
 * TEMPLATES ONLY. These are drafting starting points, not legal advice, and
 * every page must be reviewed and approved by qualified counsel before launch.
 * Jurisdiction, entity name, data transfer arrangements, retention periods and
 * breach notification commitments all need to be filled in by the company.
 */
export type LegalPage = {
  slug: string;
  title: string;
  summary: string;
  lastReviewed: string;
  sections: ReadonlyArray<{ heading: string; paragraphs: readonly string[]; bullets?: readonly string[] }>;
};

const REVIEW_NOTE = "Awaiting legal review";

export const legalPages: readonly LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "How this website collects, uses and protects information submitted through it, and the choices available to visitors.",
    lastReviewed: REVIEW_NOTE,
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "This website collects the information you choose to submit through our enquiry, careers and subscription forms. That includes your name, organization, email address, phone number and the details you provide about your requirements.",
          "We also collect limited technical information automatically, such as pages visited and referring source, where analytics are enabled.",
        ],
        bullets: [
          "Contact and enquiry details you submit",
          "Application details and any resume you attach",
          "Email address if you subscribe to updates",
          "Limited technical and usage information",
        ],
      },
      {
        heading: "Protected health information",
        paragraphs: [
          "This website is not a channel for protected health information. Please do not submit patient identifiers, clinical documentation or any PHI through the website forms. Client clinical data is exchanged only through the secure, contracted channels agreed in each engagement.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use submitted information to respond to your enquiry, evaluate applications, deliver requested updates and improve the website.",
        ],
        bullets: [
          "Responding to enquiries and preparing proposals",
          "Assessing job applications",
          "Sending updates you asked to receive",
          "Maintaining and improving the website",
        ],
      },
      {
        heading: "Sharing and processors",
        paragraphs: [
          "We do not sell personal information. We share it with service providers who help us operate the website and deliver email, under contractual confidentiality obligations. [COMPANY TO CONFIRM the specific processors used and the countries they operate in.]",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Enquiry and application information is retained only as long as needed for the purpose it was collected, or as required by law. [COMPANY TO CONFIRM retention periods for enquiries, applications and subscriptions.]",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on where you live, you may have rights to access, correct, delete or restrict the use of your personal information, and to withdraw consent to marketing. [COUNSEL TO CONFIRM which frameworks apply — for example GDPR, UK GDPR, CCPA/CPRA and applicable state laws — and the exact rights and response timelines to publish.]",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We apply administrative, technical and physical safeguards appropriate to the information we handle, including access control, training and secure transfer channels. No method of transmission over the internet is completely secure.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For privacy questions or to exercise a right, contact us using the details on our contact page. [COMPANY TO ADD a dedicated privacy contact and postal address.]",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    summary: "The terms that apply to your use of this website.",
    lastReviewed: REVIEW_NOTE,
    sections: [
      {
        heading: "Website use",
        paragraphs: [
          "This website is provided for general information about our services. By using it you agree to these terms. If you do not agree, please do not use the website.",
        ],
      },
      {
        heading: "No professional advice",
        paragraphs: [
          "Content on this website, including articles in the insights section, is general information about healthcare coding, billing and revenue cycle practice. It is not coding advice, legal advice, compliance advice or a substitute for professional judgement on a specific case. Coding and payer rules change; verify current requirements before acting.",
        ],
      },
      {
        heading: "No service relationship",
        paragraphs: [
          "Submitting an enquiry does not create a service relationship. Services are provided only under a signed agreement that defines scope, service levels, fees, confidentiality and data handling.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The content, design and code of this website are owned by the company or its licensors and may not be copied or reproduced without permission. Third-party names mentioned on this website remain the property of their owners.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "[COUNSEL TO DRAFT the limitation of liability, disclaimer of warranties, indemnity, governing law and dispute resolution provisions appropriate to the company's jurisdiction and insurance position. The placeholder text here is deliberately not a substitute.]",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these terms. The current version is always the one published on this page.",
        ],
      },
    ],
  },
  {
    slug: "hipaa-security-notice",
    title: "HIPAA & Security Notice",
    summary:
      "How we approach protected health information, security controls and our role as a business associate.",
    lastReviewed: REVIEW_NOTE,
    sections: [
      {
        heading: "Our role",
        paragraphs: [
          "When we provide coding, billing or revenue cycle services to a covered entity, we act as a business associate. Our obligations, permitted uses and disclosures, safeguards and breach notification duties are set out in a Business Associate Agreement executed with each client before work begins.",
        ],
      },
      {
        heading: "This website and PHI",
        paragraphs: [
          "This website does not collect protected health information and must not be used to transmit it. Website enquiry forms are not a secure channel. Clinical documentation is exchanged only through the approved channels defined in the engagement.",
        ],
      },
      {
        heading: "Safeguards",
        paragraphs: [
          "We apply the following operating controls across engagements that involve protected health information.",
        ],
        bullets: [
          "Access granted at the minimum level required for the role",
          "Access reviewed on role change and revoked on exit",
          "Restricted work environments with controlled device and printing policies",
          "Approved secure channels for clinical documentation transfer",
          "Confidentiality obligations in employment terms",
          "Privacy and security training at onboarding and annually",
          "Documented incident identification and escalation procedures",
        ],
      },
      {
        heading: "Incident reporting",
        paragraphs: [
          "Suspected security incidents involving client information are escalated under our documented incident procedure and notified in accordance with the applicable Business Associate Agreement and law. [COMPANY TO CONFIRM notification timelines and the security contact to publish.]",
        ],
      },
      {
        heading: "Important",
        paragraphs: [
          "This notice describes practices, not certifications. We publish an accreditation, certification or audit attestation only where the company holds it and can evidence it on request. [COUNSEL AND COMPLIANCE TO REVIEW before publication.]",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    summary: "What cookies and similar technologies this website uses, and how to control them.",
    lastReviewed: REVIEW_NOTE,
    sections: [
      {
        heading: "What this website uses",
        paragraphs: [
          "This website is built to work without advertising or tracking cookies. Strictly necessary technology is used to serve pages and to protect forms from abuse.",
          "If analytics or a third-party map or video embed is enabled later, this page must be updated to list each cookie, its purpose and its duration, and a consent mechanism may be required.",
        ],
        bullets: [
          "Strictly necessary: page delivery and form protection",
          "Analytics: only if a measurement ID is configured [COMPANY TO CONFIRM]",
          "Marketing: none currently",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can control or delete cookies through your browser settings. Blocking strictly necessary technology may prevent parts of the website from working.",
        ],
      },
      {
        heading: "Consent",
        paragraphs: [
          "[COUNSEL TO CONFIRM whether a consent banner is required for the jurisdictions the company markets into, and to approve the categories and wording before any analytics or third-party embed is enabled.]",
        ],
      },
    ],
  },
];

export const legalPagesBySlug = new Map(legalPages.map((page) => [page.slug, page]));
