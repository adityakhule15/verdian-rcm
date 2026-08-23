import { ImageResponse } from "next/og";
import { LogoMarkSvg } from "@/lib/logoMarkArt";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogSquareSize = { width: 1200, height: 1200 };
export const ogContentType = "image/png";

const gradient = "linear-gradient(135deg, #08172a 0%, #1c3a5d 55%, #0a6760 100%)";

/**
 * Square card for WhatsApp / iMessage thumbnails (they center-crop og:image).
 * Logo and brand name sit in the middle so the crop shows the mark, not title text.
 */
export function renderOgSquareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          background: gradient,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <LogoMarkSvg size={280} variant="light" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.02em" }}>{site.shortName}</div>
          <div style={{ fontSize: 32, color: "#99e7da", letterSpacing: "0.08em" }}>
            CODING · BILLING · RCM
          </div>
        </div>
      </div>
    ),
    ogSquareSize,
  );
}

/**
 * Wide social card for Facebook, LinkedIn and Twitter large-image previews.
 * Content is centered so a square crop still shows the logo.
 */
export function renderOgImage({
  title = site.shareTitle,
  subtitle = site.shareDescription,
}: { title?: string; subtitle?: string } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: "64px 96px",
          background: gradient,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <LogoMarkSvg size={120} variant="light" />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}>{site.name}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            textAlign: "center",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 44 : 52,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 26, color: "#99e7da", lineHeight: 1.35 }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 22, color: "#c2d8ec" }}>
          <span>Medical Coding</span>
          <span>Revenue Cycle Management</span>
          <span>Healthcare Support</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
