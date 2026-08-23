import type { Metadata } from "next";
import { site } from "@/content/site";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.shortName} — medical coding, billing and revenue cycle management`,
  type: "image/png" as const,
};

/** Shared Open Graph / Twitter fields used on the homepage and inner pages. */
export const socialMetadata = {
  openGraph: {
    type: "website" as const,
    siteName: site.name,
    locale: site.locale,
    title: site.shareTitle,
    description: site.shareDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: site.shareTitle,
    description: site.shareDescription,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `Healthcare RCM & Medical Coding Services | ${site.name}`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    ...socialMetadata,
    openGraph: {
      ...socialMetadata.openGraph,
      url: site.url,
    },
    robots: { index: true, follow: true },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}
