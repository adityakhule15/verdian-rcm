import { ImageResponse } from "next/og";

/** Brand mark for favicons and small social thumbnails (PNG). */
export function renderLogoMarkPng(size = 180) {
  const radius = Math.round(size * 0.25);
  const baselineY = Math.round(size * 0.78);
  const baselineW = Math.round(size * 0.44);
  const baselineH = Math.max(2, Math.round(size * 0.06));
  const baselineX = Math.round(size * 0.28);

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#102845",
          borderRadius: radius,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: Math.round(size * 0.22),
            top: Math.round(size * 0.24),
            width: 0,
            height: 0,
            borderLeft: `${Math.round(size * 0.16)}px solid transparent`,
            borderRight: "0 solid transparent",
            borderBottom: `${Math.round(size * 0.34)}px solid #ffffff`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: Math.round(size * 0.5),
            top: Math.round(size * 0.24),
            width: 0,
            height: 0,
            borderLeft: "0 solid transparent",
            borderRight: `${Math.round(size * 0.16)}px solid transparent`,
            borderBottom: `${Math.round(size * 0.34)}px solid #2dbdab`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: baselineX,
            top: baselineY,
            width: baselineW,
            height: baselineH,
            borderRadius: baselineH,
            background: "#99e7da",
          }}
        />
      </div>
    ),
    { width: size, height: size },
  );
}
