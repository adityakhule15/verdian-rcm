"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { submitServiceEnquiry } from "@/lib/actions";
import { initialFormState } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { FormMessage, Honeypot, SelectField, TextAreaField, TextField } from "./Fields";

const volumeBands = [
  "Under 1,000 charts or claims per month",
  "1,000 – 5,000 per month",
  "5,000 – 20,000 per month",
  "Over 20,000 per month",
  "Not sure yet",
];

/** Section 43 — short lead form shown on every service page. */
export function ServiceEnquiryForm({ serviceTitle }: { serviceTitle: string }) {
  const [state, formAction, pending] = useActionState(submitServiceEnquiry, initialFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-panel border border-teal-200 bg-teal-50 p-6">
        <p className="font-display text-lg font-bold text-teal-900">Enquiry received</p>
        <p className="mt-2 text-sm leading-relaxed text-teal-900">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative space-y-5" noValidate>
      <Honeypot />
      <input type="hidden" name="service" value={serviceTitle} />
      <FormMessage state={state} />

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField name="fullName" label="Full name" required autoComplete="name" state={state} />
        <TextField name="company" label="Organization" required autoComplete="organization" state={state} />
        <TextField name="email" label="Work email" type="email" required autoComplete="email" state={state} />
        <TextField name="phone" label="Phone number" type="tel" required autoComplete="tel" state={state} />
        <SelectField
          name="monthlyVolume"
          label="Approximate monthly volume"
          options={volumeBands}
          state={state}
          className="sm:col-span-2"
        />
      </div>

      <TextAreaField
        name="message"
        label="What would you like to change?"
        rows={3}
        placeholder={`Current ${serviceTitle.toLowerCase()} setup, systems in use, and the problem you want solved.`}
        state={state}
      />

      <p className="text-xs leading-relaxed text-navy-500">
        Please do not include patient information. This form is not a secure channel for protected health information.
      </p>

      <Button type="submit" disabled={pending} withArrow={!pending}>
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending
          </>
        ) : (
          "Request a consultation"
        )}
      </Button>
    </form>
  );
}
