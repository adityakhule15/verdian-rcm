"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Loader2, Send } from "lucide-react";
import { submitContact } from "@/lib/actions";
import { initialFormState } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import {
  CheckboxField,
  FormMessage,
  Honeypot,
  SelectField,
  TextAreaField,
  TextField,
} from "./Fields";

const interestOptions = [
  "Medical Coding Services",
  "Training Programs",
  "Internship",
  "Certification Support",
  "Career Opportunities",
  "General Enquiry",
];

/** PDF Section 20 — Contact Form */
export function ContactForm({ defaultInterest }: { defaultInterest?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialFormState);

  if (state.status === "success") {
    return (
      <div className="rounded-3xl border border-teal-200 bg-teal-50 p-8 text-center sm:p-10">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-teal-600 text-white mb-4">
          <Send className="size-6" />
        </span>
        <h2 className="font-display text-2xl font-bold text-teal-950">Enquiry Received</h2>
        <p className="mt-3 text-sm leading-relaxed text-teal-900 max-w-md mx-auto">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative space-y-5" noValidate>
      <Honeypot />
      <FormMessage state={state} />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          name="fullName"
          label="Full Name"
          required
          autoComplete="name"
          placeholder="e.g. Rahul Sharma / Sarah Jenkins"
          state={state}
        />
        <TextField
          name="email"
          label="Email Address"
          type="email"
          required
          autoComplete="email"
          placeholder="name@example.com"
          state={state}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          name="phone"
          label="Phone Number"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+91 98765 43210"
          state={state}
        />
        <SelectField
          name="interest"
          label="I am interested in"
          options={interestOptions}
          placeholder={defaultInterest ?? "Select your interest area"}
          state={state}
        />
      </div>

      <TextAreaField
        name="message"
        label="Message"
        rows={4}
        required
        placeholder="How can Ligase Healthcare help you? Tell us about your requirement or question."
        state={state}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Button type="submit" size="lg" disabled={pending} withArrow={!pending} className="w-full sm:w-auto">
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Submitting...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </Button>
        <p className="text-xs text-navy-500">Fields marked * are required.</p>
      </div>
    </form>
  );
}
