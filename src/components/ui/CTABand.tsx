import { ButtonLink } from "./Button";
import { Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { ServiceEnquiryForm } from "@/components/forms/ServiceEnquiryForm";
import { site } from "@/content/site";

/** Section 33 — dark, full-width closing call to action. */
export function CTABand({
  eyebrow = "Next step",
  title = "Let's improve your healthcare revenue cycle",
  description = "Whether you need medical coding support, billing assistance, AR management, denial management or complete RCM outsourcing, we will build a service model around your organization's requirements.",
  primary = { label: "Schedule a consultation", href: "/contact" },
  secondary = { label: "Request a proposal", href: "/contact?intent=proposal" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-navy-950 py-16 text-navy-100 lg:py-20">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-panel border border-white/10 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <Eyebrow tone="dark">{eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
              <p className="text-lg leading-relaxed text-navy-200">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <ButtonLink href={primary.href} variant="onDark" size="lg" withArrow>
                {primary.label}
              </ButtonLink>
              <ButtonLink
                href={secondary.href}
                size="lg"
                className="border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
          <p className="relative mt-8 border-t border-white/10 pt-6 text-sm text-navy-300">
            Prefer to talk first? Call{" "}
            <a href={site.contact.phoneHref} className="font-semibold text-teal-300 hover:underline">
              {site.contact.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.contact.email}`} className="font-semibold text-teal-300 hover:underline">
              {site.contact.email}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Section 43 — per-service lead generation block. */
export function ServiceLeadBlock({ serviceTitle }: { serviceTitle: string }) {
  return (
    <section className="bg-navy-50 py-14" aria-labelledby="service-lead-heading">
      <div className="container-page">
        <Reveal className="grid gap-8 rounded-panel border border-navy-100 bg-white p-8 shadow-soft lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10">
          <div className="space-y-4">
            <h2 id="service-lead-heading" className="text-2xl font-bold text-navy-900">
              Need help with {serviceTitle.toLowerCase()}?
            </h2>
            <p className="text-base leading-relaxed text-navy-600">
              Tell us about your volumes, systems and current pain points. We will come back with a service model and a
              realistic timeline, not a generic brochure.
            </p>
            <dl className="space-y-3 border-t border-navy-100 pt-5 text-sm">
              <div>
                <dt className="font-semibold text-navy-900">Prefer to talk?</dt>
                <dd className="mt-1">
                  <a href={site.contact.phoneHref} className="font-semibold text-teal-700 hover:underline">
                    {site.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900">Or email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.contact.email}`} className="font-semibold text-teal-700 hover:underline">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <ServiceEnquiryForm serviceTitle={serviceTitle} />
        </Reveal>
      </div>
    </section>
  );
}
