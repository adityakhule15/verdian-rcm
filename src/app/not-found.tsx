import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

const suggestions = [
  { label: "All services", href: "/services" },
  { label: "Medical coding", href: "/services/medical-coding" },
  { label: "End-to-end RCM", href: "/services/revenue-cycle-management" },
  { label: "Specialties", href: "/specialties" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-navy-100">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="container-page relative max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Error 404</p>
        <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-200">
          The link may be out of date or the page may have moved. Here is where most people were heading.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="onDark" size="lg" withArrow>
            Back to homepage
          </ButtonLink>
          <ButtonLink
            href="/contact"
            size="lg"
            className="border border-white/25 bg-transparent text-white hover:bg-white/10"
          >
            Contact us
          </ButtonLink>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-navy-300">
          Looking for something specific? Call{" "}
          <a href={site.contact.phoneHref} className="font-semibold text-teal-300 hover:underline">
            {site.contact.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
