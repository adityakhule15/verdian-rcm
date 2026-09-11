import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

const suggestions = [
  { label: "About Us", href: "/about" },
  { label: "Healthcare Solutions", href: "/healthcare-solutions" },
  { label: "Training Programs", href: "/training" },
  { label: "Internships", href: "/internships" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-navy-100 min-h-[70vh] flex items-center">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-page relative max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Error 404</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-200">
          The link you followed may be outdated or the page may have moved. Here are the main sections of Ligase Healthcare:
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-full border border-white/20 px-4.5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-teal-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="onDark" size="lg" withArrow>
            Back to Homepage
          </ButtonLink>
          <ButtonLink
            href="/contact"
            size="lg"
            className="border border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            Contact Us
          </ButtonLink>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-navy-300">
          Have questions? Reach us directly at{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold text-teal-300 hover:underline">
            {site.contact.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
