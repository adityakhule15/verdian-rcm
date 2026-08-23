"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { submitApplication } from "@/lib/actions";
import { initialFormState } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { jobOpenings } from "@/content/careers";
import { FileField, FormMessage, Honeypot, SelectField, TextAreaField, TextField } from "./Fields";

const experienceBands = ["Fresher", "1–3 years", "4–7 years", "8+ years"];

/** Section 35 — application form. */
export function CareerForm() {
  const [state, formAction, pending] = useActionState(submitApplication, initialFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-panel border border-teal-200 bg-teal-50 p-8">
        <h2 className="font-display text-xl font-bold text-teal-900">Application received</h2>
        <p className="mt-3 text-sm leading-relaxed text-teal-900">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative space-y-6" noValidate>
      <Honeypot />
      <FormMessage state={state} />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField name="fullName" label="Full name" required autoComplete="name" state={state} />
        <TextField name="email" label="Email" type="email" required autoComplete="email" state={state} />
        <TextField name="phone" label="Phone number" type="tel" required autoComplete="tel" state={state} />
        <SelectField
          name="position"
          label="Position applied for"
          options={[...jobOpenings.map((job) => job.title), "Other"]}
          required
          state={state}
        />
        <SelectField name="experience" label="Experience" options={experienceBands} required state={state} />
        <TextField
          name="certifications"
          label="Certifications"
          placeholder="CPC, CCS, CRC…"
          hint="Optional. List coding or RCM certifications you hold."
          state={state}
        />
        <TextField name="noticePeriod" label="Notice period" placeholder="Immediate, 30 days…" state={state} />
      </div>

      <FileField
        name="resume"
        label="Resume"
        accept=".pdf,.doc,.docx"
        hint="PDF, DOC or DOCX, up to 5 MB."
        state={state}
      />

      <TextAreaField
        name="message"
        label="Anything else we should know"
        rows={4}
        placeholder="Specialties you have coded, systems you have worked in, preferred location."
        state={state}
      />

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={pending} withArrow={!pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Submitting
            </>
          ) : (
            "Submit application"
          )}
        </Button>
        <p className="text-xs text-navy-500">Fields marked * are required.</p>
      </div>
    </form>
  );
}
