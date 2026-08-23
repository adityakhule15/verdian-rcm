/**
 * Keyboard and landmark check. Exercises the skip link, the services mega menu
 * and the mobile drawer, and verifies each page has the expected landmarks and
 * exactly one h1.
 *
 *   node scripts/a11y.mjs [baseUrl]
 */
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch();
let failures = 0;

function check(label, ok, detail = "") {
  if (!ok) failures += 1;
  console.log(`${ok ? "PASS" : "FAIL"} ${label}${detail ? ` — ${detail}` : ""}`);
}

const routes = ["/", "/services", "/services/medical-coding", "/about", "/contact", "/careers", "/legal/privacy-policy"];

// Landmarks and heading structure.
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();

  for (const route of routes) {
    await page.goto(`${base}${route}`, { waitUntil: "load" });
    const audit = await page.evaluate(() => ({
      h1s: [...document.querySelectorAll("h1")].map((h) => h.textContent?.trim().slice(0, 40)),
      main: document.querySelectorAll("main#main").length,
      header: document.querySelectorAll("header").length,
      footer: document.querySelectorAll("footer").length,
      unlabelledNavs: [...document.querySelectorAll("nav")].filter(
        (nav) => !nav.getAttribute("aria-label") && !nav.getAttribute("aria-labelledby"),
      ).length,
      imagesWithoutAlt: [...document.querySelectorAll("img")].filter((img) => !img.hasAttribute("alt")).length,
      inputsWithoutLabel: [...document.querySelectorAll("input, select, textarea")].filter((el) => {
        if (el.type === "hidden") return false;
        if (el.getAttribute("aria-label") || el.getAttribute("aria-labelledby")) return false;
        return !(el.id && document.querySelector(`label[for="${el.id}"]`));
      }).length,
      buttonsWithoutName: [...document.querySelectorAll("button")].filter(
        (el) => !el.textContent?.trim() && !el.getAttribute("aria-label"),
      ).length,
      duplicateIds: (() => {
        const seen = new Set();
        const dupes = new Set();
        for (const el of document.querySelectorAll("[id]")) {
          if (seen.has(el.id)) dupes.add(el.id);
          seen.add(el.id);
        }
        return [...dupes];
      })(),
    }));

    check(`${route} single h1`, audit.h1s.length === 1, `found ${audit.h1s.length}`);
    check(`${route} landmarks`, audit.main === 1 && audit.header >= 1 && audit.footer === 1);
    check(`${route} labelled nav regions`, audit.unlabelledNavs === 0, `${audit.unlabelledNavs} unlabelled`);
    check(`${route} images have alt`, audit.imagesWithoutAlt === 0);
    check(`${route} form controls labelled`, audit.inputsWithoutLabel === 0, `${audit.inputsWithoutLabel} unlabelled`);
    check(`${route} buttons named`, audit.buttonsWithoutName === 0);
    check(`${route} ids are unique`, audit.duplicateIds.length === 0, audit.duplicateIds.join(", "));
  }

  // Skip link is the first focus stop and points at main.
  await page.goto(`${base}/`, { waitUntil: "load" });
  await page.keyboard.press("Tab");
  const skip = await page.evaluate(() => {
    const el = document.activeElement;
    return { text: el?.textContent?.trim(), href: el?.getAttribute("href"), visible: el?.getBoundingClientRect().width > 0 };
  });
  check("skip link is first tab stop and visible on focus", skip.href === "#main" && skip.visible === true, skip.text);

  // Mega menu opens, is keyboard reachable, and closes on Escape.
  const trigger = page.getByRole("button", { name: "Services", exact: true });
  await trigger.click();
  const megaVisible = await page
    .locator("header")
    .getByRole("link", { name: "Denial Management" })
    .first()
    .isVisible();
  check("services mega menu opens", megaVisible);
  check("mega menu trigger reports expanded", (await trigger.getAttribute("aria-expanded")) === "true");
  await page.keyboard.press("Escape");
  check("mega menu closes on Escape", (await trigger.getAttribute("aria-expanded")) === "false");

  await context.close();
}

// Mobile drawer.
{
  const context = await browser.newContext({ viewport: { width: 375, height: 800 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: "load" });

  await page.getByRole("button", { name: "Open menu" }).click();
  const dialog = page.getByRole("dialog", { name: "Site menu" });
  check("mobile drawer opens as a labelled dialog", await dialog.isVisible());
  await dialog.getByRole("button", { name: "Revenue Cycle Management" }).click();
  check(
    "drawer service group expands",
    await dialog.getByRole("link", { name: "Denial Management" }).first().isVisible(),
  );
  await page.keyboard.press("Escape");
  check("drawer closes on Escape", (await dialog.count()) === 0);

  await context.close();
}

// Reduced motion leaves content visible.
{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: "load" });
  const hidden = await page.evaluate(
    () => [...document.querySelectorAll(".reveal")].filter((el) => getComputedStyle(el).opacity === "0").length,
  );
  check("reduced motion keeps reveal sections visible", hidden === 0, `${hidden} still transparent`);
  await context.close();
}

await browser.close();
console.log(failures === 0 ? "\nAll accessibility checks passed." : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
