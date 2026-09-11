import { cn } from "@/lib/cn";
import { LOGO_MARK_COLORS, type LogoMarkVariant } from "@/lib/logoMarkArt";

export function LogoMark({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: LogoMarkVariant;
}) {
  const colors = LOGO_MARK_COLORS[variant];

  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="36" height="36" rx="9" fill={colors.tile} />
      {/* Modern Ligase 'L' + Healthcare Cross/Helix intersection */}
      <path
        d="M11 9V24C11 25.6569 12.3431 27 14 27H26"
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
      <circle cx="11" cy="9" r="2.2" fill={colors.dot} />
    </svg>
  );
}
