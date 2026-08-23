/**
 * Form submission check. Drives the real forms in a browser so the server
 * actions, validation, honeypot and success states are exercised end to end.
 *
 *   node scripts/forms.mjs [baseUrl]
 *
 * The run makes more submissions from one IP than the anti-spam limiter allows
 * by default, so start the server with the limit raised:
 *
 *   LEAD_RATE_LIMIT_MAX=100 npm run start
 *
 * To verify the limiter itself, start the server with default limits and run:
 *
 *   node scripts/forms.mjs [baseUrl] --rate-limit
 */
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
const page = await context.newPage();
let failures = 0;

function check(label, ok, detail = "") {
  if (!ok) failures += 1;
  console.log(`${ok ? "PASS" : "FAIL"} ${label}${detail ? ` — ${detail}` : ""}`);
}

// Dedicated mode: confirm repeated submissions get throttled.
if (process.argv.includes("--rate-limit")) {
  await page.goto(`${base}/insights`, { waitUntil: "load" });
  const subscribe = page.locator("form").filter({ has: page.locator('[name="email"]') }).last();
  let limitHit = "";

  for (let attempt = 1; attempt <= 8 && !limitHit; attempt += 1) {
    await subscribe.locator('[name="email"]').fill(`flood-${attempt}@example.com`);
    await subscribe.getByRole("button").first().click();
    await page.waitForTimeout(500);
    const message = (await subscribe.locator('[role="status"]').first().textContent())?.trim() ?? "";
    if (/too many/i.test(message)) limitHit = `after ${attempt} submissions`;
  }

  check("repeated submissions are rate limited", limitHit !== "", limitHit);
  await browser.close();
  console.log(failures === 0 ? "\nRate limiting works." : "\nRate limiting did not engage.");
  process.exit(failures === 0 ? 0 : 1);
}

async function statusText(scope) {
  const status = scope.locator('[role="status"], [role="alert"]').first();
  if ((await status.count()) > 0) return (await status.textContent())?.trim() ?? "";
  return "";
}

/** Successful submissions replace the form with a confirmation panel. */
async function confirmationText(scope) {
  const panel = scope.locator("text=/enquiry received|application received|thank you/i").first();
  if ((await panel.count()) === 0) return "";
  return (await panel.textContent())?.trim() ?? "";
}

// 1. Empty submit surfaces field-level validation, not a server error.
await page.goto(`${base}/contact`, { waitUntil: "load" });
const form = page.locator("form").filter({ has: page.locator('[name="fullName"]') });
await form.getByRole("button", { name: /send enquiry/i }).click();
await page.waitForTimeout(900);
const invalidMessage = await statusText(form);
check("contact form rejects an empty submission", /check the highlighted fields/i.test(invalidMessage), invalidMessage);
check(
  "invalid fields are marked for assistive tech",
  (await form.locator('[aria-invalid="true"]').count()) > 0,
);

// 2. Honeypot submissions are accepted silently, never delivered.
await page.goto(`${base}/contact`, { waitUntil: "load" });
await page.fill('[name="fullName"]', "Bot Submitter");
await page.fill('[name="company"]', "Spam Co");
await page.fill('[name="email"]', "bot@example.com");
await page.fill('[name="message"]', "Buy cheap things at this link.");
await page.check('[name="consent"]');
await page.evaluate(() => {
  document.querySelector('[name="website"]').value = "http://spam.example";
});
await page.getByRole("button", { name: /send enquiry/i }).click();
await page.waitForTimeout(1200);
const honeypotMessage = await confirmationText(page);
check(
  "honeypot submission is absorbed without an error",
  honeypotMessage.length > 0 && (await statusText(page)) === "",
  honeypotMessage,
);

// 3. A valid submission reaches the success state.
await page.goto(`${base}/contact`, { waitUntil: "load" });
await page.fill('[name="fullName"]', "Jane Whitfield");
await page.fill('[name="company"]', "Northside Medical Group");
await page.fill('[name="email"]', "jane@example.com");
await page.fill('[name="phone"]', "+1 555 0100");
await page.fill('[name="message"]', "We need help with aged AR and repeat authorization denials.");
await page.selectOption('[name="organizationType"]', { index: 1 });
await page.selectOption('[name="servicesRequired"]', { index: 1 });
await page.check('[name="consent"]');
await page.getByRole("button", { name: /send enquiry/i }).click();
await page.waitForTimeout(1500);
const contactSuccess = await confirmationText(page);
check("valid contact submission succeeds", /enquiry received/i.test(contactSuccess), contactSuccess);

// 4. Per-service enquiry block on a service page.
await page.goto(`${base}/services/denial-management`, { waitUntil: "load" });
const serviceForm = page.locator("form").filter({ has: page.locator('[name="service"]') });
check("service page carries a lead block", (await serviceForm.count()) > 0);
await serviceForm.locator('[name="fullName"]').fill("Ravi Menon");
await serviceForm.locator('[name="company"]').fill("Lakeside Clinic Group");
await serviceForm.locator('[name="email"]').fill("ravi@example.com");
await serviceForm.locator('[name="message"]').fill("Denials on prior authorization keep repeating.");
await serviceForm.locator('[name="phone"]').fill("+1 555 0110");
// Scoped by the section heading, because the form itself is replaced on success.
const serviceBlock = page.locator('section[aria-labelledby="service-lead-heading"]');
await serviceForm.getByRole("button", { name: /request a consultation/i }).click();
await page.waitForTimeout(1500);
const serviceSuccess = await confirmationText(serviceBlock);
check("service enquiry succeeds", /enquiry received/i.test(serviceSuccess), serviceSuccess);

// 5. Newsletter subscribe.
await page.goto(`${base}/insights`, { waitUntil: "load" });
const newsletter = page.locator("form").filter({ has: page.locator('[name="email"]') }).last();
await newsletter.locator('[name="email"]').fill("subscriber@example.com");
await newsletter.getByRole("button").first().click();
await page.waitForTimeout(1200);
check("newsletter subscribe responds", (await statusText(newsletter)).length > 0, await statusText(newsletter));

// 6. Careers application, including the resume upload field.
await page.goto(`${base}/careers`, { waitUntil: "load" });
const careers = page.locator("form").filter({ has: page.locator('[name="resume"]') });
await careers.locator('[name="fullName"]').fill("Priya Nair");
await careers.locator('[name="email"]').fill("priya@example.com");
await careers.locator('[name="phone"]').fill("+91 90000 00000");
await careers.locator('[name="position"]').selectOption({ index: 1 });
await careers.locator('[name="experience"]').selectOption({ index: 1 });
await careers.locator('[name="resume"]').setInputFiles({
  name: "resume.pdf",
  mimeType: "application/pdf",
  buffer: Buffer.from("%PDF-1.4 placeholder resume"),
});
await careers.getByRole("button", { name: /submit application/i }).click();
await page.waitForTimeout(1500);
const careersMessage = (await confirmationText(page)) || (await statusText(page));
check("careers application succeeds", /application received/i.test(careersMessage), careersMessage);

await browser.close();
console.log(failures === 0 ? "\nAll form checks passed." : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
