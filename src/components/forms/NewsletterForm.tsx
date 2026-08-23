"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { subscribeToInsights } from "@/lib/actions";
import { initialFormState } from "@/lib/validation";
import { Honeypot } from "./Fields";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribeToInsights, initialFormState);

  return (
    <form action={formAction} className="space-y-3">
      <div>
        <label htmlFor="newsletter-email" className="text-xs font-bold uppercase tracking-[0.16em] text-white">
          Healthcare insights
        </label>
        <p className="mt-2 text-sm leading-relaxed">
          Coding updates, denial trends and RCM practice notes. No sales sequences.
        </p>
      </div>
      <Honeypot />
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Work email"
          autoComplete="email"
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-navy-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/25"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-400 text-navy-950 transition hover:bg-teal-300 disabled:opacity-60"
          aria-label="Subscribe"
        >
          {pending ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <ArrowRight className="size-4" aria-hidden />
          )}
        </button>
      </div>
      {state.message ? (
        <p
          role="status"
          aria-live="polite"
          className={state.status === "success" ? "text-xs text-teal-300" : "text-xs text-red-300"}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
