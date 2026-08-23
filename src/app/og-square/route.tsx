import { renderOgSquareImage } from "@/lib/ogImage";

/** Square link-preview image — listed first in og:image for WhatsApp thumbnails. */
export async function GET() {
  return renderOgSquareImage();
}
