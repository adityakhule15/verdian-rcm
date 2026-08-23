/**
 * Renders JSON-LD structured data. Next.js recommends a plain script tag for
 * this; the payload is built server-side from typed content, never user input.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
