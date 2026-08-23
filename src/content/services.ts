import type { IconName } from "@/components/ui/Icon";

export type ServiceGroupId = "medical-coding" | "revenue-cycle" | "healthcare-support";

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  group: ServiceGroupId;
  icon: IconName;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  intro: string[];
  deliverables: ReadonlyArray<{ heading: string; items: readonly string[] }>;
  workflow?: readonly string[];
  highlights?: ReadonlyArray<{ title: string; body: string }>;
  ctaLabel: string;
  /** Flat SEO path from section 40 of the script, redirected to this page. */
  seoPath?: string;
  featured?: boolean;
};

export const serviceGroups: ReadonlyArray<{
  id: ServiceGroupId;
  label: string;
  blurb: string;
  icon: IconName;
}> = [
  {
    id: "medical-coding",
    label: "Medical Coding",
    blurb:
      "Documentation review and code assignment across professional, facility and specialty workflows.",
    icon: "fileCheck",
  },
  {
    id: "revenue-cycle",
    label: "Revenue Cycle Management",
    blurb:
      "Eligibility through final payment, run as one connected process with reporting at every stage.",
    icon: "workflow",
  },
  {
    id: "healthcare-support",
    label: "Healthcare Support",
    blurb:
      "Documentation improvement, quality programs, education and scribing that support clinical teams.",
    icon: "stethoscope",
  },
];

