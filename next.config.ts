import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/services", destination: "/healthcare-solutions", permanent: true },
      { source: "/services/:slug", destination: "/healthcare-solutions", permanent: true },
      { source: "/specialties", destination: "/healthcare-solutions", permanent: true },
      { source: "/specialties/:slug", destination: "/healthcare-solutions", permanent: true },
      { source: "/who-we-serve", destination: "/healthcare-solutions", permanent: true },
      { source: "/insights", destination: "/training", permanent: true },
      { source: "/insights/:slug", destination: "/training", permanent: true },
      { source: "/case-studies", destination: "/about", permanent: true },
      { source: "/case-studies/:slug", destination: "/about", permanent: true },
      { source: "/faqs", destination: "/contact", permanent: true },
      { source: "/blog", destination: "/training", permanent: true },
      { source: "/blog/:slug", destination: "/training", permanent: true },
    ];
  },
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
