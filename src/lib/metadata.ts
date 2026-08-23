import type { Metadata } from "next";
import { site } from "@/content/site";

/** Absolute URLs so crawlers (WhatsApp, iMessage) never hit SSO-protected deploy hosts. */
const ogSquareUrl = `${site.url}/og-square`;
const ogImageUrl = `${site.url}/opengraph-image`;
const twitterImageUrl = `${site.url}/twitter-image`;
const iconUrl = `${site.url}/icon`;
const appleIconUrl = `${site.url}/apple-icon`;

const ogSquareImage = {
  url: ogSquareUrl,
  width: 1200,
  height: 1200,
  alt: `${site.shortName} logo — medical coding and revenue cycle management`,
  type: "image/png" as const,
};

const ogImage = {
  url: ogImageUrl,
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
    /** Square image first — WhatsApp center-crops og:image for the chat thumbnail. */
    images: [ogSquareImage, ogImage],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: site.shareTitle,
    description: site.shareDescription,
    images: [twitterImageUrl],
  },
  icons: {
    icon: [
      { url: iconUrl, sizes: "32x32", type: "image/png" },
      { url: appleIconUrl, sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: appleIconUrl, sizes: "180x180", type: "image/png" }],
    shortcut: iconUrl,
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
