export type LogoMarkVariant = "light" | "dark";

/** Shared geometry for the Veridian mark — keep every icon in sync with LogoMark. */
export const LOGO_MARK = {
  viewBox: 32,
  rx: 8,
  leftPath: "M8 10 16 24 16 10Z",
  rightPath: "M16 10 16 24 24 10Z",
  baseline: { x: 9, y: 25, width: 14, height: 2, rx: 1 },
} as const;

export const LOGO_MARK_COLORS: Record<
  LogoMarkVariant,
  { tile: string; leftArm: string; rightArm: string; baseline: string }
> = {
  light: {
    tile: "#102845",
    leftArm: "#ffffff",
    rightArm: "#2dbdab",
    baseline: "#99e7da",
  },
  dark: {
    tile: "#2dbdab",
    leftArm: "#ffffff",
    rightArm: "#08172a",
    baseline: "#08172a",
  },
};

/** Inline SVG for ImageResponse (apple-icon, favicon PNG). */
export function LogoMarkSvg({
  size,
  variant = "light",
}: {
  size: number;
  variant?: LogoMarkVariant;
}) {
  const colors = LOGO_MARK_COLORS[variant];
  const g = LOGO_MARK;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${g.viewBox} ${g.viewBox}`}>
      <rect width="32" height="32" rx={g.rx} fill={colors.tile} />
      <path d={g.leftPath} fill={colors.leftArm} />
      <path d={g.rightPath} fill={colors.rightArm} />
      <rect
        x={g.baseline.x}
        y={g.baseline.y}
        width={g.baseline.width}
        height={g.baseline.height}
        rx={g.baseline.rx}
        fill={colors.baseline}
      />
    </svg>
  );
}
