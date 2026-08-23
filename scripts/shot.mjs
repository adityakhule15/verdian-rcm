/**
 * Ad-hoc screenshot helper.
 *
 *   node scripts/shot.mjs <url> <cssSelector|page> <outputName> [width]
 */
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const [url, selector = "page", name = "shot", width = "1440"] = process.argv.slice(2);
await mkdir(".screenshots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: Number(width), height: 1000 },
  reducedMotion: "reduce",
});
await page.goto(url, { waitUntil: "load" });

const target = selector === "page" ? page : page.locator(selector);
if (selector !== "page") await target.scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await target.screenshot({ path: `.screenshots/${name}.png` });

await browser.close();
console.log(`.screenshots/${name}.png`);
