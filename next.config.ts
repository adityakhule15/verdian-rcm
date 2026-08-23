import type { NextConfig } from "next";
import { serviceSeoRedirects } from "./src/content/services";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  poweredByHeader: false,
  /**
   * Section 40 of the website script lists flat SEO paths such as
   * /medical-coding and /denial-management. Service pages live at
   * /services/[slug] so there is one canonical URL per service; the flat paths
   * permanently redirect there, which keeps external links and any printed
   * collateral working.
   */
  async redirects() {
    return [
      ...serviceSeoRedirects.map((redirect) => ({ ...redirect, permanent: true })),
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/terms-and-conditions", destination: "/legal/terms-and-conditions", permanent: true },
    ];
  },
  /** Browsers request /favicon.ico before parsing HTML; without this, Vercel serves its default mark. */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon" }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
