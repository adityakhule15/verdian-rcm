import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Stethoscope,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import {
  mission,
  successCategories,
  trustPoints,
  vision,
  whoWeAre,
  whyChooseUs,
  whyLigaseEcosystem,
} from "@/content/company";
import { healthcareSolutions, medicalCodingServiceAreas } from "@/content/services";
import { learningJourneySteps, trainingPrograms } from "@/content/training";
import { certificationJourneySteps, certificationsList } from "@/content/certifications";
import { internshipBenefits, internshipDetails } from "@/content/internships";

/** Section 3 — Trust / Introduction Strip */
export function TrustStrip() {
  return (
    <Section tone="tint" className="py-14 lg:py-16" labelledBy="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow="Healthcare Expertise · Practical Skills · Career Growth"
        title="Healthcare Expertise. Practical Skills. Career Growth."
        description="Ligase Healthcare combines healthcare services with practical, career-focused learning to help organizations and aspiring healthcare professionals move forward with confidence."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, index) => (
          <Reveal key={point.title} delay={index * 80} className="h-full">
            <div className="h-full rounded-2xl border border-navy-100/90 bg-white p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 mb-4">
                  <Icon name={point.icon} className="size-6" />
                </span>
                <h3 className="font-display text-base font-bold text-navy-950 mb-2">{point.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600">{point.body}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-navy-50 flex items-center gap-1 text-xs font-semibold text-teal-700">
                <span>Verified Standard</span>
                <Check className="size-3.5" aria-hidden />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 4 — Who We Are (Split Screen) */
export function WhoWeAreSection() {
  return (
    <Section labelledBy="who-we-are-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Side: Modern Graphic & Core Capability Matrix */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white shadow-lift border border-navy-800">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-teal-500/20 blur-2xl pointer-events-none" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-teal-300">
                <Sparkles className="size-3.5 text-teal-300" />
                <span>Integrated Healthcare Partner</span>
              </div>
              <h3 className="font-display text-2xl font-bold leading-snug">
                Connecting Professional Healthcare Services & Career Development
              </h3>
              <p className="text-sm leading-relaxed text-navy-200">
                From high-precision medical coding delivery for healthcare organizations to specialized skill training and AAPC/AHIMA certification mentorship for aspirants.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {whoWeAre.highlights.map((item, idx) => (
                  <div key={item} className="rounded-xl bg-white/5 border border-white/10 p-3.5">
                    <p className="text-xs font-bold text-teal-300">0{idx + 1}</p>
                    <p className="mt-1 text-xs font-medium text-white/90 leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Side: Exact PDF Copy & Details */}
        <Reveal delay={80} className="space-y-6">
          <SectionHeading
            id="who-we-are-heading"
            eyebrow="Who We Are"
            title="Building the Healthcare Workforce of Tomorrow"
            description={whoWeAre.content}
          />
          <div className="space-y-3 pt-2">
            {[
              "Quality-driven medical coding services with 98%+ accuracy benchmarks",
              "Skill Development Programs (SDP) crafted for life sciences graduates",
              "Structured final-semester internship programs with real-world exposure",
              "Specialized preparation for CPC, CCS, and CRC credentials",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 mt-0.5">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <p className="text-sm text-navy-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <ButtonLink href="/about" withArrow>
              Learn More About Us
            </ButtonLink>
            <ButtonLink href="/healthcare-solutions" variant="secondary">
              Our Healthcare Solutions
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Section 5 & 6 — Our Mission & Our Vision */
export function MissionVisionSection() {
  return (
    <Section tone="tint" labelledBy="mission-vision-heading">
      <SectionHeading
        id="mission-vision-heading"
        eyebrow="Purpose & Direction"
        title="Our Mission & Strategic Vision"
        align="center"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Mission Card */}
        <Reveal className="h-full">
          <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800 uppercase tracking-wider mb-4">
                Our Mission
              </div>
              <h3 className="font-display text-xl font-bold text-navy-950 leading-snug">
                Driving Quality, Precision and Career Empowerment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                "{mission.statement}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-between text-xs text-navy-500">
              <span>Goal: End-to-end Healthcare Success</span>
              <span className="font-bold text-teal-700">98%+ Accuracy Focus</span>
            </div>
          </div>
        </Reveal>

        {/* Vision Card */}
        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider mb-4">
                Our Vision
              </div>
              <h3 className="font-display text-xl font-bold text-navy-950 leading-snug">
                {vision.tagline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                "{vision.statement}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-between text-xs text-navy-500">
              <span>Vision Blueprint</span>
              <span className="font-bold text-teal-700">Global Leadership</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Section 7 — Why Choose Us (8 Interactive Cards with Hover Lift) */
export function WhyChooseUsGrid() {
  return (
    <Section labelledBy="why-choose-heading">
      <SectionHeading
        id="why-choose-heading"
        eyebrow="Why Choose Ligase"
        title="Eight Core Strengths That Define Our Advantage"
        description="Comprehensive healthcare medical coding services, career-oriented training, and global certification pathways unified under one dedicated partner."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((card, idx) => (
          <Reveal key={card.title} delay={idx * 60} className="h-full">
            <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Icon name={card.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-navy-400 group-hover:text-teal-700">
                    {card.number}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-navy-950 group-hover:text-teal-800 transition-colors mb-2.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-600">{card.body}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-50 flex items-center gap-1.5 text-xs font-bold text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ChevronRight className="size-3.5" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 8 — Our Healthcare Solutions */
export function HealthcareSolutionsSection() {
  return (
    <Section tone="tint" labelledBy="solutions-heading">
      <SectionHeading
        id="solutions-heading"
        eyebrow="Our Healthcare Solutions"
        title="Supporting Healthcare Through Accuracy, Skills & Technology"
        description="Ligase Healthcare supports healthcare organizations with professional services designed around quality, accuracy, efficiency, and skilled healthcare professionals."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {healthcareSolutions.map((solution, index) => (
          <Reveal key={solution.id} delay={index * 80}>
            <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-white">
                  <Icon name={solution.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-950">{solution.title}</h3>
                  <p className="mt-1 text-sm text-navy-600 leading-relaxed">{solution.summary}</p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5 border-t border-navy-100 pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-400">Key Deliverables</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {solution.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-semibold text-navy-800">
                      <CheckCircle2 className="size-4 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-navy-100">
                <Link
                  href="/healthcare-solutions"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 hover:text-teal-800"
                >
                  Explore Solution Details
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 9 — Medical Coding Services Spotlight */
export function MedicalCodingSpotlight() {
  return (
    <Section labelledBy="coding-spotlight-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal className="space-y-6">
          <SectionHeading
            id="coding-spotlight-heading"
            eyebrow="Medical Coding Services"
            title="Accuracy That Supports Better Healthcare Operations"
            description="Our medical coding services focus on accuracy, quality, compliance-oriented practices, and skilled professionals to support healthcare organizations."
          />
          <p className="text-sm text-navy-600 leading-relaxed">
            Whether managing high-volume outpatient procedures or complex inpatient surgical charts, our teams uphold clinical integrity, minimize denials, and maintain compliant billing practices.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/healthcare-solutions#medical-coding" withArrow>
              Explore Medical Coding
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request Coding Audit
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {medicalCodingServiceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-navy-100 bg-white p-4.5 shadow-xs hover:border-teal-300 transition"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                    <Icon name={area.icon} className="size-4" />
                  </span>
                  <p className="font-display text-sm font-bold text-navy-950">{area.title}</p>
                </div>
                <p className="text-xs text-navy-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Section 10 & 11 — Training Section & Learning Journey */
export function TrainingSection() {
  return (
    <Section tone="tint" labelledBy="training-heading">
      <SectionHeading
        id="training-heading"
        eyebrow="Professional Training"
        title="Learn Medical Coding. Build Skills. Prepare for Your Career."
        description="Our training programs are designed to provide practical, industry-oriented learning for individuals looking to build a career in medical coding and healthcare."
        align="center"
      />

      {/* Program Cards */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {trainingPrograms.map((prog, idx) => (
          <Reveal key={prog.id} delay={idx * 80} className="h-full">
            <div className="h-full rounded-3xl border border-navy-100 bg-white p-7 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                    {prog.badge}
                  </span>
                  <span className="text-xs font-semibold text-navy-500">{prog.duration}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950 mb-2.5">{prog.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600 mb-5">{prog.overview}</p>

                <div className="space-y-2 border-t border-navy-50 pt-4 mb-6">
                  {prog.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-navy-700">
                      <Check className="size-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-navy-100">
                <ButtonLink href="/training" className="w-full justify-center" size="sm" withArrow>
                  Explore Program
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 12 — Internship Section */
export function InternshipSection() {
  return (
    <Section labelledBy="internship-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal className="space-y-6">
          <SectionHeading
            id="internship-heading"
            eyebrow="Internship Opportunities"
            title="Turn Classroom Knowledge Into Practical Experience"
            description={internshipDetails.overview}
          />
          <div className="space-y-3 pt-2">
            {internshipDetails.eligibility.map((el) => (
              <div key={el} className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4.5 text-teal-600 shrink-0 mt-0.5" />
                <p className="text-sm text-navy-700">{el}</p>
              </div>
            ))}
          </div>
          <div className="pt-3">
            <ButtonLink href="/internships" withArrow>
              Explore Internship Opportunities
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internshipBenefits.map((ben) => (
              <div
                key={ben.title}
                className="rounded-2xl border border-navy-100 bg-navy-50/60 p-6 shadow-xs hover:border-teal-300 hover:bg-white transition"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-950 text-teal-300 mb-4">
                  <Icon name={ben.icon} className="size-5" />
                </span>
                <h4 className="font-display text-base font-bold text-navy-950 mb-2">{ben.title}</h4>
                <p className="text-xs leading-relaxed text-navy-600">{ben.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Section 13 & 14 — Certification Section & Journey */
export function CertificationSection() {
  return (
    <Section tone="tint" labelledBy="cert-heading">
      <SectionHeading
        id="cert-heading"
        eyebrow="Industry Certifications"
        title="Prepare. Certify. Advance."
        description="We support aspiring medical coding professionals in preparing for recognized global certifications that open doors across international healthcare enterprises."
        align="center"
      />

      {/* Certification Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificationsList.map((cert, idx) => (
          <Reveal key={cert.id} delay={idx * 60} className="h-full">
            <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-xl font-black text-teal-700">{cert.code}</span>
                  <span className="size-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Icon name={cert.icon} className="size-4" />
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-navy-950 mb-1">{cert.title}</h3>
                <p className="text-xs font-semibold text-navy-500 mb-3">{cert.issuingBody}</p>
                <p className="text-xs leading-relaxed text-navy-600 mb-4">{cert.description}</p>
              </div>

              <div className="border-t border-navy-50 pt-4">
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-800"
                >
                  Certification Details
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 15 — Student / Professional Success Section */
export function StudentSuccessSection() {
  return (
    <Section labelledBy="success-heading">
      <SectionHeading
        id="success-heading"
        eyebrow="Success Starts With Skills"
        title="Success Starts With Skills"
        description="Transforming ambitious candidates into industry-recognized medical coding professionals with market-leading accuracy and career velocity."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {successCategories.map((cat, idx) => (
          <Reveal key={cat.title} delay={idx * 60} className="h-full">
            <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 mb-4">
                  <Icon name={cat.icon} className="size-5" />
                </span>
                <h3 className="font-display text-base font-bold text-navy-950 mb-2">{cat.title}</h3>
                <p className="text-xs text-navy-600 leading-relaxed mb-4">{cat.description}</p>
                <ul className="space-y-1.5 border-t border-navy-50 pt-3">
                  {cat.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs font-medium text-navy-700">
                      <Check className="size-3 text-teal-600 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Section 16 — Why Ligase? (Animated Venn / 3-Pillar Diagram) */
export function WhyLigaseEcosystemSection() {
  return (
    <Section tone="dark" labelledBy="why-ligase-heading">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-300">Complete Career Ecosystem</p>
        <h2 id="why-ligase-heading" className="text-3xl sm:text-4xl font-extrabold text-white">
          Why Ligase Healthcare?
        </h2>
        <p className="text-base text-navy-200">
          {whyLigaseEcosystem.statement}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {whyLigaseEcosystem.pillars.map((pillar, idx) => (
          <Reveal key={pillar.title} delay={idx * 80} className="h-full">
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/10 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300">
                    <Icon name={pillar.icon} className="size-6" />
                  </span>
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    {pillar.tagline}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-navy-200 leading-relaxed">{pillar.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-teal-300">
                <Sparkles className="size-3.5" />
                <span>Ecosystem Pillar 0{idx + 1}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}



/** Section 18 — Careers Section Preview */
export function CareersSection() {
  return (
    <Section tone="tint" labelledBy="careers-preview-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <SectionHeading
          id="careers-preview-heading"
          eyebrow="Careers at Ligase"
          title="Build Your Career With Us"
          description="We are building a professional environment where healthcare knowledge, coding skills, continuous learning, and career development come together."
        >
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/careers" withArrow>
              View Opportunities
            </ButtonLink>
            <ButtonLink
              href={`mailto:${site.contact.careersEmail}?subject=${encodeURIComponent("Resume — Application for Ligase Healthcare")}`}
              variant="secondary"
            >
              Send Your Resume
            </ButtonLink>
          </div>
        </SectionHeading>

        <Reveal delay={80} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
          <h3 className="font-display text-lg font-bold text-navy-950 mb-4">
            Why Grow Your Career at Ligase Healthcare?
          </h3>
          <ul className="space-y-3.5">
            {[
              "Direct exposure to international healthcare and coding workflows",
              "Structured career path from Trainee Coder to QA Auditor and Lead",
              "Sponsorship and mentorship for AAPC / AHIMA certifications",
              "Dynamic culture built on accuracy, ethics, and mutual growth",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 mt-0.5">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span className="text-xs sm:text-sm font-medium text-navy-700">{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/** Section 20 — Contact Preview */
export function ContactPreview() {
  return (
    <Section tone="tint" labelledBy="contact-preview-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          id="contact-preview-heading"
          eyebrow="Let's Connect"
          title="Start Your Journey With Ligase Healthcare"
          description="Whether you are a healthcare organization looking for professional support or an aspiring medical coding professional looking to build your career, Ligase Healthcare is here to help."
        />
        <Reveal delay={80} className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm">
          <dl className="space-y-4">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-navy-400">Email Address</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-base sm:text-lg font-bold text-navy-950 hover:text-teal-700"
                >
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-navy-400">Phone</dt>
              <dd className="mt-1">
                <a href={site.contact.phoneHref} className="text-base sm:text-lg font-bold text-navy-950 hover:text-teal-700">
                  {site.contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-navy-400">Availability</dt>
              <dd className="mt-1 text-xs text-navy-600">{site.contact.hours}</dd>
            </div>
          </dl>
          <div className="mt-6 pt-5 border-t border-navy-100">
            <ButtonLink href="/contact" className="w-full justify-center" withArrow>
              Open Enquiry Form
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
