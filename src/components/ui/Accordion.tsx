"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Faq } from "@/content/faqs";

export function Accordion({ items }: { items: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-panel border border-navy-100 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition hover:bg-navy-50/60 sm:px-7"
              >
                <span className="text-base font-semibold text-navy-900 sm:text-lg">{item.question}</span>
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-700">
                  {isOpen ? <Minus className="size-4" aria-hidden /> : <Plus className="size-4" aria-hidden />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="px-5 pb-6 text-base leading-relaxed text-navy-600 sm:px-7 sm:pr-20">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
