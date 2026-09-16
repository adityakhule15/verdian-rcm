import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-navy-100 border-b border-navy-900">
      {/* Dynamic background ambient lighting and subtle grid */}
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-[42rem] rounded-full bg-teal-500/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 size-[36rem] rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-teal-300 backdrop-blur-md">
            <Sparkles className="size-3.5 text-teal-300" aria-hidden />
            <span>Healthcare Services · Professional Training · Global Certifications</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Empowering Healthcare. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-white">
              Building Skills.
            </span>{" "}
            Creating Opportunities.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-navy-200">
            Professional Medical Coding Services, Industry-Oriented Training, Final-Semester Internships & Certification Support (CPC, CCS, CRC) — All Under One Healthcare Partner.
          </p>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-center pt-2">
            <ButtonLink
              href="/healthcare-solutions"
              variant="onDark"
              size="lg"
              className="font-bold shadow-lg shadow-teal-500/15 hover:shadow-teal-500/30"
              withArrow
            >
              Explore Our Services
            </ButtonLink>
            <ButtonLink
              href="/careers"
              size="lg"
              className="border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/15 hover:border-white/40 font-semibold"
            >
              Start Your Career
            </ButtonLink>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-6">
            {[
              { title: "Healthcare Services", detail: "Quality Medical Coding & Audits" },
              { title: "Skill Development", detail: "Industry-Oriented SDP Programs" },
              { title: "Career Acceleration", detail: "AAPC / AHIMA Certification Support" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="size-5 text-teal-400 mb-2" aria-hidden />
                <p className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</p>
                <p className="text-xs text-navy-300 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
