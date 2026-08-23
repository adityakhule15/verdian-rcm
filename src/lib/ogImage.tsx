import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared social card. Rendered with inline styles because satori (the renderer
 * behind ImageResponse) does not run our Tailwind build.
 */
export function renderOgImage({
  title = site.name,
  subtitle = site.tagline,
}: { title?: string; subtitle?: string } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #08172a 0%, #1c3a5d 55%, #0a6760 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#2dbdab",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#08172a",
            }}
          >
            V
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 58 : 70,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, color: "#99e7da", maxWidth: 900, lineHeight: 1.35 }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#c2d8ec" }}>
          <span>Medical Coding</span>
          <span>Revenue Cycle Management</span>
          <span>Healthcare Support</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
