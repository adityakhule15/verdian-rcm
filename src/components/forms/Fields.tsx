"use client";

import { useId, type ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { FormState } from "@/lib/validation";

const controlClasses =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 shadow-xs transition placeholder:text-navy-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20";

function control(hasError?: boolean) {
  return cn(controlClasses, hasError ? "border-red-400" : "border-navy-200");
}

/**
 * Ids are scoped per field instance rather than taken from the field name, so
 * two forms on the same page (an enquiry form and the footer subscribe form,
 * for example) never collide.
 */
function useFieldIds(name: string, hasError: boolean) {
  const uid = useId();
  const id = `${uid}${name}`;
  return { id, errorId: hasError ? `${id}-error` : undefined };
}

function FieldShell({
  id,
  errorId,
  label,
  hint,
  error,
  required,
  className,
  children,
}: {
  id: string;
  errorId?: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-800">
        {label}
        {required ? (
          <>
            <span aria-hidden className="ml-1 text-red-500">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-navy-500">{hint}</p> : null}
      {error ? (
        <p id={errorId} className="flex items-center gap-1.5 text-xs font-medium text-red-600">
          <AlertCircle className="size-3.5" aria-hidden />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  name,
  label,
  type = "text",
  placeholder,
  required,
  hint,
  autoComplete,
  state,
  className,
}: {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
  hint?: string;
  autoComplete?: string;
  state: FormState;
  className?: string;
}) {
  const error = state.fieldErrors?.[name];
  const { id, errorId } = useFieldIds(name, Boolean(error));

  return (
    <FieldShell
      id={id}
      errorId={errorId}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={state.values?.[name] ?? ""}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={control(Boolean(error))}
      />
    </FieldShell>
  );
}

export function SelectField({
  name,
  label,
  options,
  required,
  placeholder = "Select an option",
  state,
  className,
}: {
  name: string;
  label: string;
  options: readonly string[];
  required?: boolean;
  placeholder?: string;
  state: FormState;
  className?: string;
}) {
  const error = state.fieldErrors?.[name];
  const { id, errorId } = useFieldIds(name, Boolean(error));

  return (
    <FieldShell id={id} errorId={errorId} label={label} error={error} required={required} className={className}>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={state.values?.[name] ?? ""}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={control(Boolean(error))}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function TextAreaField({
  name,
  label,
  rows = 5,
  placeholder,
  required,
  hint,
  state,
  className,
}: {
  name: string;
  label: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  state: FormState;
  className?: string;
}) {
  const error = state.fieldErrors?.[name];
  const { id, errorId } = useFieldIds(name, Boolean(error));

  return (
    <FieldShell
      id={id}
      errorId={errorId}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        defaultValue={state.values?.[name] ?? ""}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(control(Boolean(error)), "resize-y")}
      />
    </FieldShell>
  );
}

export function FileField({
  name,
  label,
  accept,
  hint,
  state,
  className,
}: {
  name: string;
  label: string;
  accept?: string;
  hint?: string;
  state: FormState;
  className?: string;
}) {
  const error = state.fieldErrors?.[name];
  const { id, errorId } = useFieldIds(name, Boolean(error));

  return (
    <FieldShell id={id} errorId={errorId} label={label} hint={hint} error={error} className={className}>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className="w-full rounded-xl border border-dashed border-navy-300 bg-navy-50/60 px-4 py-3 text-sm text-navy-700 file:mr-4 file:rounded-full file:border-0 file:bg-navy-900 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-navy-800"
      />
    </FieldShell>
  );
}

export function CheckboxField({ name, label, state }: { name: string; label: ReactNode; state: FormState }) {
  const error = state.fieldErrors?.[name];
  const { id, errorId } = useFieldIds(name, Boolean(error));

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
        <input
          id={id}
          name={name}
          type="checkbox"
          className="mt-0.5 size-4 rounded border-navy-300 text-navy-900 focus:ring-teal-600/30"
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
        />
        <span>{label}</span>
      </label>
      {error ? (
        <p id={errorId} className="flex items-center gap-1.5 text-xs font-medium text-red-600">
          <AlertCircle className="size-3.5" aria-hidden />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Hidden field bots fill in. Kept out of the tab order and off screen. */
export function Honeypot() {
  const id = `${useId()}website`;

  return (
    <div aria-hidden className="absolute left-[-9999px] top-auto size-px overflow-hidden">
      <label htmlFor={id}>Website</label>
      <input id={id} name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormMessage({ state }: { state: FormState }) {
  if (state.status === "idle" || !state.message) return null;

  const isSuccess = state.status === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4 text-sm",
        isSuccess ? "border-teal-200 bg-teal-50 text-teal-900" : "border-red-200 bg-red-50 text-red-800",
      )}
    >
      {isSuccess ? (
        <CheckCircle2 className="mt-0.5 size-4.5 shrink-0" aria-hidden />
      ) : (
        <AlertCircle className="mt-0.5 size-4.5 shrink-0" aria-hidden />
      )}
      <p className="font-medium">{state.message}</p>
    </div>
  );
}
