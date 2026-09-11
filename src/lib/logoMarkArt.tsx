export type LogoMarkVariant = "light" | "dark";

/** Shared geometry for the Ligase Healthcare brand mark */
export const LOGO_MARK = {
  viewBox: 36,
  rx: 9,
} as const;

export const LOGO_MARK_COLORS: Record<
  LogoMarkVariant,
  { tile: string; strokePrimary: string; strokeSecondary: string; dot: string }
> = {
  light: {
    tile: "#08172a",
    strokePrimary: "#ffffff",
    strokeSecondary: "#2dbdab",
    dot: "#5ed4c4",
  },
  dark: {
    tile: "#12a192",
    strokePrimary: "#ffffff",
    strokeSecondary: "#08172a",
    dot: "#ffffff",
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

  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="9" fill={colors.tile} />
      {/* Ligase Interlocking Medical Loop / Helix Node */}
      <path
        d="M10 9V24C10 25.6569 11.3431 27 13 27H26"
        stroke={colors.strokePrimary}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11L26 19M26 11L18 19"
        stroke={colors.strokeSecondary}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="26" cy="27" r="2.2" fill={colors.dot} />
      <circle cx="10" cy="9" r="2.2" fill={colors.dot} />
    </svg>
  );
}
