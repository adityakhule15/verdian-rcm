export type Faq = { question: string; answer: string };

/** Section 32 — FAQ. Also emitted as FAQPage structured data. */
export const faqs: readonly Faq[] = [
  {
    question: "What healthcare services do you provide?",
    answer:
      "Medical coding, medical billing and end-to-end revenue cycle management, including eligibility and authorization, claims management, payment posting, AR management, denial management, credentialing, coding audits, clinical documentation improvement and reporting.",
  },
  {
    question: "What coding systems do you support?",
    answer:
      "ICD-10-CM, CPT and HCPCS Level II, applied according to the guidelines and payer rules relevant to each engagement. Risk adjustment work follows the applicable HCC model for the programme in question.",
  },
  {
    question: "Do you provide specialty coding?",
    answer:
      "Yes. Coders are assigned by specialty rather than pooled, covering primary care, cardiology, orthopedics, general and specialty surgery, radiology, pathology, emergency medicine, behavioural health and others. If a specialty is not listed, ask us directly rather than assuming.",
  },
  {
    question: "Can you support both coding and billing?",
    answer:
      "Yes. We can take individual functions where you need capacity, or the full cycle as one accountable engagement. The reporting is the same either way.",
  },
  {
    question: "Do you provide quality assurance?",
    answer:
      "Quality assurance is part of delivery, not an upsell. Work is sampled and audited, errors are categorised by root cause, feedback goes to the individual coder, and corrective actions are re-audited to confirm they held.",
  },
  {
    question: "Do you provide AR follow-up?",
    answer:
      "Yes. AR work includes aging analysis and segmentation, payer follow-up by call and portal, denial resolution, underpayment review, appeals and reporting on the reasons claims were sitting unpaid.",
  },
  {
    question: "Do you provide denial management?",
    answer:
      "Yes, in both directions: recovery of the individual denial through correction, resubmission and appeal, and prevention through root cause analysis and trend reporting back to the teams creating the denials.",
  },
  {
    question: "Do you provide credentialing?",
    answer:
      "Yes. Provider and payer enrollment, re-credentialing and revalidation, CAQH maintenance, provider data updates and enrollment status tracking, with expiry dates tracked before they lapse.",
  },
  {
    question: "How do you handle protected health information?",
    answer:
      "Through role-based access granted at the minimum level needed, restricted work environments, controlled device and printing policies, approved secure channels for clinical documentation, and privacy and security training for every person on the account. Specific controls are confirmed in writing during contracting.",
  },
  {
    question: "Which systems do you work in?",
    answer:
      "Yours. Our teams work inside your EHR and practice management system under credentials you control, so your records remain the single source of truth and access can be revoked immediately if needed.",
  },
  {
    question: "How long does transition take?",
    answer:
      "It depends on scope, system access and volume. Discovery and assessment typically come first, followed by a written transition plan with dates and acceptance criteria. We would rather give you a realistic date during discovery than a reassuring one now.",
  },
  {
    question: "How do we start?",
    answer:
      "Contact us for an initial consultation. We will discuss your requirements, review the current workflow and recommend a service model. If we are not the right fit for what you need, we will say so.",
  },
];
