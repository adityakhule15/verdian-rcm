import { renderLogoMarkPng } from "@/lib/logoImage";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Browser tab favicon — same mark as the header logo. */
export default function Icon() {
  return renderLogoMarkPng(32);
}
