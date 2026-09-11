import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact Us | Ligase Healthcare",
  description:
    "Start your journey with Ligase Healthcare. Contact us for Medical Coding Services, Skill Development Programs (SDP), Final-Semester Internships, or Certification Preparation (CPC, CCS, CRC).",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Contact Us", path: "/contact" }])} />

      <PageHero
        eyebrow="Let's Connect"
        title="Start Your Journey With Ligase Healthcare"
        description="Whether you are a healthcare organization looking for professional medical coding support or an aspiring candidate looking to build your career through our training and internships, we are here to help."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <Section labelledBy="contact-form-heading">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form Side */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-teal-600" />
              <p className="text-xs font-bold uppercase tracking-wider text-teal-800">Direct Enquiry</p>
            </div>
            <h2 id="contact-form-heading" className="text-2xl sm:text-3xl font-bold text-navy-950">
              How Can We Assist You?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600 mb-8">
              Fill in the form below and our specialized healthcare or academic advisory team will connect with you.
            </p>
            <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>

          {/* Contact Details Side */}
          <div className="space-y-6">
            <Reveal>
              <Card className="space-y-5 border-navy-100 bg-white shadow-sm p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-800">Official Channels</p>

                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-3 text-navy-900 transition hover:text-teal-700"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">Official Email</span>
                    <span className="block font-bold text-base text-navy-950">{site.contact.email}</span>
                    <span className="block text-xs text-navy-600 mt-0.5">Careers: {site.contact.careersEmail}</span>
                  </div>
                </a>

                <a
                  href={site.contact.phoneHref}
                  className="flex items-start gap-3 text-navy-900 transition hover:text-teal-700"
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">Phone Support</span>
                    <span className="block font-bold text-base text-navy-950">{site.contact.phone}</span>
                    <span className="block text-xs text-navy-600 mt-0.5">International: {site.contact.phoneAlt}</span>
                  </div>
                </a>

                <div className="border-t border-navy-100 pt-4 text-xs leading-relaxed text-navy-600">
                  <p className="font-bold text-navy-900 mb-0.5">Operating Hours:</p>
                  <p>{site.contact.hours}</p>
                </div>
              </Card>
            </Reveal>

            {site.offices.map((office, index) => (
              <Reveal key={office.label} delay={(index + 1) * 60}>
                <Card className="space-y-2 border-navy-100 bg-white shadow-sm p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-800">{office.label}</p>
                  <div className="flex gap-3 text-xs leading-relaxed text-navy-700 pt-1">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-teal-600" aria-hidden />
                    <div>
                      {office.lines.map((line) => (
                        <p key={line} className="font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
