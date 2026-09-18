import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogSquareSize = { width: 1200, height: 1200 };
export const ogContentType = "image/png";

const gradient = "linear-gradient(135deg, #0a1a2e 0%, #152c48 45%, #226d9c 78%, #ec8229 100%)";

async function loadLogoMarkSrc() {
  const data = await readFile(join(process.cwd(), "public/logo-mark.png"));
  return `data:image/png;base64,${data.toString("base64")}`;
}

/**
 * Square card for WhatsApp / iMessage thumbnails.
 */
export async function renderOgSquareImage() {
  const markSrc = await loadLogoMarkSrc();

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 280,
            height: 280,
            borderRadius: 48,
            background: "#ffffff",
            padding: 36,
          }}
        >
          <img src={markSrc} width={208} height={208} alt="" />
        </div>
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
          <div style={{ fontSize: 26, color: "#7bc0e5", letterSpacing: "0.12em", textTransform: "uppercase" }}>
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
export async function renderOgImage({
  title = site.shareTitle,
  subtitle = site.shareDescription,
}: { title?: string; subtitle?: string } = {}) {
  const markSrc = await loadLogoMarkSrc();

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 110,
              height: 110,
              borderRadius: 24,
              background: "#ffffff",
              padding: 14,
            }}
          >
            <img src={markSrc} width={82} height={82} alt="" />
          </div>
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
          <div style={{ fontSize: 24, color: "#aed9f1", lineHeight: 1.35 }}>{subtitle}</div>
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
