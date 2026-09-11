"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { primaryNav } from "@/content/nav";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white shadow-lift"
      >
        Skip to content
      </a>

      {/* Top Announcement Bar */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block border-b border-white/5">
        <div className="container-page flex items-center justify-between gap-6 py-2 text-[0.8125rem]">
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-teal-400 animate-pulse" />
            <p className="font-medium text-white/90">{site.announcement.text}</p>
          </div>
          <div className="flex shrink-0 items-center gap-5">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-1.5 text-navy-300 hover:text-white transition-colors"
            >
              <span className="text-teal-400 font-semibold">{site.contact.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-1.5 text-navy-300 hover:text-white transition-colors"
            >
              <Phone className="size-3.5 text-teal-400" aria-hidden />
              <span>{site.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-navy-100/90 bg-white/95 backdrop-blur-md shadow-xs py-2.5"
            : "border-b border-navy-100/50 bg-white py-3.5",
        )}
      >
        <div className="container-page flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop Navigation Links — Streamlined Pills */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-1.5 bg-navy-50/70 p-1 rounded-full border border-navy-100/70">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.84rem] xl:text-[0.875rem] font-semibold transition-all duration-200",
                        active
                          ? "bg-white text-teal-800 shadow-xs font-bold"
                          : "text-navy-700 hover:text-navy-950 hover:bg-white/60",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTA with Glow & Mobile Menu Toggle */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
              <ButtonLink
                href="/contact"
                className="relative overflow-hidden group shadow-md hover:shadow-teal-500/20 rounded-full px-5 py-2 text-sm font-bold"
                withArrow
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-teal-300" aria-hidden />
                  Get Started
                </span>
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-navy-200 text-navy-800 lg:hidden hover:bg-navy-50 transition"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileOpen ? <MobileNav onClose={() => setMobileOpen(false)} /> : null}
    </>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 lg:hidden">
      <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300"
      >
        <div className="flex items-center justify-between border-b border-navy-100 px-6 py-4.5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-9.5 items-center justify-center rounded-lg border border-navy-200 text-navy-800 hover:bg-navy-50"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1.5">
            {primaryNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition",
                      active
                        ? "bg-teal-50 text-teal-800"
                        : "text-navy-800 hover:bg-navy-50 hover:text-navy-950",
                    )}
                  >
                    <span>{item.label}</span>
                    {active && <span className="size-2 rounded-full bg-teal-600" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3.5 border-t border-navy-100 bg-navy-50/60 px-6 py-6">
          <ButtonLink href="/contact" className="w-full justify-center" onClick={onClose} withArrow>
            Get Started
          </ButtonLink>
          <div className="text-center">
            <a
              href={`mailto:${site.contact.email}`}
              className="text-xs font-semibold text-navy-600 hover:text-teal-700"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
