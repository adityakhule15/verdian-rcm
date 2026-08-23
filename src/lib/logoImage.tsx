import { ImageResponse } from "next/og";
import { LogoMarkSvg, type LogoMarkVariant } from "./logoMarkArt";

/** PNG app icon generated from the same SVG paths as the header LogoMark. */
export function renderLogoMarkPng(size: number, variant: LogoMarkVariant = "light") {
  return new ImageResponse(<LogoMarkSvg size={size} variant={variant} />, {
    width: size,
    height: size,
  });
}
