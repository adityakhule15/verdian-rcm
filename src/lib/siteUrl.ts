/**
 * Canonical site origin for metadata, sitemap and JSON-LD.
 *
 * Priority:
 * 1. NEXT_PUBLIC_SITE_URL — set in Vercel for a stable custom/production domain
 * 2. VERCEL_PROJECT_PRODUCTION_URL — stable *.vercel.app alias (not the hashed deploy URL)
 * 3. VERCEL_URL — last resort; often a deployment-specific host that may be SSO-protected,
 *    which breaks WhatsApp/LinkedIn link-preview images
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim().replace(/\/$/, "");
  if (productionHost) return `https://${productionHost}`;

  const vercelHost = process.env.VERCEL_URL?.trim().replace(/\/$/, "");
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}
