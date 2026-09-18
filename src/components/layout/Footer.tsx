import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { copyrightLine, footerTagline, legalLinks, site } from "@/content/site";
import { footerNav } from "@/content/nav";
import { Logo } from "./Logo";

function SocialIcon({ type }: { type: "linkedin" | "instagram" | "facebook" | "youtube" | "whatsapp" }) {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 2.99V21h-4V9Z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden>
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.82 0-1.667.147-2.148.57-.48.423-.538 1.114-.538 2.215v1.195h4.869l-.799 3.667h-4.07v7.98h-4.368Z" />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-white/10">
      <div className="container-page py-16 lg:py-20">
        {/* Main Grid Columns */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.1fr_1.1fr]">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo tone="dark" />
            <div className="space-y-3">
              <p className="font-display text-lg font-bold text-white leading-snug">
                Healthcare Services | Training | Internships | Certification Support
              </p>
              <p className="text-sm leading-relaxed text-navy-300">
                Empowering healthcare organizations through accuracy and technology, while transforming aspiring candidates into certified industry professionals.
              </p>
            </div>

            {/* Social Links */}
            {/* <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-300 mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                <a
                  href={site.contact.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-navy-200 hover:bg-teal-500/20 hover:text-teal-300 transition"
                >
                  <SocialIcon type="whatsapp" />
                </a>
                <a
                  href={site.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ligase Healthcare LinkedIn"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-navy-200 hover:bg-teal-500/20 hover:text-teal-300 transition"
                >
                  <SocialIcon type="linkedin" />
                </a>
                <a
                  href={site.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ligase Healthcare Instagram"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-navy-200 hover:bg-teal-500/20 hover:text-teal-300 transition"
                >
                  <SocialIcon type="instagram" />
                </a>
                <a
                  href={site.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ligase Healthcare Facebook"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-navy-200 hover:bg-teal-500/20 hover:text-teal-300 transition"
                >
                  <SocialIcon type="facebook" />
                </a>
                <a
                  href={site.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ligase Healthcare YouTube"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-navy-200 hover:bg-teal-500/20 hover:text-teal-300 transition"
                >
                  <SocialIcon type="youtube" />
                </a>
              </div>
            </div> */}
          </div>

          {/* Quick Links Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Quick Links</p>
            <ul className="mt-5 space-y-2.5">
              {footerNav.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Training Column */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Healthcare Solutions & Training</p>
            <ul className="mt-5 space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Contact Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Certifications</p>
              <ul className="mt-4 space-y-2">
                {footerNav.certifications.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm transition hover:text-teal-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Contact Us</p>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-sm hover:text-white transition">
                <Mail className="size-4 shrink-0 text-teal-400" aria-hidden />
                <span>{site.contact.email}</span>
              </a>
              <a href={site.contact.phoneHref} className="flex items-center gap-2 text-sm hover:text-white transition">
                <Phone className="size-4 shrink-0 text-teal-400" aria-hidden />
                <span>{site.contact.phone}</span>
              </a>
              <div className="flex items-start gap-2 text-xs text-navy-300 pt-1">
                <MapPin className="size-4 shrink-0 text-teal-400 mt-0.5" aria-hidden />
                <span>{site.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Band */}
        <div className="mt-14 rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 text-center">
          <p className="text-sm font-semibold text-teal-200 tracking-wide">
            {footerTagline}
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-navy-950/80">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
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
