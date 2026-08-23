import { ogContentType, ogSize, renderOgImage } from "@/lib/ogImage";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export const alt = `${site.name} service overview`;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  return renderOgImage({
    title: service?.title ?? site.name,
    subtitle: service?.summary ?? site.tagline,
  });
}
