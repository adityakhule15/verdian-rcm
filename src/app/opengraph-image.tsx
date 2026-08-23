import { ogContentType, ogSize, renderOgImage } from "@/lib/ogImage";
import { site } from "@/content/site";

export const alt = site.shareTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: site.shareTitle,
    subtitle: site.shareDescription,
  });
}
