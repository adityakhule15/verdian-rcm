"use server";

import { site } from "@/content/site";
import { sendLead } from "./leads";
import { clientKey, isHoneypotTripped, isRateLimited } from "./rateLimit";
import {
  careerSchema,
  contactSchema,
  newsletterSchema,
  readFormValues,
  serviceEnquirySchema,
  toFieldErrors,
  type FormState,
} from "./validation";

const GENERIC_ERROR = "Something went wrong sending your message. Please try again, or email us directly.";
const RATE_LIMITED = "Too many submissions from this connection. Please try again shortly.";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

async function guard(formData: FormData): Promise<FormState | null> {
  if (isHoneypotTripped(formData)) {
    // Report success to the bot rather than revealing the check.
    return { status: "success", message: "Thank you. Your enquiry has been received." };
  }
  if (isRateLimited(await clientKey())) {
    return { status: "error", message: RATE_LIMITED, values: readFormValues(formData) };
  }
  return null;
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const blocked = await guard(formData);
  if (blocked) return blocked;

  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error),
      values: readFormValues(formData),
    };
  }

  const { consent, ...rest } = parsed.data;
  // Consent is recorded with the lead so there is an audit trail of it.
  const fields = { ...rest, consentGiven: consent ? "Yes" : "No" };

  try {
    await sendLead({
      kind: "contact",
      subject: `Website enquiry — ${fields.company}`,
      fields,
    });
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return { status: "error", message: GENERIC_ERROR, values: readFormValues(formData) };
  }

  return {
    status: "success",
    message: `Thank you for contacting ${site.name}. Our team will review your enquiry and get back to you shortly.`,
  };
}

export async function submitServiceEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const blocked = await guard(formData);
  if (blocked) return blocked;

  const parsed = serviceEnquirySchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error),
      values: readFormValues(formData),
    };
  }

  try {
    await sendLead({
      kind: "service-enquiry",
      subject: `Service enquiry — ${parsed.data.service ?? "general"} — ${parsed.data.company}`,
      fields: parsed.data,
    });
  } catch (error) {
    console.error("[service-enquiry] delivery failed", error);
    return { status: "error", message: GENERIC_ERROR, values: readFormValues(formData) };
  }

  return { status: "success", message: "Thank you. Our team will be in touch shortly." };
}

export async function submitApplication(_prev: FormState, formData: FormData): Promise<FormState> {
  const blocked = await guard(formData);
  if (blocked) return blocked;

  const parsed = careerSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: toFieldErrors(parsed.error),
      values: readFormValues(formData),
    };
  }

  const resume = formData.get("resume");
  let attachmentName: string | undefined;

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return {
        status: "error",
        message: "Please attach a resume under 5 MB.",
        fieldErrors: { resume: "File is larger than 5 MB." },
        values: readFormValues(formData),
      };
    }
    if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
      return {
        status: "error",
        message: "Please attach a PDF or Word document.",
        fieldErrors: { resume: "Only PDF, DOC and DOCX files are accepted." },
        values: readFormValues(formData),
      };
    }
    attachmentName = resume.name;
  }

  try {
    await sendLead({
      kind: "career",
      subject: `Application — ${parsed.data.position} — ${parsed.data.fullName}`,
      fields: parsed.data,
      attachmentName,
    });
  } catch (error) {
    console.error("[careers] delivery failed", error);
    return { status: "error", message: GENERIC_ERROR, values: readFormValues(formData) };
  }

  return {
    status: "success",
    message:
      "Thank you for applying. Our talent team reviews every application and will contact you if there is a match.",
  };
}

export async function subscribeToInsights(_prev: FormState, formData: FormData): Promise<FormState> {
  const blocked = await guard(formData);
  if (blocked) return blocked;

  const parsed = newsletterSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    await sendLead({
      kind: "newsletter",
      subject: "Insights subscription request",
      fields: parsed.data,
    });
  } catch (error) {
    console.error("[newsletter] delivery failed", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success", message: "You are on the list. Look out for our next healthcare insights update." };
}
