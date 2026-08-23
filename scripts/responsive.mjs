/**
 * Responsive check. Loads key routes at four widths, reports any horizontal
 * overflow and writes screenshots to .screenshots/ for eyeballing.
 *
 *   node scripts/responsive.mjs [baseUrl]
 */
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";
const outDir = ".screenshots";

const viewports = [
  { name: "mobile", width: 375, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1024, height: 900 },
  { name: "desktop", width: 1440, height: 1000 },
];

const routes = [
  { path: "/", slug: "home" },
  { path: "/services", slug: "services" },
  { path: "/services/denial-management", slug: "service-detail" },
  { path: "/specialties/cardiology", slug: "specialty-detail" },
  { path: "/about", slug: "about" },
  { path: "/contact", slug: "contact" },
  { path: "/careers", slug: "careers" },
  { path: "/insights", slug: "insights" },
  { path: "/legal/privacy-policy", slug: "legal" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
let failures = 0;

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  for (const route of routes) {
    await page.goto(`${base}${route.path}`, { waitUntil: "load" });
    // Reveal-on-scroll sections need a pass down the page before capture.
    await page.evaluate(async () => {
      const step = window.innerHeight;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 40));
      }
      window.scrollTo(0, 0);
    });

    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const offenders = [];
      for (const el of document.body.querySelectorAll("*")) {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0) continue;
        // Allow a 1px rounding tolerance.
        if (rect.right > docWidth + 1 || rect.left < -1) {
          const style = getComputedStyle(el);
          // Intentional horizontal scrollers are not overflow bugs.
          if (style.overflowX === "auto" || style.overflowX === "scroll") continue;
          if (el.closest("[data-allow-overflow]")) continue;
          offenders.push(
            `${el.tagName.toLowerCase()}${el.className && typeof el.className === "string" ? `.${el.className.split(" ").slice(0, 3).join(".")}` : ""} (${Math.round(rect.left)} → ${Math.round(rect.right)} of ${docWidth})`,
          );
        }
        if (offenders.length >= 4) break;
      }
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: docWidth,
        offenders,
      };
    });

    const horizontallyScrolls = overflow.scrollWidth > overflow.clientWidth + 1;
    if (horizontallyScrolls) {
      failures += 1;
      console.log(
        `FAIL ${viewport.name.padEnd(7)} ${route.path} — page scrolls horizontally (${overflow.scrollWidth} > ${overflow.clientWidth})`,
      );
      for (const offender of overflow.offenders) console.log(`       ${offender}`);
    } else {
      console.log(`PASS ${viewport.name.padEnd(7)} ${route.path}`);
    }

    await page.screenshot({ path: `${outDir}/${route.slug}-${viewport.name}.png` });
    if (process.argv.includes("--full")) {
      await page.screenshot({
        path: `${outDir}/${route.slug}-${viewport.name}-full.png`,
        fullPage: true,
      });
    }
  }

  await context.close();
}

await browser.close();

console.log(failures === 0 ? "\nNo horizontal overflow found." : `\n${failures} viewport/route combination(s) overflow.`);
process.exit(failures === 0 ? 0 : 1);
