import { ogContentType, ogSize, renderOgImage } from "@/lib/ogImage";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Healthcare RCM & Medical Coding Services",
    subtitle: site.tagline,
  });
}
