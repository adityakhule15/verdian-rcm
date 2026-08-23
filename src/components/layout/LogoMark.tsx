import { cn } from "@/lib/cn";
import { LOGO_MARK, LOGO_MARK_COLORS, type LogoMarkVariant } from "@/lib/logoMarkArt";

/**
 * Veridian brand mark — a split-tone “V” on a rounded square.
 * Geometry lives in `logoMarkArt.tsx` so favicons and PNG icons stay identical.
 */
export function LogoMark({
  className,
  variant = "light",
}: {
  className?: string;
  /** light = navy tile (header). dark = teal tile (footer). */
  variant?: LogoMarkVariant;
}) {
  const colors = LOGO_MARK_COLORS[variant];
  const g = LOGO_MARK;

  return (
    <svg
      viewBox={`0 0 ${g.viewBox} ${g.viewBox}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
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
