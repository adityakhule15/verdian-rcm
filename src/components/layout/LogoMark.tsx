import { cn } from "@/lib/cn";

/**
 * Veridian brand mark — a split-tone “V” on a rounded square.
 *
 * The left arm reads as clarity (white on navy), the right as revenue growth
 * (teal). The baseline bar is the audit checkpoint the tagline promises.
 * Works from favicon size up to header scale.
 */
export function LogoMark({
  className,
  variant = "light",
}: {
  className?: string;
  /** light = navy tile (header). dark = teal tile (footer). */
  variant?: "light" | "dark";
}) {
  const tile = variant === "dark" ? "#2dbdab" : "#102845";
  const leftArm = "#ffffff";
  const rightArm = variant === "dark" ? "#08172a" : "#2dbdab";
  const baseline = variant === "dark" ? "#08172a" : "#99e7da";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill={tile} />
      <path d="M8 10 16 24 16 10Z" fill={leftArm} />
      <path d="M16 10 16 24 24 10Z" fill={rightArm} />
      <rect x="9" y="25" width="14" height="2" rx="1" fill={baseline} />
    </svg>
  );
}
