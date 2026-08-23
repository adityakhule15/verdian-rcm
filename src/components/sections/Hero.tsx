import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

const heroStages = [
  { label: "Eligibility & authorization", state: "Verified before service", icon: "shieldCheck" as const },
  { label: "Documentation & coding", state: "QA reviewed before release", icon: "fileCheck" as const },
  { label: "Claim submission", state: "Scrubbed against payer edits", icon: "send" as const },
  { label: "Payment & denials", state: "Worked by value and cause", icon: "banknote" as const },
];

/**
 * Section 4 — hero.
 *
 * The visual is drawn in code rather than using stock photography, which the
 * website script explicitly rules out. It shows the revenue cycle as a
 * controlled process without asserting any performance figures.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[38rem] rounded-full bg-teal-500/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 size-[30rem] rounded-full bg-navy-500/20 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-24">
        <Reveal className="space-y-7">
          <Eyebrow tone="dark">Healthcare Revenue Cycle Management</Eyebrow>

          <h1 className="text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-[3.4rem]">
            Transforming healthcare revenue through accuracy, expertise and technology
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-navy-200">
            We help hospitals, physician practices, clinics, diagnostic centers and healthcare organizations streamline
            medical coding, billing and revenue cycle operations — improving accuracy, reducing denials and accelerating
            reimbursement.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.cta.primary.href} variant="onDark" size="lg" withArrow>
              {site.cta.primary.label}
            </ButtonLink>
            <ButtonLink
              href="/services"
              size="lg"
              className="border border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              Explore our services
            </ButtonLink>
          </div>

          <dl className="grid gap-x-8 gap-y-4 border-t border-white/10 pt-7 sm:grid-cols-3">
            {[
              { term: "Coverage", detail: "Coding, billing and full-cycle RCM" },
              { term: "Model", detail: "Specialty-aligned delivery teams" },
              { term: "Reporting", detail: "Agreed metrics, fixed cadence" },
            ].map((item) => (
              <div key={item.term}>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">{item.term}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-navy-200">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="rounded-panel border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Revenue cycle control</p>
                <p className="mt-1.5 font-display text-lg font-bold text-white">One process, four checkpoints</p>
              </div>
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                <Icon name="workflow" className="size-5" />
              </span>
            </div>

            <ol className="mt-6 space-y-3">
              {heroStages.map((stage, index) => (
                <li
                  key={stage.label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3.5"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-teal-300">
                    <Icon name={stage.icon} className="size-4.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{stage.label}</p>
                    <p className="mt-0.5 text-xs text-navy-300">{stage.state}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/[0.07] px-2.5 py-1 text-[0.6875rem] font-bold text-navy-200">
                    Step {index + 1}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-6 rounded-xl bg-teal-400/10 px-4 py-3.5 text-xs leading-relaxed text-teal-100">
              Every checkpoint is documented, measured and reported. Where a figure appears on this site, it is a figure
              we can evidence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
