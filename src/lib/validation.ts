import { z } from "zod";

const trimmed = (min: number, max: number, label: string) =>
  z
    .string({ error: `${label} is required.` })
    .trim()
    .min(min, `${label} is required.`)
    .max(max, `${label} is too long.`);

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, "This field is too long.")
    .optional()
    .transform((value) => (value === "" ? undefined : value));

const email = z
  .string({ error: "Work email is required." })
  .trim()
  .min(1, "Work email is required.")
  .max(160, "Email is too long.")
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address.");

/** Section 34 — contact form fields. */
export const contactSchema = z.object({
  fullName: trimmed(2, 120, "Full name"),
  company: trimmed(2, 160, "Organization name"),
  email,
  phone: trimmed(6, 40, "Phone number"),
  country: optionalText(80),
  organizationType: optionalText(80),
  servicesRequired: optionalText(200),
  monthlyVolume: optionalText(80),
  currentChallenge: optionalText(600),
  message: trimmed(10, 3000, "Message"),
  consent: z.literal("on", { message: "Please confirm you agree to be contacted." }),
});

/** Section 43 — shorter per-service lead form. */
export const serviceEnquirySchema = z.object({
  fullName: trimmed(2, 120, "Full name"),
  company: trimmed(2, 160, "Organization name"),
  email,
  phone: trimmed(6, 40, "Phone number"),
  service: optionalText(120),
  monthlyVolume: optionalText(80),
  message: optionalText(2000),
});

/** Section 35 — careers application. */
export const careerSchema = z.object({
  fullName: trimmed(2, 120, "Full name"),
  email,
  phone: trimmed(6, 40, "Phone number"),
  position: trimmed(2, 120, "Position"),
  experience: trimmed(1, 60, "Experience"),
  certifications: optionalText(160),
  noticePeriod: optionalText(80),
  message: optionalText(2000),
});

export const newsletterSchema = z.object({ email });

export type FieldErrors = Record<string, string>;

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: FieldErrors;
  /** Echoed back so a failed submission does not wipe what was typed. */
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

/**
 * Maps zod issues to a flat `field -> first message` record. Written by hand
 * rather than using a zod helper so it stays stable across zod minor versions.
 */
export function toFieldErrors(error: z.ZodError): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}

export function readFormValues(formData: FormData): Record<string, string> {
  const values: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && !key.startsWith("$ACTION") && key !== "consent") {
      values[key] = value;
    }
  }
  return values;
}
