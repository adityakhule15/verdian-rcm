import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Talk to our team about medical coding, medical billing, revenue cycle management, AR follow-up, denial management or credentialing support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Contact Us", path: "/contact" }])} />

      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Tell us about your organization and what you need. We will review the requirement and come back with a recommended service model — including where we are not the right fit."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <Section labelledBy="contact-form-heading">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 id="contact-form-heading" className="text-2xl font-bold text-navy-900">
              Send us an enquiry
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600">
              The more detail you give about volumes, systems and specialties, the more specific our response can be.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-5">
            <Reveal>
              <Card className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Direct contact</p>

                <a
                  href={site.contact.phoneHref}
                  className="flex items-start gap-3 text-navy-900 transition hover:text-teal-700"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">Call us</span>
                    <span className="block font-semibold">{site.contact.phone}</span>
                    <span className="block text-sm text-navy-600">{site.contact.phoneAlt}</span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-3 text-navy-900 transition hover:text-teal-700"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">Email us</span>
                    <span className="block font-semibold">{site.contact.email}</span>
                    <span className="block text-sm text-navy-600">Careers: {site.contact.careersEmail}</span>
                  </span>
                </a>

                <p className="border-t border-navy-100 pt-4 text-sm leading-relaxed text-navy-600">
                  {site.contact.hours}
                </p>
              </Card>
            </Reveal>

            {site.offices.map((office, index) => (
              <Reveal key={office.label} delay={(index + 1) * 60}>
                <Card className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">{office.label}</p>
                  <p className="flex gap-3 text-sm leading-relaxed text-navy-700">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-navy-400" aria-hidden />
                    <span>
                      {office.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </p>
                </Card>
              </Reveal>
            ))}

            {/* Section 34 — map placeholder. Kept as a static block so no
                third-party script or API key ships before it is approved. */}
            <Reveal delay={200}>
              <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-panel border border-dashed border-navy-300 bg-navy-50 p-6 text-center">
                <MapPin className="size-6 text-navy-400" aria-hidden />
                <p className="text-sm font-semibold text-navy-800">Map placeholder</p>
                <p className="max-w-xs text-xs leading-relaxed text-navy-500">
                  Embed a map here once the office addresses are confirmed. Loading a third-party map has privacy and
                  cookie-consent implications, so it is deliberately not included by default.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="dark" className="py-14" labelledBy="phi-warning-heading">
        <div className="flex flex-col gap-3">
          <h2 id="phi-warning-heading" className="font-display text-xl font-bold text-white">
            Please do not send patient information through this form
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-navy-300">
            This form is not a secure channel for protected health information. If you need to share clinical
            documentation as part of an assessment, contact us first and we will set up an approved secure transfer
            method.
          </p>
        </div>
      </Section>
    </>
  );
}
