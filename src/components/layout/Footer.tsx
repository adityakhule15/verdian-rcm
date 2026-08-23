import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { copyrightLine, legalLinks, site } from "@/content/site";
import { footerNav } from "@/content/nav";
import { Logo } from "./Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

/** lucide-react v1 no longer ships brand marks, so this one is inline. */
function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 2.99V21h-4V9Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm space-y-6">
            <Logo tone="dark" />
            <div className="space-y-3">
              <p className="font-display text-xl font-bold leading-snug text-white">Healthcare revenue, managed better.</p>
              <p className="text-sm leading-relaxed">
                Medical coding, billing and revenue cycle solutions designed to improve accuracy, operational efficiency
                and financial performance for healthcare organizations.
              </p>
            </div>
            <NewsletterForm />
          </div>

          {footerNav.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">{column.heading}</p>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm transition hover:text-teal-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Contact</p>
            <a href={site.contact.phoneHref} className="flex items-center gap-2 text-sm hover:text-teal-300">
              <Phone className="size-4 shrink-0" aria-hidden />
              {site.contact.phone}
            </a>
            <a href={site.contact.phoneAltHref} className="flex items-center gap-2 text-sm hover:text-teal-300">
              <Phone className="size-4 shrink-0" aria-hidden />
              {site.contact.phoneAlt}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-sm hover:text-teal-300">
              <Mail className="size-4 shrink-0" aria-hidden />
              {site.contact.email}
            </a>
            <a
              href={site.contact.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-sm hover:text-teal-300"
            >
              <LinkedInMark />
              LinkedIn
            </a>
          </div>

          {site.offices.map((office) => (
            <div key={office.label} className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">{office.label}</p>
              <p className="flex gap-2 text-sm leading-relaxed">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          ))}

          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Careers</p>
            <p className="text-sm leading-relaxed">
              Coding, QA, AR and operations roles across our delivery centers.
            </p>
            <Link href="/careers" className="text-sm font-semibold text-teal-300 hover:text-teal-200">
              View current openings
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{copyrightLine}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-teal-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
