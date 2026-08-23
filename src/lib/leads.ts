import "server-only";

export type Lead = {
  kind: "contact" | "service-enquiry" | "career" | "newsletter";
  subject: string;
  fields: Record<string, string | undefined>;
  /** Filename only. Resumes are never stored by this application. */
  attachmentName?: string;
};

const inbox = () => process.env.LEAD_INBOX?.trim();
const careersInbox = () => process.env.CAREERS_INBOX?.trim() || inbox();
const apiKey = () => process.env.RESEND_API_KEY?.trim();
const fromAddress = () => process.env.LEAD_FROM_EMAIL?.trim();

function renderPlainText(lead: Lead): string {
  const lines = Object.entries(lead.fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`);

  if (lead.attachmentName) {
    lines.push(`resume (not stored, supplied by applicant): ${lead.attachmentName}`);
  }

  return [lead.subject, "", ...lines].join("\n");
}

/**
 * Single delivery seam for every form on the site.
 *
 * With no email provider configured the submission is validated and logged, so
 * development and review environments work without credentials. Set
 * RESEND_API_KEY, LEAD_FROM_EMAIL and LEAD_INBOX to deliver real email.
 */
export async function sendLead(lead: Lead): Promise<{ delivered: boolean }> {
  const key = apiKey();
  const to = lead.kind === "career" ? careersInbox() : inbox();
  const from = fromAddress();

  if (!key || !to || !from) {
    console.info(`[lead:${lead.kind}] email not configured, logging instead\n${renderPlainText(lead)}`);
    return { delivered: false };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: lead.subject,
      text: renderPlainText(lead),
      reply_to: lead.fields.email,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Lead delivery failed (${response.status}): ${detail.slice(0, 300)}`);
  }

  return { delivered: true };
}
