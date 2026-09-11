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
  .string({ error: "Email address is required." })
  .trim()
  .min(1, "Email address is required.")
  .max(160, "Email is too long.")
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address.");

/** PDF Section 20 — Contact Form Schema */
export const contactSchema = z.object({
  fullName: trimmed(2, 120, "Full Name"),
  email,
  phone: trimmed(6, 40, "Phone Number"),
  interest: z.enum(
    [
      "Medical Coding Services",
      "Training Programs",
      "Internship",
      "Certification Support",
      "Career Opportunities",
      "General Enquiry",
    ],
    { error: "Please select an interest area." },
  ),
  message: trimmed(5, 3000, "Message"),
  consent: z.literal("on", { message: "Please confirm you agree to be contacted." }).optional(),
});

export const serviceEnquirySchema = z.object({
  fullName: trimmed(2, 120, "Full Name"),
  email,
  phone: trimmed(6, 40, "Phone Number"),
  service: optionalText(120),
  message: optionalText(2000),
});

export const careerSchema = z.object({
  fullName: trimmed(2, 120, "Full Name"),
  email,
  phone: trimmed(6, 40, "Phone Number"),
  position: trimmed(2, 120, "Position"),
  experience: trimmed(1, 60, "Experience"),
  certifications: optionalText(160),
  message: optionalText(2000),
});

export const newsletterSchema = z.object({ email });

export type FieldErrors = Record<string, string>;

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: FieldErrors;
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

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
