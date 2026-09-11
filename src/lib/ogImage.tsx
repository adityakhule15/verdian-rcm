import { ImageResponse } from "next/og";
import { LogoMarkSvg } from "@/lib/logoMarkArt";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogSquareSize = { width: 1200, height: 1200 };
export const ogContentType = "image/png";

const gradient = "linear-gradient(135deg, #08172a 0%, #102845 50%, #0a6760 100%)";

/**
 * Square card for WhatsApp / iMessage thumbnails.
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
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.02em" }}>{site.name}</div>
          <div style={{ fontSize: 26, color: "#5ed4c4", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Services · Training · Certifications
          </div>
        </div>
      </div>
    ),
    ogSquareSize,
  );
}

/**
 * Wide social card for Facebook, LinkedIn and Twitter large-image previews.
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
          gap: 36,
          padding: "64px 96px",
          background: gradient,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <LogoMarkSvg size={110} variant="light" />
          <div style={{ fontSize: 46, fontWeight: 800, letterSpacing: "-0.02em" }}>{site.name}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            textAlign: "center",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 40 : 48,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 24, color: "#99e7da", lineHeight: 1.35 }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 20, color: "#c2d8ec" }}>
          <span>Medical Coding Services</span>
          <span>•</span>
          <span>Skill Development (SDP)</span>
          <span>•</span>
          <span>CPC / CCS / CRC Certifications</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
