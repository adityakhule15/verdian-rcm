# Placeholders — what must be replaced before launch

Everything on this site is either real, original copy or a clearly marked placeholder. Nothing
here invents a statistic, a certification, a client name or a person. This file is the complete
list of what a real company has to fill in.

Work top to bottom: the blockers stop you from going live, the rest can follow.

## 1. Blockers — the site cannot go live without these

### Brand and contact — `src/content/site.ts`

This one file holds every brand value, so swapping in a real brand is a single-file change.

| Value | Current placeholder | Notes |
| --- | --- | --- |
| `name` | Veridian Health RCM | Invented name. Check trademark availability before use. |
| `shortName` | Veridian | Used in tight UI spaces. |
| `legalName` | "Veridian Health RCM (placeholder legal entity name)" | Registered entity name, used in JSON-LD and legal pages. |
| `tagline` | Precision in Coding. Excellence in RCM. Confidence in Revenue. | From the source script; keep or replace. |
| `contact.email` | info@example.com | Real sales inbox. |
| `contact.careersEmail` | careers@example.com | Real recruiting inbox. |
| `contact.phone` / `phoneHref` | +1 (000) 000-0000 | US number. `phoneHref` must be the `tel:` form with no spaces. |
| `contact.phoneAlt` / `phoneAltHref` | +91 00000 00000 | Delivery-centre number, or delete the field. |
| `contact.hours` | Generic availability line | Real coverage hours and time zone. |
| `contact.linkedin` | linkedin.com root | Real company page URL. |
| `offices[]` | Two placeholder addresses | Real street, city, state, postcode, country for each site. |
| `foundedYear` | 2026 | Real incorporation year. |

### Logo — `src/components/layout/Logo.tsx`

An inline SVG wordmark is used deliberately so nothing unlicensed ships. Replace it with the real
logo, and add `favicon.ico`, `icon.png` and `apple-icon.png` to `src/app/`.

### Environment variables — see `.env.example`

| Variable | Why it matters |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap and JSON-LD are all wrong without the real domain. |
| `LEAD_INBOX` | Where contact and service enquiries are delivered. |
| `CAREERS_INBOX` | Where job applications are delivered. |
| `RESEND_API_KEY`, `LEAD_FROM_EMAIL` | Until these are set, submissions validate and log to the server console but **no email is sent**. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional. Adding it may require a cookie banner — see the cookie policy note below. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional, for Search Console. |

### Legal pages — `src/content/legal.ts`

Privacy Policy, Terms & Conditions, HIPAA / Security Notice and Cookie Policy are **drafting
templates, not legal advice**. Each page renders a visible "awaiting legal review" banner and each
template contains bracketed markers:

- `[COMPANY TO CONFIRM ...]` — a factual detail only the company knows (processors, retention
  periods, notification timelines, privacy contact).
- `[COUNSEL TO DRAFT ...]` / `[COUNSEL TO CONFIRM ...]` — a provision that must be written or
  approved by a lawyer (limitation of liability, governing law, which privacy frameworks apply,
  whether a consent banner is required).

Search the file for `[` to find all of them. Remove the review banner from
`src/app/legal/[slug]/page.tsx` and set `lastReviewed` to the approval date once counsel signs off.
The legal routes are `noindex` until then.

## 2. Content slots that render as visible placeholders

These are intentional empty states, not bugs. Each one renders an internal note instead of
inventing content, per sections 26, 29, 30 and 31 of the source script.

| Slot | File | What to add |
| --- | --- | --- |
| Performance metrics | `site.metrics[].value` | Labels ship without numbers. Add a `value` only for a figure you can evidence on request. Leave the rest undefined. |
| Testimonials | `site.testimonials` | Empty array. Add only quotes you have written permission to publish, with name, designation and organization. |
| Client logos | `site.clientLogos` | Empty array. Never publish a client or vendor logo without written authorization. |
| Leadership profiles | `src/content/company.ts` → `leadership` | Placeholder cards. Add real names, titles, photos and bios. |
| Certifications | `src/content/company.ts` → `complianceNotice` | The site describes practices, never claims a certification. Publish AAPC/AHIMA credentials, SOC 2, ISO or HITRUST **only** if held and evidenceable. |
| Technology names | `src/content/company.ts` → `technologyNotice` | Categories are described generically. Name a specific EHR, clearinghouse or billing platform only where you have permission. |
| Case studies | `src/content/caseStudies.ts` | Three illustrative entries. Each has `clientApproved`; keep it `false` until the client signs off, and de-identify by client type. |
| Insights articles | `src/content/insights.ts` | Three sample articles. Replace with reviewed editorial content. |
| Job openings | `src/content/careers.ts` | Ten illustrative roles. Replace with live requisitions. |
| Office map | `src/app/contact/page.tsx` | A styled placeholder panel. Embedding Google Maps adds third-party cookies — update the cookie policy first. |

## 3. Content to review, not replace

All service, specialty, process and FAQ copy is original and safe to publish, but a subject-matter
expert should still confirm accuracy before launch, because coding and payer rules change:

- `src/content/services.ts` — 21 services (deliverables, workflows, highlights).
- `src/content/specialties.ts` — 20 specialties (focus areas and common pitfalls).
- `src/content/faqs.ts` — 12 FAQs. These feed `FAQPage` structured data, so wrong answers become
  wrong search results.
- `src/content/process.ts` — the delivery process and revenue cycle stages.

## 4. Pre-launch checklist

- [ ] Real brand, contact details and addresses in `src/content/site.ts`
- [ ] Real logo and favicons
- [ ] `NEXT_PUBLIC_SITE_URL` set to the production domain
- [ ] Lead delivery tested end to end (contact, per-service enquiry, careers, newsletter)
- [ ] All four legal pages approved by counsel, banner removed, `noindex` lifted
- [ ] Cookie policy matched to what actually runs, consent banner added if required
- [ ] Metrics, testimonials, logos and leadership either filled in with evidence or left empty
- [ ] Service, specialty and FAQ copy reviewed by a coding/compliance lead
- [ ] `npm run build` clean, `npx eslint .` clean
- [ ] `sitemap.xml` and `robots.txt` correct on the production domain
- [ ] Layouts checked at 375px, 768px, 1024px and 1440px
- [ ] Keyboard-only pass: skip link, mega menu, mobile drawer, every form
