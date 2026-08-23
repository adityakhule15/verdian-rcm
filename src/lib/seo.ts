import type { Metadata } from "next";
import { site } from "@/content/site";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.contact.email,
    telephone: site.contact.phone,
    sameAs: [site.contact.linkedin],
    address: site.offices.map((office) => ({
      "@type": "PostalAddress",
      name: office.label,
      streetAddress: office.lines[0],
      addressLocality: office.lines[1],
      addressCountry: office.lines[office.lines.length - 1],
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.contact.phone,
        email: site.contact.email,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(path),
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "Audience", audienceType: "Healthcare providers and organizations" },
  };
}

export function faqSchema(faqs: ReadonlyArray<{ question: string; answer: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: ReadonlyArray<{ label: string; path: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  publishedAt,
  author,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  author: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    url: absoluteUrl(path),
    author: { "@type": "Organization", name: author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}