export const services: readonly Service[] = [
  // ---------------------------------------------------------------- Coding
  {
    slug: "medical-coding",
    title: "Medical Coding Services",
    navLabel: "Medical Coding",
    group: "medical-coding",
    icon: "fileCheck",
    summary:
      "Professional and facility coding across ICD-10-CM, CPT and HCPCS, reviewed by coders who work your specialty every day.",
    metaTitle: "Medical Coding Services | ICD-10-CM, CPT and HCPCS",
    metaDescription:
      "Professional and facility medical coding services covering ICD-10-CM, CPT and HCPCS Level II, with documentation review and multi-level quality assurance.",
    kicker: "Medical Coding",
    seoPath: "/medical-coding",
    featured: true,
    intro: [
      "Coding is where clinical work becomes reimbursable revenue, and where small inconsistencies turn into rework, delays and audit exposure. Our coders review clinical documentation and assign codes according to the applicable guidelines and the payer rules that actually govern the claim.",
      "Teams are assigned by specialty rather than pooled, so the coder reading your operative notes this month is the one who read them last month. Every engagement includes a documented quality plan, feedback to the coding team and reporting you can act on.",
    ],
    deliverables: [
      {
        heading: "Code sets",
        items: ["ICD-10-CM diagnosis coding", "CPT procedure coding", "HCPCS Level II coding", "Modifier assignment and review"],
      },
      {
        heading: "Coding models",
        items: [
          "Professional (physician) coding",
          "Facility and outpatient coding",
          "Concurrent coding",
          "Retrospective coding",
          "Prospective coding",
          "Payer-side coding review",
        ],
      },
      {
        heading: "Quality and compliance",
        items: [
          "Documentation completeness review",
          "Medical necessity review",
          "Compliance coding support",
          "Pre-bill and post-bill coding audits",
          "Coder feedback and continuous training",
        ],
      },
    ],
    workflow: [
      "Documentation received",
      "Clinical review",
      "Code assignment",
      "QA review",
      "Query or feedback loop",
      "Release to billing",
    ],
    ctaLabel: "Explore medical coding",
  },
  {
    slug: "risk-adjustment-coding",
    title: "Risk Adjustment & HCC Coding",
    navLabel: "Risk Adjustment / HCC",
    group: "medical-coding",
    icon: "activity",
    summary:
      "Prospective, concurrent and retrospective HCC review focused on documentation that genuinely supports each reported condition.",
    metaTitle: "Risk Adjustment & HCC Coding Services",
    metaDescription:
      "Prospective, concurrent and retrospective risk adjustment coding, medical record review, diagnosis validation and HCC gap identification with quality auditing.",
    kicker: "Risk Adjustment",
    seoPath: "/risk-adjustment-coding",
    featured: true,
    intro: [
      "Risk adjustment programs live or die on documentation quality. Our review identifies conditions that are supported by the record, validates the ones already reported, and flags the gaps where documentation does not carry the diagnosis.",
      "The emphasis is deliberately on defensibility. We do not chase codes; we chase evidence, and we report the patterns that let your providers document better next time.",
    ],
    deliverables: [
      {
        heading: "Review models",
        items: ["Prospective HCC coding", "Concurrent HCC coding", "Retrospective HCC coding", "Second-level validation review"],
      },
      {
        heading: "Core activities",
        items: [
          "Medical record review",
          "Diagnosis validation against documentation",
          "HCC gap identification",
          "Chronic condition recapture review",
          "Suspect condition analysis",
        ],
      },
      {
        heading: "Programme support",
        items: ["Provider education on documentation", "Quality auditing of coded charts", "Trend and pattern reporting"],
      },
    ],
    highlights: [
      {
        title: "Evidence first",
        body: "A condition is reported only where the documentation supports it. Unsupported findings are returned as documentation opportunities, not codes.",
      },
      {
        title: "Closed feedback loop",
        body: "Recurring documentation gaps become targeted provider education instead of the same query every quarter.",
      },
    ],
    ctaLabel: "Talk to our HCC coding team",
  },
  {
    slug: "em-coding",
    title: "E/M & Emergency Department Coding",
    navLabel: "E/M & ED Coding",
    group: "medical-coding",
    icon: "siren",
    summary:
      "Office, inpatient, observation, critical care and emergency department coding aligned to current E/M documentation principles.",
    metaTitle: "E/M and Emergency Department Coding Services",
    metaDescription:
      "E/M and ED coding for office, hospital, observation and critical care encounters, including modifier review, documentation review and coding audits.",
    kicker: "E/M and ED",
    seoPath: "/em-coding",
    featured: true,
    intro: [
      "E/M levelling is one of the most scrutinised areas in coding and one of the easiest to get quietly wrong in either direction. Our specialists apply current documentation principles consistently across sites of service, so levelling holds up under review.",
      "Emergency department volumes need throughput as well as accuracy. We staff for both, with turnaround times set in the engagement rather than left open.",
    ],
    deliverables: [
      {
        heading: "Encounter types",
        items: [
          "Office and outpatient E/M",
          "Hospital inpatient E/M",
          "Observation services",
          "Emergency department encounters",
          "Critical care",
          "Consultations",
        ],
      },
      {
        heading: "Review activities",
        items: [
          "Medical decision making review",
          "Time-based coding review",
          "Modifier review",
          "Documentation sufficiency review",
          "Focused E/M audits",
        ],
      },
    ],
    ctaLabel: "Discuss E/M and ED coding",
  },
  {
    slug: "surgical-coding",
    title: "Surgical Coding",
    navLabel: "Surgical Coding",
    group: "medical-coding",
    icon: "scissors",
    summary:
      "Operative report coding with disciplined bundling, modifier and global period review across surgical specialties and ASCs.",
    metaTitle: "Surgical Coding Services for Hospitals and ASCs",
    metaDescription:
      "Surgical coding services covering operative report review, CPT assignment, bundling and modifier review, global period tracking and implant or device coding.",
    kicker: "Surgical",
    seoPath: "/surgical-coding",
    intro: [
      "Surgical claims carry the highest value per encounter and the most ways to lose it. Missed components, incorrect bundling and modifier errors are the usual culprits, and all three come from reading the operative report too quickly.",
      "Our surgical coders work operative notes line by line, reconcile them against the procedure record, and apply payer-specific bundling rules before the claim leaves your system.",
    ],
    deliverables: [
      {
        heading: "Coding scope",
        items: [
          "Operative report review",
          "CPT and ICD-10-CM assignment",
          "Multiple procedure sequencing",
          "Bundling and unbundling review",
          "Modifier assignment",
          "Global period tracking",
          "Implant, device and supply coding",
        ],
      },
      {
        heading: "Settings supported",
        items: ["Inpatient surgery", "Hospital outpatient surgery", "Ambulatory surgery centers", "Office-based procedures"],
      },
    ],
    ctaLabel: "Discuss surgical coding",
  },
  {
    slug: "radiology-coding",
    title: "Radiology Coding",
    navLabel: "Radiology Coding",
    group: "medical-coding",
    icon: "scan",
    summary:
      "Diagnostic and interventional radiology coding with the professional and technical component discipline high volumes demand.",
    metaTitle: "Radiology Coding Services",
    metaDescription:
      "Radiology coding for diagnostic imaging and interventional procedures, including professional and technical component split, contrast and modifier review.",
    kicker: "Radiology",
    seoPath: "/radiology-coding",
    intro: [
      "Radiology is a volume business, which means a systematic error repeats thousands of times before anyone notices it in the AR report. Consistency matters more here than almost anywhere else in coding.",
      "We code diagnostic and interventional studies against the dictated report, apply component splits correctly, and monitor error patterns across the whole queue rather than chart by chart.",
    ],
    deliverables: [
      {
        heading: "Modalities",
        items: ["X-ray", "CT", "MRI", "Ultrasound", "Nuclear medicine", "Mammography", "Interventional radiology"],
      },
      {
        heading: "Coding detail",
        items: [
          "Professional and technical component split",
          "Contrast and supervision review",
          "Laterality and anatomic site accuracy",
          "Modifier assignment",
          "Medical necessity and order review",
        ],
      },
    ],
    ctaLabel: "Discuss radiology coding",
  },
  {
    slug: "pathology-coding",
    title: "Pathology & Laboratory Coding",
    navLabel: "Pathology Coding",
    group: "medical-coding",
    icon: "microscope",
    summary:
      "Anatomic and clinical pathology coding with correct specimen-level units and molecular panel discipline.",
    metaTitle: "Pathology and Laboratory Coding Services",
    metaDescription:
      "Anatomic and clinical pathology coding services covering specimen-level coding, surgical pathology, cytology, molecular diagnostics and medical necessity review.",
    kicker: "Pathology",
    seoPath: "/pathology-coding",
    intro: [
      "Pathology coding turns on specimen definitions and unit rules that are easy to state and easy to apply inconsistently. Undercounting loses revenue; overcounting invites recoupment.",
      "Our coders reconcile the requisition, the gross description and the final diagnosis before assigning units, and apply payer panel rules for molecular and genetic testing.",
    ],
    deliverables: [
      {
        heading: "Scope",
        items: [
          "Surgical pathology",
          "Cytopathology",
          "Clinical laboratory",
          "Molecular and genetic testing",
          "Immunohistochemistry and special stains",
        ],
      },
      {
        heading: "Coding detail",
        items: [
          "Specimen-level code and unit assignment",
          "Panel versus component billing review",
          "Modifier and professional component review",
          "Medical necessity and order validation",
        ],
      },
    ],
    ctaLabel: "Discuss pathology coding",
  },
  {
    slug: "coding-auditing",
    title: "Coding Audit & Quality Assurance",
    navLabel: "Coding Audits & QA",
    group: "medical-coding",
    icon: "clipboardCheck",
    summary:
      "Pre-bill, post-bill, focused and random audits with error trend analysis and coder-level corrective action.",
    metaTitle: "Coding Audit and Quality Assurance Services",
    metaDescription:
      "Pre-bill and post-bill coding audits, compliance audits, focused and random reviews, error trend analysis, coder feedback and corrective action programs.",
    kicker: "Audit and QA",
    seoPath: "/coding-auditing",
    featured: true,
    intro: [
      "An audit that produces a score and nothing else changes nothing. Ours produce a corrective action: what was wrong, why it happened, who needs to know, and what gets re-audited to confirm the fix held.",
      "Audits run either as an ongoing quality layer inside our delivery model or as an independent review of your internal or vendor coding.",
    ],
    deliverables: [
      {
        heading: "Audit types",
        items: [
          "Pre-bill audits",
          "Post-bill audits",
          "Coding accuracy audits",
          "Compliance audits",
          "Focused audits by specialty, coder or code family",
          "Random sample audits",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "Error categorisation and root cause",
          "Financial and compliance impact summary",
          "Coder-level feedback",
          "Corrective action and training plan",
          "Re-audit results",
        ],
      },
    ],
    workflow: ["Coder review", "QA review", "Error analysis", "Feedback", "Corrective action", "Re-audit"],
    ctaLabel: "Request an audit scope",
  },

  // ------------------------------------------------------- Revenue cycle
  {
    slug: "revenue-cycle-management",
    title: "End-to-End Revenue Cycle Management",
    navLabel: "End-to-End RCM",
    group: "revenue-cycle",
    icon: "workflow",
    summary:
      "One accountable team from eligibility through final payment, with a single reporting view across every stage.",
    metaTitle: "End-to-End Revenue Cycle Management Services",
    metaDescription:
      "Full-cycle revenue cycle management covering eligibility, authorization, charge entry, coding, claims, payment posting, AR, denials, credentialing and analytics.",
    kicker: "Revenue Cycle",
    seoPath: "/revenue-cycle-management",
    featured: true,
    intro: [
      "Most revenue leakage happens in the handoffs: eligibility not checked, authorization not on file, a coding query left open, a denial that never got worked. Splitting those steps across owners is what creates the gaps.",
      "We can take the full cycle as one engagement, or plug into the specific stages where you need capacity, with the same reporting either way.",
    ],
    deliverables: [
      {
        heading: "Front end",
        items: ["Patient scheduling support", "Eligibility and benefits verification", "Prior authorization", "Demographic and charge entry"],
      },
      {
        heading: "Middle",
        items: ["Medical coding", "Charge capture review", "Claim creation and scrubbing", "Electronic claim submission"],
      },
      {
        heading: "Back end",
        items: [
          "Payment posting and reconciliation",
          "Accounts receivable follow-up",
          "Denial management and appeals",
          "Patient billing and statements",
          "Credentialing support",
          "Analytics and reporting",
        ],
      },
    ],
    workflow: [
      "Eligibility",
      "Authorization",
      "Documentation",
      "Coding",
      "Charge entry",
      "Claim submission",
      "Payment posting",
      "AR and denials",
      "Reporting",
    ],
    ctaLabel: "Explore end-to-end RCM",
  },
  {
    slug: "medical-billing",
    title: "Medical Billing Services",
    navLabel: "Medical Billing",
    group: "revenue-cycle",
    icon: "receipt",
    summary:
      "Charge entry through payment reconciliation, with claim validation before submission rather than rework after rejection.",
    metaTitle: "Medical Billing Services",
    metaDescription:
      "Medical billing services covering charge entry, demographic entry, claim creation, electronic submission, claim validation, payer follow-up and reconciliation.",
    kicker: "Medical Billing",
    seoPath: "/medical-billing",
    featured: true,
    intro: [
      "Billing accuracy is decided before submission. Charges entered against the wrong provider, plan or place of service become rejections you pay twice to fix.",
      "Our billing teams work inside your practice management system, validate claims against payer requirements up front, and reconcile what was billed against what was actually paid.",
    ],
    deliverables: [
      {
        heading: "Billing operations",
        items: [
          "Charge entry",
          "Demographic entry",
          "Claim creation",
          "Electronic claim submission",
          "Claim validation and scrubbing",
          "Rejected claim resolution",
        ],
      },
      {
        heading: "Controls",
        items: [
          "Charge reconciliation against schedule and documentation",
          "Payer-specific edit review",
          "Billing review before release",
          "Payment reconciliation",
        ],
      },
    ],
    ctaLabel: "Explore medical billing",
  },
  {
    slug: "eligibility-and-authorization",
    title: "Eligibility Verification & Authorization",
    navLabel: "Eligibility & Authorization",
    group: "revenue-cycle",
    icon: "shieldCheck",
    summary:
      "Coverage confirmed and authorizations secured before the visit, which is where most avoidable denials are prevented.",
    metaTitle: "Eligibility Verification and Prior Authorization Services",
    metaDescription:
      "Insurance eligibility and benefits verification, prior authorization initiation and tracking, referral management and pre-service financial clearance.",
    kicker: "Front-End RCM",
    intro: [
      "Eligibility and authorization denials are the most preventable category in the revenue cycle, and the most expensive to fix afterwards. The work belongs before the encounter, not after the rejection.",
      "We verify coverage, confirm benefit detail that actually affects the claim, and carry authorizations through to an approval on file with the reference documented.",
    ],
    deliverables: [
      {
        heading: "Eligibility",
        items: [
          "Insurance and plan verification",
          "Active coverage and effective dates",
          "Benefit, copay, deductible and coinsurance detail",
          "Coordination of benefits review",
          "Primary and secondary payer identification",
        ],
      },
      {
        heading: "Authorization",
        items: [
          "Authorization requirement determination",
          "Initiation and payer follow-through",
          "Clinical documentation submission support",
          "Approval, denial and expiry tracking",
          "Referral management",
        ],
      },
    ],
    ctaLabel: "Discuss front-end RCM",
  },
  {
    slug: "claims-management",
    title: "End-to-End Claims Management",
    navLabel: "Claims Management",
    group: "revenue-cycle",
    icon: "send",
    summary:
      "Claim creation, scrubbing, submission and tracking through to resolution, with rejections worked the day they land.",
    metaTitle: "Claims Management Services",
    metaDescription:
      "Claims management covering claim creation, scrubbing, electronic submission, tracking, rejection management, denial management, appeals and payer follow-up.",
    kicker: "Claims",
    seoPath: "/claims-management",
    intro: [
      "A claim that sits in a rejection queue for a week has lost a week of its filing limit. Speed of resolution matters as much as accuracy of submission.",
      "We manage the full claim lifecycle with defined ownership at each stage, so nothing waits for someone to notice it.",
    ],
    deliverables: [
      {
        heading: "Lifecycle",
        items: [
          "Claim creation",
          "Claim scrubbing against payer edits",
          "Electronic submission",
          "Clearinghouse rejection resolution",
          "Claim status tracking",
          "Payer follow-up",
        ],
      },
      {
        heading: "Resolution",
        items: ["Rejection management", "Denial management", "Appeals", "Corrected claim submission", "Claim closure and reporting"],
      },
    ],
    workflow: [
      "Documentation",
      "Coding",
      "Charge entry",
      "Claim creation",
      "Validation",
      "Submission",
      "Tracking",
      "Rejection resolution",
      "Denials and appeals",
      "Payment",
    ],
    ctaLabel: "Discuss claims management",
  },
  {
    slug: "payment-posting",
    title: "Payment Posting & Reconciliation",
    navLabel: "Payment Posting",
    group: "revenue-cycle",
    icon: "banknote",
    summary:
      "ERA and EOB posting done at line level, so denials, underpayments and refunds surface as data instead of surprises.",
    metaTitle: "Payment Posting and Reconciliation Services",
    metaDescription:
      "ERA and EOB payment posting, insurance and patient payments, contractual adjustments, denial posting, underpayment and refund identification, reconciliation.",
    kicker: "Payment Posting",
    seoPath: "/payment-posting",
    intro: [
      "Payment posting is treated as clerical work and then blamed for bad reporting. Everything downstream — denial trends, payer performance, AR accuracy — depends on how carefully remittances get posted.",
      "We post at line level, capture denial and adjustment reasons properly, and reconcile deposits to postings so your numbers reflect reality.",
    ],
    deliverables: [
      {
        heading: "Posting",
        items: [
          "ERA and electronic remittance posting",
          "EOB and manual posting",
          "Insurance payments",
          "Patient payments",
          "Contractual adjustments",
          "Denial and remark code posting",
        ],
      },
      {
        heading: "Identification",
        items: [
          "Underpayment identification",
          "Overpayment identification",
          "Refund identification",
          "Credit balance review",
          "Deposit-to-posting reconciliation",
        ],
      },
    ],
    ctaLabel: "Discuss payment posting",
  },
  {
    slug: "accounts-receivable",
    title: "Accounts Receivable Management",
    navLabel: "AR Management",
    group: "revenue-cycle",
    icon: "trendingUp",
    summary:
      "Aging worked by value and root cause rather than oldest-first, with the reasons fed back upstream.",
    metaTitle: "Accounts Receivable Management Services",
    metaDescription:
      "AR management services including aging analysis and segmentation, payer follow-up, denial resolution, underpayment review, appeals and collection reporting.",
    kicker: "Accounts Receivable",
    seoPath: "/accounts-receivable",
    featured: true,
    intro: [
      "Working AR strictly oldest-first is how high-value recoverable claims age out while someone chases small balances. Segmentation comes first: what is recoverable, what is at filing risk, what needs a different fix entirely.",
      "Our AR specialists work the queue by value and root cause, document every payer contact, and report the reasons claims are sitting there so the front end can stop creating them.",
    ],
    deliverables: [
      {
        heading: "Analysis",
        items: [
          "AR aging analysis",
          "Aging segmentation by payer, value and reason",
          "Filing limit risk identification",
          "Root cause categorisation",
        ],
      },
      {
        heading: "Action",
        items: [
          "Payer follow-up by call and portal",
          "Denial resolution",
          "Underpayment review",
          "Appeals",
          "Corrected claim resubmission",
          "Collection and write-off recommendations",
        ],
      },
    ],
    workflow: [
      "AR analysis",
      "Aging segmentation",
      "Payer follow-up",
      "Denial resolution",
      "Underpayment review",
      "Appeals",
      "Collection",
      "Reporting",
    ],
    highlights: [
      { title: "0–30 days", body: "Monitored for acknowledgement and clean adjudication." },
      { title: "31–60 days", body: "Active payer follow-up and rejection resolution." },
      { title: "61–90 days", body: "Escalation, denial rework and appeal preparation." },
      { title: "90+ days", body: "Recovery review, filing limit protection and disposition decisions." },
    ],
    ctaLabel: "Reduce aging receivables",
  },
  {
    slug: "denial-management",
    title: "Denial Management & Appeals",
    navLabel: "Denial Management",
    group: "revenue-cycle",
    icon: "shieldAlert",
    summary:
      "Denials worked for recovery and analysed for prevention, because the same denial arriving monthly is a process defect.",
    metaTitle: "Denial Management and Appeals Services",
    metaDescription:
      "Denial management services covering denial identification, categorisation, root cause analysis, corrections, resubmission, appeals and denial trend reporting.",
    kicker: "Denials",
    seoPath: "/denial-management",
    featured: true,
    intro: [
      "Reworking a denial recovers one claim. Understanding why it was denied stops the next hundred. We do both, and we report the second one to you.",
      "Denials are categorised, routed to whoever can actually fix them — coding, eligibility, documentation or billing — and tracked to resolution with appeal outcomes measured.",
    ],
    deliverables: [
      {
        heading: "Recovery",
        items: [
          "Denial identification and logging",
          "Denial categorisation",
          "Coding corrections",
          "Documentation retrieval and review",
          "Eligibility and authorization resolution",
          "Corrected claim resubmission",
          "First and second level appeals",
        ],
      },
      {
        heading: "Prevention",
        items: [
          "Root cause analysis",
          "Denial trend reporting by payer, reason and provider",
          "Process gap identification",
          "Feedback to front-end and coding teams",
        ],
      },
    ],
    ctaLabel: "Reduce revenue leakage",
  },
  {
    slug: "patient-billing",
    title: "Patient Billing & Statements",
    navLabel: "Patient Billing",
    group: "revenue-cycle",
    icon: "userRound",
    summary:
      "Statements patients can understand and support that answers the phone, which is what actually gets balances paid.",
    metaTitle: "Patient Billing and Statement Services",
    metaDescription:
      "Patient billing services covering statement generation, balance verification, patient responsibility explanation, payment plan support and patient support desk.",
    kicker: "Patient Billing",
    intro: [
      "Patient balances are now a material share of collections, and confusing statements are the most common reason they go unpaid. A statement that requires a phone call to interpret has already failed.",
      "We verify the balance is genuinely patient responsibility before it goes out, present it in plain language, and support the questions that follow.",
    ],
    deliverables: [
      {
        heading: "Statements",
        items: [
          "Patient responsibility verification",
          "Statement generation and cycles",
          "Plain-language balance explanation",
          "Pre-collection review",
        ],
      },
      {
        heading: "Support",
        items: [
          "Patient billing enquiry handling",
          "Payment plan setup support",
          "Payment posting for patient payments",
          "Financial assistance referral support",
        ],
      },
    ],
    ctaLabel: "Discuss patient billing",
  },
  {
    slug: "credentialing",
    title: "Provider Credentialing & Enrollment",
    navLabel: "Credentialing",
    group: "revenue-cycle",
    icon: "badgeCheck",
    summary:
      "Enrollment and re-credentialing tracked to effective dates, so providers are not seeing patients they cannot bill for.",
    metaTitle: "Provider Credentialing and Payer Enrollment Services",
    metaDescription:
      "Provider credentialing and enrollment services including payer enrollment, re-credentialing, CAQH maintenance, provider data updates and enrollment tracking.",
    kicker: "Credentialing",
    seoPath: "/credentialing",
    intro: [
      "A provider who starts seeing patients before enrollment is effective generates claims that cannot be billed. Credentialing is administrative work with direct revenue consequences and hard dates.",
      "We manage applications, chase payers, keep CAQH and provider data current, and track every expiry before it becomes a lapse.",
    ],
    deliverables: [
      {
        heading: "Enrollment",
        items: [
          "Provider enrollment",
          "Payer enrollment and contracting support",
          "Group and location additions",
          "EDI, ERA and EFT setup support",
        ],
      },
      {
        heading: "Maintenance",
        items: [
          "Re-credentialing and revalidation",
          "CAQH profile maintenance",
          "Provider data and roster updates",
          "License and expiry tracking",
          "Documentation management",
          "Enrollment status tracking and reporting",
        ],
      },
    ],
    ctaLabel: "Discuss credentialing",
  },
  {
    slug: "healthcare-analytics",
    title: "Healthcare RCM Analytics & Reporting",
    navLabel: "Analytics & Reporting",
    group: "revenue-cycle",
    icon: "barChart",
    summary:
      "The operating metrics that explain your revenue cycle, reported on a defined cadence with the reasons behind the movement.",
    metaTitle: "Healthcare RCM Analytics and Reporting",
    metaDescription:
      "Revenue cycle analytics and reporting covering coding accuracy, claim acceptance, denial rate, AR aging, days in AR, collection rate and payer performance.",
    kicker: "Analytics",
    seoPath: "/healthcare-analytics",
    intro: [
      "A dashboard nobody acts on is decoration. Reporting is useful when it names what changed, why it changed and what should happen next.",
      "You get an agreed metric set, a fixed reporting cadence and a named contact who walks the numbers with your team instead of emailing a PDF.",
    ],
    deliverables: [
      {
        heading: "Operational metrics",
        items: ["Coding accuracy", "Productivity", "Turnaround time", "Rework rate", "Quality audit results"],
      },
      {
        heading: "Financial metrics",
        items: [
          "Claim acceptance rate",
          "Denial rate and denial reasons",
          "AR aging distribution",
          "Days in AR",
          "Collection rate",
          "Payment trends",
          "Payer performance",
        ],
      },
    ],
    ctaLabel: "Request a reporting demo",
  },

  // --------------------------------------------------- Healthcare support
  {
    slug: "clinical-documentation-improvement",
    title: "Clinical Documentation Improvement",
    navLabel: "Clinical Documentation",
    group: "healthcare-support",
    icon: "fileText",
    summary:
      "Documentation reviewed for clarity and completeness, with queries written to be answerable in under a minute.",
    metaTitle: "Clinical Documentation Improvement (CDI) Services",
    metaDescription:
      "CDI services covering clinical documentation review, gap identification, physician query support, coding documentation review, quality audits and education.",
    kicker: "CDI",
    seoPath: "/clinical-documentation-improvement",
    intro: [
      "Almost every coding and denial problem traces back to documentation. CDI is where you fix causes instead of symptoms.",
      "Our reviewers identify gaps between the clinical picture and what the record actually supports, then raise compliant, specific queries that a clinician can answer quickly.",
    ],
    deliverables: [
      {
        heading: "Review",
        items: [
          "Concurrent and retrospective documentation review",
          "Documentation gap identification",
          "Specificity and clinical validation review",
          "Coding documentation review",
        ],
      },
      {
        heading: "Follow-through",
        items: [
          "Compliant physician query support",
          "Query response tracking",
          "Quality audits of documentation",
          "Provider education on recurring gaps",
        ],
      },
    ],
    ctaLabel: "Discuss CDI support",
  },
  {
    slug: "hedis-and-quality-reporting",
    title: "HEDIS & Quality Reporting Support",
    navLabel: "HEDIS & Quality",
    group: "healthcare-support",
    icon: "listChecks",
    summary:
      "Abstraction and chase support for quality measure seasons, staffed for the deadline rather than the average week.",
    metaTitle: "HEDIS and Quality Reporting Support Services",
    metaDescription:
      "HEDIS support services including medical record retrieval and chase, measure abstraction, over-read support, gap-in-care identification and reporting support.",
    kicker: "HEDIS",
    intro: [
      "Quality reporting is seasonal, deadline-bound and impossible to staff permanently at peak volume. That is exactly the shape of work an extended team handles well.",
      "We support retrieval, abstraction and over-read against measure specifications, and report gaps in care while there is still time to close them.",
    ],
    deliverables: [
      {
        heading: "Abstraction",
        items: [
          "Medical record retrieval and chase",
          "Measure abstraction to specification",
          "Over-read and second-level review",
          "Hybrid measure support",
        ],
      },
      {
        heading: "Reporting",
        items: ["Gap-in-care identification", "Provider-level gap reporting", "Rate tracking through the season", "Audit support"],
      },
    ],
    ctaLabel: "Discuss HEDIS support",
  },
  {
    slug: "provider-education",
    title: "Provider Education & Coding Training",
    navLabel: "Provider Education",
    group: "healthcare-support",
    icon: "graduationCap",
    summary:
      "Education built from your own audit findings and denial data, not a generic slide deck.",
    metaTitle: "Provider Education and Coding Training Services",
    metaDescription:
      "Provider education programs covering documentation best practices, E/M documentation, ICD-10-CM, CPT, HCC documentation, medical necessity and denial prevention.",
    kicker: "Education",
    intro: [
      "Accurate documentation starts with informed clinicians. Generic training gets polite attendance; training built from your own charts gets behaviour change.",
      "We build sessions from your audit findings, denial patterns and query history, then measure whether the metrics moved afterwards.",
    ],
    deliverables: [
      {
        heading: "Topics",
        items: [
          "Documentation best practices",
          "E/M documentation and levelling",
          "ICD-10-CM specificity",
          "CPT and procedure documentation",
          "HCC and risk adjustment documentation",
          "Medical necessity",
          "Compliance essentials",
          "Denial prevention",
        ],
      },
      {
        heading: "Formats",
        items: [
          "Specialty-specific group sessions",
          "One-to-one provider feedback",
          "Chart-based education using your own cases",
          "New provider onboarding",
          "Post-education audit to confirm impact",
        ],
      },
    ],
    ctaLabel: "Plan a training program",
  },
  {
    slug: "medical-scribing",
    title: "Medical Scribing",
    navLabel: "Medical Scribing",
    group: "healthcare-support",
    icon: "penLine",
    summary:
      "Real-time and asynchronous documentation support that gives clinicians their attention back during the visit.",
    metaTitle: "Medical Scribing Services",
    metaDescription:
      "Medical scribing services providing real-time and asynchronous clinical documentation support, EHR note preparation, order entry support and chart preparation.",
    kicker: "Scribing",
    intro: [
      "Clinicians documenting while consulting do both worse. Scribing moves the typing off the clinician so the encounter gets full attention and the note still gets written properly.",
      "Scribes work to your templates and specialty conventions. The clinician always reviews and signs; the note remains theirs.",
    ],
    deliverables: [
      {
        heading: "Support models",
        items: ["Real-time virtual scribing", "Asynchronous note preparation", "Specialty-specific templates", "Flexible session coverage"],
      },
      {
        heading: "Activities",
        items: [
          "Encounter documentation in the EHR",
          "History, exam and assessment capture",
          "Order and referral entry support",
          "Chart preparation before the visit",
          "Note routing for clinician review and signature",
        ],
      },
    ],
    ctaLabel: "Discuss scribing support",
  },
];

export const servicesBySlug = new Map(services.map((service) => [service.slug, service]));

export function getService(slug: string): Service | undefined {
  return servicesBySlug.get(slug);
}

export function servicesInGroup(group: ServiceGroupId): Service[] {
  return services.filter((service) => service.group === group);
}

export const featuredServices = services.filter((service) => service.featured);

/** Section 40 flat SEO paths mapped to their canonical service page. */
export const serviceSeoRedirects = services
  .filter((service): service is Service & { seoPath: string } => Boolean(service.seoPath))
  .map((service) => ({ source: service.seoPath, destination: `/services/${service.slug}` }));
