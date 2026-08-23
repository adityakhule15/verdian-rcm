"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { primaryNav, servicesMegaMenu } from "@/content/nav";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [renderedPath, setRenderedPath] = useState(pathname);

  // Any navigation closes the open panels, including browser back/forward.
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Section 3 — top announcement bar */}
      <div className="hidden bg-navy-950 text-navy-200 lg:block">
        <div className="container-page flex items-center justify-between gap-6 py-2.5 text-[0.8125rem]">
          <p className="truncate">{site.announcement.text}</p>
          <div className="flex shrink-0 items-center gap-5">
            <a href={site.contact.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" aria-hidden />
              {site.contact.phone}
            </a>
            <Link href={site.announcement.ctaHref} className="font-semibold text-teal-300 hover:text-teal-200">
              {site.announcement.ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition",
          scrolled ? "border-navy-100 shadow-soft" : "border-transparent",
        )}
      >
        {/* The mega menu is a child of the header so it can span the full
            viewport width instead of the width of its trigger. */}
        {openMenu === "Services" ? <ServicesMegaMenu onNavigate={() => setOpenMenu(null)} /> : null}

        <div className="container-page flex h-18 items-center justify-between gap-4">
          <Logo />

          {/* The full bar needs ~1230px, so it appears at xl and the drawer
              covers everything below that. */}
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {primaryNav.map((item) => {
                const hasPanel = item.megaMenu || item.children;
                const panelOpen = openMenu === item.label;

                if (!hasPanel) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition",
                          isActive(item.href)
                            ? "bg-navy-50 text-navy-900"
                            : "text-navy-700 hover:bg-navy-50 hover:text-navy-900",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      aria-expanded={panelOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(panelOpen ? null : item.label)}
                      className={cn(
                        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition",
                        isActive(item.href) || panelOpen
                          ? "bg-navy-50 text-navy-900"
                          : "text-navy-700 hover:bg-navy-50 hover:text-navy-900",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("size-3.5 transition", panelOpen && "rotate-180")}
                        aria-hidden
                      />
                    </button>

                    {panelOpen && !item.megaMenu && item.children ? (
                      <div className="absolute left-0 top-full z-50 mt-2 w-60 rounded-card border border-navy-100 bg-white p-2 shadow-lift">
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* Wrapper does the hiding: a `hidden` class on the button itself
                loses to the button's own `inline-flex` display utility. */}
            <div className="hidden md:block">
              <ButtonLink href={site.cta.primary.href} withArrow>
                {site.cta.primary.label}
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="inline-flex size-11 items-center justify-center rounded-full border border-navy-200 text-navy-800 xl:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? <MobileNav onClose={() => setMobileOpen(false)} /> : null}
    </>
  );
}

function ServicesMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="absolute inset-x-0 top-full border-b border-navy-100 bg-white shadow-lift">
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[repeat(3,minmax(0,1fr))_18rem]">
        {servicesMegaMenu.map((group) => (
          <div key={group.id}>
            <div className="flex items-center gap-2 pb-3">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Icon name={group.icon} className="size-4" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-700">{group.label}</p>
            </div>
            <ul className="space-y-0.5 border-t border-navy-100 pt-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-lg px-2.5 py-1.5 text-sm font-medium text-navy-700 transition hover:bg-navy-50 hover:text-navy-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-card bg-navy-950 p-6 text-navy-200">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-300">Not sure where to start?</p>
          <p className="mt-3 text-sm leading-relaxed">
            Tell us where revenue is leaking. We will recommend the services that address it and say plainly which ones
            you do not need.
          </p>
          <ButtonLink href="/contact" variant="onDark" size="sm" className="mt-5" withArrow onClick={onNavigate}>
            Talk to our experts
          </ButtonLink>
          <Link
            href="/services"
            onClick={onNavigate}
            className="mt-4 block text-sm font-semibold text-white hover:text-teal-300"
          >
            View all services
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>("Medical Coding");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 xl:hidden">
      <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-navy-200 text-navy-800"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-5">
          <ul className="space-y-1">
            {primaryNav
              .filter((item) => !item.megaMenu)
              .map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-navy-800 hover:bg-navy-50"
                  >
                    {item.label}
                  </Link>
                  {/* Children are listed inline: the drawer is the only way to
                      reach them on small screens. */}
                  {item.children ? (
                    <ul className="mb-1 ml-3 border-l border-navy-100 pl-3">
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block rounded-md px-2.5 py-2 text-sm text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  ) : null}
                </li>
              ))}
          </ul>

          <p className="mt-6 px-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-500">Services</p>
          <div className="mt-2 space-y-1">
            {servicesMegaMenu.map((group) => {
              const isOpen = openGroup === group.label;
              return (
                <div key={group.id} className="rounded-lg border border-navy-100">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm font-bold text-navy-900"
                  >
                    {group.label}
                    <ChevronDown className={cn("size-4 transition", isOpen && "rotate-180")} aria-hidden />
                  </button>
                  {isOpen ? (
                    <ul className="border-t border-navy-100 p-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="block rounded-md px-2.5 py-2 text-sm text-navy-700 hover:bg-navy-50"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="space-y-3 border-t border-navy-100 px-5 py-5">
          <ButtonLink href={site.cta.primary.href} className="w-full" onClick={onClose} withArrow>
            {site.cta.primary.label}
          </ButtonLink>
          <a
            href={site.contact.phoneHref}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-700"
          >
            <Phone className="size-4" aria-hidden />
            {site.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
