import { ButtonLink } from "./Button";
import { Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";

/** PDF Section 19 — Call-to-Action section */
export function CTABand({
  eyebrow = "Ready to Get Started?",
  title = "Ready to Build Your Next Healthcare Opportunity?",
  description = "Whether you are a healthcare organization looking for professional support or an aspiring medical coding professional looking to build your career, Ligase Healthcare is here to help.",
  primary = { label: "Explore Our Services", href: "/healthcare-solutions" },
  secondary = { label: "Explore Training", href: "/training" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-navy-950 py-16 text-navy-100 lg:py-20 border-t border-navy-900">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 px-6 py-12 sm:px-12 sm:py-16 shadow-2xl">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <div className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-teal-500/15 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <Eyebrow tone="dark">{eyebrow}</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">{title}</h2>
              <p className="text-base sm:text-lg leading-relaxed text-navy-200">{description}</p>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row lg:shrink-0">
              <ButtonLink href={primary.href} variant="onDark" size="lg" withArrow>
                {primary.label}
              </ButtonLink>
              <ButtonLink
                href={secondary.href}
                size="lg"
                className="border border-white/25 bg-white/5 text-white hover:bg-white/15"
              >
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
          <p className="relative mt-8 border-t border-white/10 pt-6 text-xs sm:text-sm text-navy-300">
            Have questions? Email us directly at{" "}
            <a href={`mailto:${site.contact.email}`} className="font-semibold text-teal-300 hover:underline">
              {site.contact.email}
            </a>{" "}
            or call{" "}
            <a href={site.contact.phoneHref} className="font-semibold text-teal-300 hover:underline">
              {site.contact.phone}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
