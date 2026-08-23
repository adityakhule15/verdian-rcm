import type { IconName } from "@/components/ui/Icon";

export type Specialty = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  metaDescription: string;
  /** What the coding team focuses on for this specialty. */
  focus: readonly string[];
  /** Where accuracy is most often lost in this specialty. */
  pitfalls: readonly string[];
  /** Related service slugs surfaced as cross-links. */
  related: readonly string[];
};

export const specialties: readonly Specialty[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "heartPulse",
    summary: "Diagnostic studies, interventional procedures and device management coded against the full procedure record.",
    metaDescription:
      "Cardiology medical coding services covering diagnostic studies, catheterisation, electrophysiology, device management and cardiac imaging.",
    focus: [
      "Catheterisation and intervention coding",
      "Electrophysiology studies and ablation",
      "Device implant, replacement and interrogation",
      "Echocardiography and stress testing",
      "Cardiac imaging component splits",
    ],
    pitfalls: [
      "Component versus complete study reporting",
      "Bundled diagnostic services within intervention",
      "Vessel and territory specificity",
      "Device follow-up frequency limits",
    ],
    related: ["medical-coding", "surgical-coding", "denial-management"],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: "bone",
    summary: "Surgical and fracture care coding with disciplined global period and laterality handling.",
    metaDescription:
      "Orthopedic coding services covering joint procedures, fracture care, arthroscopy, spine surgery, injections and durable medical equipment.",
    focus: [
      "Joint replacement and revision",
      "Arthroscopic procedures",
      "Fracture care, casting and splinting",
      "Spine procedures",
      "Injections and aspirations",
    ],
    pitfalls: [
      "Global period and staged procedure tracking",
      "Laterality and level specificity",
      "Fracture care versus E/M reporting",
      "Implant and hardware documentation",
    ],
    related: ["surgical-coding", "medical-coding", "accounts-receivable"],
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    icon: "scissors",
    summary: "Operative reports coded line by line, with bundling and modifier rules applied before submission.",
    metaDescription:
      "General surgery coding services covering abdominal, laparoscopic, hernia, breast and soft tissue procedures with bundling and modifier review.",
    focus: [
      "Laparoscopic and open abdominal procedures",
      "Hernia repair",
      "Breast and endocrine procedures",
      "Soft tissue excisions",
      "Emergency and trauma surgery",
    ],
    pitfalls: [
      "Multiple procedure sequencing",
      "Approach conversion documentation",
      "Bundled component identification",
      "Assistant and co-surgeon reporting",
    ],
    related: ["surgical-coding", "coding-auditing", "claims-management"],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "activity",
    summary: "Endoscopy coding where technique, findings and intent all change the code.",
    metaDescription:
      "Gastroenterology coding services covering endoscopy, colonoscopy, screening versus diagnostic distinction, biopsies and therapeutic procedures.",
    focus: [
      "Colonoscopy and upper endoscopy",
      "Screening versus diagnostic determination",
      "Biopsy, polypectomy and technique-specific removal",
      "ERCP and advanced procedures",
      "Infusion and biologic therapy",
    ],
    pitfalls: [
      "Screening converted to diagnostic",
      "Removal technique specificity",
      "Incomplete or aborted procedure reporting",
      "Anesthesia and moderate sedation documentation",
    ],
    related: ["surgical-coding", "medical-coding", "eligibility-and-authorization"],
  },
  {
    slug: "radiology",
    name: "Radiology",
    icon: "scan",
    summary: "High-volume imaging coded consistently, with component splits and error patterns monitored across the queue.",
    metaDescription:
      "Radiology coding services for diagnostic imaging and interventional radiology, including professional and technical components and contrast review.",
    focus: [
      "Diagnostic imaging across modalities",
      "Interventional radiology",
      "Professional and technical component split",
      "Contrast and supervision documentation",
      "Order and medical necessity validation",
    ],
    pitfalls: [
      "Laterality and anatomic site accuracy",
      "Number of views and study completeness",
      "Bundled guidance services",
      "Repeat and comparison study reporting",
    ],
    related: ["radiology-coding", "coding-auditing", "healthcare-analytics"],
  },
  {
    slug: "pathology",
    name: "Pathology",
    icon: "microscope",
    summary: "Specimen-level accuracy where unit rules decide whether the claim is under or over reported.",
    metaDescription:
      "Pathology coding services covering surgical pathology, cytology, clinical laboratory, molecular diagnostics and special stains.",
    focus: [
      "Surgical pathology specimen coding",
      "Cytopathology",
      "Clinical laboratory panels",
      "Molecular and genetic testing",
      "Immunohistochemistry and special stains",
    ],
    pitfalls: [
      "Specimen definition and unit counting",
      "Panel versus component billing",
      "Professional component reporting",
      "Medical necessity for advanced testing",
    ],
    related: ["pathology-coding", "coding-auditing", "denial-management"],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "sparkles",
    summary: "Lesion work where measurements, margins and closure detail carry the code.",
    metaDescription:
      "Dermatology coding services covering lesion excision and destruction, biopsies, Mohs surgery, repairs and medical dermatology visits.",
    focus: [
      "Lesion excision and destruction",
      "Biopsy technique coding",
      "Mohs micrographic surgery",
      "Repairs and closures",
      "Medical dermatology encounters",
    ],
    pitfalls: [
      "Lesion size and margin documentation",
      "Benign versus malignant sequencing",
      "Closure included versus separately reportable",
      "Multiple lesion reporting",
    ],
    related: ["medical-coding", "surgical-coding", "provider-education"],
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "brain",
    summary: "Diagnostic testing and complex chronic care coded with the specificity payers look for.",
    metaDescription:
      "Neurology coding services covering EEG, EMG, nerve conduction studies, infusion therapy and chronic neurological condition management.",
    focus: [
      "EEG and long-term monitoring",
      "EMG and nerve conduction studies",
      "Neurodiagnostic interpretation",
      "Infusion and injection therapy",
      "Chronic condition management",
    ],
    pitfalls: [
      "Study duration and unit reporting",
      "Interpretation versus technical component",
      "Prolonged service documentation",
      "Diagnosis specificity for chronic conditions",
    ],
    related: ["medical-coding", "em-coding", "clinical-documentation-improvement"],
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "droplet",
    summary: "Office procedures, endoscopy and surgical work coded with correct global and supply handling.",
    metaDescription:
      "Urology coding services covering cystoscopy, stone procedures, prostate procedures, office-based interventions and urodynamics.",
    focus: [
      "Cystoscopy and endoscopic procedures",
      "Stone management",
      "Prostate procedures and biopsies",
      "Urodynamic studies",
      "Office-based interventions",
    ],
    pitfalls: [
      "Bilateral and multiple procedure reporting",
      "Supply and drug reporting",
      "Global period for staged procedures",
      "Screening versus diagnostic indications",
    ],
    related: ["surgical-coding", "medical-coding", "accounts-receivable"],
  },
  {
    slug: "obstetrics-and-gynecology",
    name: "Obstetrics & Gynecology",
    icon: "baby",
    summary: "Global obstetric packages and gynecologic surgery, tracked across the full episode of care.",
    metaDescription:
      "OB/GYN coding services covering global obstetric packages, deliveries, antepartum care, gynecologic surgery and preventive visits.",
    focus: [
      "Global obstetric package management",
      "Delivery and postpartum care",
      "Antepartum visit tracking",
      "Gynecologic surgery",
      "Preventive and problem visits",
    ],
    pitfalls: [
      "Global package versus itemised billing",
      "Transfer of care and partial packages",
      "High-risk and complication documentation",
      "Preventive and problem visit combinations",
    ],
    related: ["medical-coding", "surgical-coding", "eligibility-and-authorization"],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    icon: "baby",
    summary: "Well-child care, immunisations and acute visits coded with age and counselling rules applied correctly.",
    metaDescription:
      "Pediatric coding services covering well-child visits, immunisation administration, developmental screening and acute care encounters.",
    focus: [
      "Well-child and preventive visits",
      "Immunisation and administration coding",
      "Developmental and behavioural screening",
      "Acute care encounters",
      "Newborn care",
    ],
    pitfalls: [
      "Age-specific code selection",
      "Preventive plus problem visit reporting",
      "Vaccine counselling documentation",
      "Screening tool and unit reporting",
    ],
    related: ["medical-coding", "em-coding", "provider-education"],
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    icon: "stethoscope",
    summary: "Chronic disease management where diagnosis specificity drives both reimbursement and risk scores.",
    metaDescription:
      "Internal medicine coding services covering chronic condition management, E/M levelling, preventive services and care management programs.",
    focus: [
      "Chronic condition management",
      "E/M levelling across settings",
      "Preventive and wellness visits",
      "Care management and remote monitoring",
      "Risk adjustment documentation",
    ],
    pitfalls: [
      "Diagnosis specificity and status conditions",
      "Time and complexity documentation",
      "Care management time thresholds",
      "Annual wellness visit requirements",
    ],
    related: ["risk-adjustment-coding", "em-coding", "clinical-documentation-improvement"],
  },
  {
    slug: "family-medicine",
    name: "Family Medicine",
    icon: "users",
    summary: "Broad-scope primary care coding across all ages, with preventive and problem-oriented care separated cleanly.",
    metaDescription:
      "Family medicine coding services covering primary care E/M, preventive visits, chronic care, minor procedures and immunisations.",
    focus: [
      "Primary care E/M across ages",
      "Preventive visit coding",
      "Chronic care management",
      "Minor office procedures",
      "Immunisations and screenings",
    ],
    pitfalls: [
      "Preventive and problem visit overlap",
      "Minor procedure versus E/M reporting",
      "Diagnosis specificity for chronic conditions",
      "Time-based service documentation",
    ],
    related: ["medical-coding", "risk-adjustment-coding", "medical-billing"],
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    icon: "siren",
    summary: "High-volume ED coding where throughput and levelling accuracy have to hold together.",
    metaDescription:
      "Emergency medicine coding services covering ED E/M levelling, critical care, observation, procedures and trauma documentation.",
    focus: [
      "ED E/M levelling",
      "Critical care time reporting",
      "Observation services",
      "Bedside procedures",
      "Trauma and resuscitation documentation",
    ],
    pitfalls: [
      "Medical decision making support for level",
      "Critical care time documentation",
      "Separately reportable procedures",
      "Diagnosis specificity from undifferentiated presentations",
    ],
    related: ["em-coding", "coding-auditing", "denial-management"],
  },
  {
    slug: "behavioral-health",
    name: "Behavioral Health",
    icon: "brain",
    summary: "Therapy and psychiatric services coded to time, modality and payer-specific coverage rules.",
    metaDescription:
      "Behavioral health coding services covering psychiatric evaluations, psychotherapy, group therapy, medication management and telehealth encounters.",
    focus: [
      "Psychiatric diagnostic evaluation",
      "Individual, family and group psychotherapy",
      "Medication management",
      "Crisis services",
      "Telehealth encounters",
    ],
    pitfalls: [
      "Time threshold documentation",
      "Therapy plus E/M reporting",
      "Authorization and visit limit tracking",
      "Telehealth modifier and place of service accuracy",
    ],
    related: ["medical-coding", "eligibility-and-authorization", "denial-management"],
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "activity",
    summary: "Drug administration and treatment planning coded with the unit and wastage discipline oncology demands.",
    metaDescription:
      "Oncology coding services covering chemotherapy and infusion administration, drug units, radiation oncology and treatment planning.",
    focus: [
      "Chemotherapy and infusion administration",
      "Drug and biologic unit reporting",
      "Radiation oncology planning and delivery",
      "Treatment plan management",
      "Supportive care services",
    ],
    pitfalls: [
      "Administration hierarchy and sequencing",
      "Drug units and documented wastage",
      "Authorization for high-cost therapy",
      "Radiation planning versus delivery reporting",
    ],
    related: ["medical-coding", "eligibility-and-authorization", "payment-posting"],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: "eye",
    summary: "Eye examinations, imaging and procedures with eye-specific modifier and frequency rules applied.",
    metaDescription:
      "Ophthalmology coding services covering eye examinations, diagnostic imaging, cataract and retinal procedures and intravitreal injections.",
    focus: [
      "Eye examination coding",
      "Diagnostic imaging and visual fields",
      "Cataract and anterior segment surgery",
      "Retinal procedures",
      "Intravitreal injections",
    ],
    pitfalls: [
      "Eye-specific modifier accuracy",
      "Testing frequency limitations",
      "Bilateral procedure reporting",
      "Medical versus routine vision indication",
    ],
    related: ["surgical-coding", "medical-coding", "denial-management"],
  },
  {
    slug: "ent",
    name: "ENT / Otolaryngology",
    icon: "ear",
    summary: "Airway, sinus, otologic and head and neck work coded with endoscopic bundling handled properly.",
    metaDescription:
      "ENT coding services covering sinus and nasal procedures, otologic surgery, airway procedures, head and neck surgery and audiology services.",
    focus: [
      "Sinus and nasal procedures",
      "Otologic surgery",
      "Airway and laryngeal procedures",
      "Head and neck surgery",
      "Audiology and vestibular testing",
    ],
    pitfalls: [
      "Endoscopic sinus bundling rules",
      "Bilateral and multiple sinus reporting",
      "Diagnostic versus surgical endoscopy",
      "Allergy testing unit reporting",
    ],
    related: ["surgical-coding", "medical-coding", "coding-auditing"],
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    icon: "wind",
    summary: "Pulmonary function testing, bronchoscopy and critical care coded to interpretation and time documentation.",
    metaDescription:
      "Pulmonology coding services covering pulmonary function testing, bronchoscopy, sleep studies, critical care and chronic respiratory management.",
    focus: [
      "Pulmonary function testing",
      "Bronchoscopy and interventional procedures",
      "Sleep study interpretation",
      "Critical care and ventilator management",
      "Chronic respiratory disease management",
    ],
    pitfalls: [
      "Test component and interpretation reporting",
      "Bundled bronchoscopy components",
      "Critical care time documentation",
      "Oxygen and equipment medical necessity",
    ],
    related: ["medical-coding", "em-coding", "clinical-documentation-improvement"],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    icon: "droplets",
    summary: "Dialysis management and access procedures coded against monthly service period rules.",
    metaDescription:
      "Nephrology coding services covering dialysis management, monthly capitation, vascular access procedures and chronic kidney disease staging.",
    focus: [
      "Dialysis management and monthly service periods",
      "Vascular access procedures",
      "Chronic kidney disease staging",
      "Home dialysis oversight",
      "Transplant-related management",
    ],
    pitfalls: [
      "Monthly capitation visit count accuracy",
      "Partial month and hospitalisation adjustments",
      "CKD stage documentation specificity",
      "Access procedure bundling",
    ],
    related: ["medical-coding", "risk-adjustment-coding", "accounts-receivable"],
  },
];

export const specialtiesBySlug = new Map(specialties.map((specialty) => [specialty.slug, specialty]));

export function getSpecialty(slug: string): Specialty | undefined {
  return specialtiesBySlug.get(slug);
}
