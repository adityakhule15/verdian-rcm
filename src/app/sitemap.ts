import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";
import { insights } from "@/content/insights";
import { caseStudies } from "@/content/caseStudies";

/**
 * Legal pages are deliberately absent: they ship `noindex` until counsel
 * approves them, and listing a noindex page contradicts that. Add them here
 * once the review banner comes off.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/specialties", priority: 0.8, changeFrequency: "monthly" },
    { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/quality-and-compliance", priority: 0.7, changeFrequency: "monthly" },
    { path: "/technology", priority: 0.6, changeFrequency: "monthly" },
    { path: "/who-we-serve", priority: 0.6, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.6, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...specialties.map((specialty) => ({
      url: absoluteUrl(`/specialties/${specialty.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((insight) => ({
      url: absoluteUrl(`/insights/${insight.slug}`),
      lastModified: new Date(insight.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
