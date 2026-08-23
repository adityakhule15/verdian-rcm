/**
 * Development smoke check. Fetches every route from the running dev or prod
 * server and reports the status code plus a few content assertions.
 *
 *   node scripts/smoke.mjs [baseUrl]
 */
const base = process.argv[2] ?? "http://localhost:3000";

const routes = [
  "/",
  "/about",
  "/why-choose-us",
  "/quality-and-compliance",
  "/technology",
  "/who-we-serve",
  "/services",
  "/services/medical-coding",
  "/services/revenue-cycle-management",
  "/services/denial-management",
  "/specialties",
  "/specialties/cardiology",
  "/specialties/nephrology",
  "/insights",
  "/insights/why-denials-repeat",
  "/case-studies",
  "/case-studies/improving-coding-accuracy",
  "/faqs",
  "/contact",
  "/careers",
  "/legal/privacy-policy",
  "/legal/terms-and-conditions",
  "/legal/hipaa-security-notice",
  "/legal/cookie-policy",
  "/sitemap.xml",
  "/robots.txt",
  "/medical-coding",
  "/denial-management",
  "/does-not-exist",
];

const expected = new Map([["/does-not-exist", 404]]);

let failures = 0;

for (const route of routes) {
  try {
    const response = await fetch(`${base}${route}`, { redirect: "manual" });
    const want = expected.get(route);
    const ok = want ? response.status === want : response.status === 200 || response.status === 308;
    if (!ok) failures += 1;
    console.log(`${ok ? "PASS" : "FAIL"} ${String(response.status).padEnd(3)} ${route}`);
  } catch (error) {
    failures += 1;
    console.log(`FAIL ERR ${route} — ${error.message}`);
  }
}

const contact = await fetch(`${base}/contact`).then((response) => response.text());
const fields = [
  "fullName",
  "company",
  "email",
  "phone",
  "country",
  "organizationType",
  "servicesRequired",
  "monthlyVolume",
  "currentChallenge",
  "message",
  "consent",
];
const missing = fields.filter((field) => !contact.includes(`name="${field}"`));
if (missing.length) {
  failures += 1;
  console.log(`FAIL contact form missing fields: ${missing.join(", ")}`);
} else {
  console.log(`PASS contact form renders all ${fields.length} fields`);
}

if (!contact.includes('name="website"')) {
  failures += 1;
  console.log("FAIL contact form missing honeypot");
} else {
  console.log("PASS contact form honeypot present");
}

const careers = await fetch(`${base}/careers`).then((response) => response.text());
for (const [label, needle] of [
  ["resume upload field", 'name="resume"'],
  ["honeypot", 'name="website"'],
]) {
  if (careers.includes(needle)) {
    console.log(`PASS careers form ${label} present`);
  } else {
    failures += 1;
    console.log(`FAIL careers form ${label} missing`);
  }
}

const seoChecks = [
  ["/", "Organization JSON-LD", '"@type":"Organization"'],
  ["/", "FAQPage JSON-LD", '"@type":"FAQPage"'],
  ["/", "canonical link", 'rel="canonical"'],
  ["/", "skip link", 'href="#main"'],
  ["/services/medical-coding", "Service JSON-LD", '"@type":"Service"'],
  ["/services/medical-coding", "BreadcrumbList JSON-LD", '"@type":"BreadcrumbList"'],
  ["/services/medical-coding", "og:image", 'property="og:image"'],
  ["/insights/why-denials-repeat", "Article JSON-LD", '"@type":"Article"'],
  ["/legal/privacy-policy", "noindex", "noindex"],
];

for (const [route, label, needle] of seoChecks) {
  const html = await fetch(`${base}${route}`).then((response) => response.text());
  if (html.includes(needle)) {
    console.log(`PASS ${route} — ${label}`);
  } else {
    failures += 1;
    console.log(`FAIL ${route} — ${label}`);
  }
}

const sitemap = await fetch(`${base}/sitemap.xml`).then((response) => response.text());
const urlCount = (sitemap.match(/<loc>/g) ?? []).length;
if (urlCount > 50) {
  console.log(`PASS sitemap lists ${urlCount} URLs`);
} else {
  failures += 1;
  console.log(`FAIL sitemap lists only ${urlCount} URLs`);
}

if (sitemap.includes("/legal/")) {
  failures += 1;
  console.log("FAIL sitemap lists noindex legal pages");
} else {
  console.log("PASS sitemap omits the unreviewed legal pages");
}

console.log(failures === 0 ? "\nAll checks passed." : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
