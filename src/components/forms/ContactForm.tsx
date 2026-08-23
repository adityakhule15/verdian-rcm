"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { submitContact } from "@/lib/actions";
import { initialFormState } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import {
  CheckboxField,
  FormMessage,
  Honeypot,
  SelectField,
  TextAreaField,
  TextField,
} from "./Fields";

const organizationTypes = [
  "Hospital",
  "Physician practice",
  "Multi-specialty group",
  "Diagnostic center",
  "Ambulatory surgery center",
  "Telehealth provider",
  "Billing company",
  "Other",
];

const volumeBands = [
  "Under 1,000 charts or claims per month",
  "1,000 – 5,000 per month",
  "5,000 – 20,000 per month",
  "Over 20,000 per month",
  "Not sure yet",
];

/** Section 34 — the full enquiry form. */
export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-panel border border-teal-200 bg-teal-50 p-8">
        <h2 className="font-display text-xl font-bold text-teal-900">Enquiry received</h2>
        <p className="mt-3 text-sm leading-relaxed text-teal-900">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative space-y-6" noValidate>
      <Honeypot />
      <FormMessage state={state} />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          name="fullName"
          label="Full name"
          required
          autoComplete="name"
          placeholder="Jane Whitfield"
          state={state}
        />
        <TextField
          name="company"
          label="Organization name"
          required
          autoComplete="organization"
          placeholder="Northside Medical Group"
          state={state}
        />
        <TextField
          name="email"
          label="Work email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@organization.com"
          state={state}
        />
        <TextField
          name="phone"
          label="Phone number"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+1 000 000 0000"
          state={state}
        />
        <TextField name="country" label="Country" autoComplete="country-name" placeholder="United States" state={state} />
        <SelectField name="organizationType" label="Organization type" options={organizationTypes} state={state} />
        <SelectField
          name="servicesRequired"
          label="Services required"
          options={services.map((service) => service.title)}
          placeholder={defaultService ?? "Select a service"}
          state={state}
          className="sm:col-span-2"
        />
        <SelectField
          name="monthlyVolume"
          label="Approximate monthly volume"
          options={volumeBands}
          state={state}
          className="sm:col-span-2"
        />
      </div>

      <TextAreaField
        name="currentChallenge"
        label="Current challenge"
        rows={3}
        placeholder="Aged AR, repeat denials, coding backlog, authorization failures…"
        state={state}
      />

      <TextAreaField
        name="message"
        label="Message"
        rows={5}
        required
        placeholder="Tell us about your systems, specialties and what you would like to change."
        state={state}
      />

      <CheckboxField
        name="consent"
        label={
          <>
            I agree to be contacted about this enquiry and have read the{" "}
            <Link href="/legal/privacy-policy" className="font-semibold text-teal-700 underline">
              privacy policy
            </Link>
            . Please do not include patient information in this form.
          </>
        }
        state={state}
      />

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={pending} withArrow={!pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending
            </>
          ) : (
            "Send enquiry"
          )}
        </Button>
        <p className="text-xs text-navy-500">Fields marked * are required.</p>
      </div>
    </form>
  );
}
