# Veridian Health RCM — Website

Marketing website for a healthcare Revenue Cycle Management, medical coding and
medical billing services company. Built from the end-to-end website script in
`5_6075488697711602867.pdf` (45 sections, homepage conversion flow, service and
specialty pages, careers, insights, legal pages).

> **Veridian Health RCM is a placeholder brand.** Every brand, contact and proof
> value lives in [`src/content/site.ts`](src/content/site.ts). See
> [`PLACEHOLDERS.md`](PLACEHOLDERS.md) for the full list of things to replace
> before launch.

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Turbopack)  |
| Language   | TypeScript (strict)                           |
| Styling    | Tailwind CSS v4 with tokens in `globals.css`  |
| Icons      | `lucide-react`                                |
| Fonts      | Plus Jakarta Sans (headings), Inter (body)    |
| Forms      | Server Actions + `zod` validation             |
| Content    | Typed data modules in `src/content/`          |

## Getting started

```bash
npm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
npm run dev
```

The site runs at http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (next lint was removed in Next.js 16)
```

## Verifying a change

Four scripts check the things that are easy to break and tedious to click
through. Start a server first, then point each script at it.

```bash
npm run smoke      -- http://localhost:3000   # routes, redirects, metadata, JSON-LD, sitemap
npm run a11y       -- http://localhost:3000   # landmarks, labels, unique ids, keyboard nav
npm run responsive -- http://localhost:3000   # overflow at 375/768/1024/1440 + screenshots
npm run forms      -- http://localhost:3000   # real submissions through the server actions
```

`responsive` writes screenshots to `.screenshots/` (add `--full` for full-page
captures). `forms` makes more submissions than the anti-spam limiter allows by
default, so start the server with `LEAD_RATE_LIMIT_MAX=100`; to check the
limiter itself, use default limits and run `npm run forms -- <url> --rate-limit`.

## How the site is organised

Content is data, not markup. Pages are templates that read typed arrays, so the
service and specialty pages are generated from two dynamic routes rather than
dozens of hand-written files.

```
src/
  app/
    page.tsx                     Homepage (script section 38 conversion flow)
    about/ why-choose-us/ ...    Static inner pages
    services/[slug]/             21 service pages from services.ts
    specialties/[slug]/          20 specialty pages from specialties.ts
    insights/ careers/ contact/  Blog, careers, contact
    legal/[slug]/                Privacy, terms, HIPAA notice, cookies
    sitemap.ts robots.ts         SEO routes
    opengraph-image.tsx          Generated social cards (per service too)
  components/                    Layout shell, UI primitives, page sections
  content/                       All copy and data (single source of truth)
  lib/                           Server actions, validation, lead delivery, SEO helpers
scripts/                         Smoke, accessibility, responsive and form checks
```

To add a service, append an entry to `src/content/services.ts`. The nav mega
menu, services index, sitemap, social card and its detail page all pick it up
automatically. Setting `seoPath` also creates a flat redirect (for example
`/denial-management` → `/services/denial-management`), so each service keeps one
canonical URL while the short paths from the script still resolve.

## Forms

Four forms post to Server Actions in `src/lib/actions.ts`: the full contact
enquiry, the short per-service enquiry that appears on every service and
specialty page, the careers application (with resume upload) and the footer
newsletter. Each action validates with `zod`, checks a honeypot field and a
per-IP rate limit, then hands off to `sendLead()` in `src/lib/leads.ts`.

Without `RESEND_API_KEY` set, `sendLead()` logs the submission to the server
console — useful in development and safe in review environments. Set
`RESEND_API_KEY`, `LEAD_FROM_EMAIL` and `LEAD_INBOX` to deliver real email.

The in-memory rate limiter is per-instance and tunable with
`LEAD_RATE_LIMIT_MAX` and `LEAD_RATE_LIMIT_WINDOW_MINUTES`. On multi-instance
hosting, move it to a shared store (Redis, Upstash) or your edge/WAF layer.

Forms are not a channel for protected health information, and every form says
so. Nothing on the site accepts PHI.

## Content and compliance guardrails

The source script is explicit about this and the code follows it:

- No invented statistics. The performance section shows the metrics that get
  reported, not numbers, until verified figures are added to `site.ts`.
- No fake testimonials, client logos, case-study results or employee profiles.
  Those sections render a visible "awaiting approved content" state when their
  arrays are empty.
- No certification or compliance claims beyond describing actual operating
  practices.
- Legal pages are templates that require review by counsel before publishing.

## Deploying

Any Node host works (Vercel, Netlify, Azure App Service, a container). Set
`NEXT_PUBLIC_SITE_URL` to the production origin so canonical URLs, the sitemap
and JSON-LD resolve correctly, then `npm run build && npm run start`.

## Attribution

NovElite RCM and comparable enterprise RCM sites were reviewed only to shape the
service taxonomy and page structure. All copy, design and code here is original.
