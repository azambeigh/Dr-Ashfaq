import { doctor, languages } from "@/lib/data";
import ArrowButton from "@/components/ui/ArrowButton";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#e2f0f0] container-px py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.65fr_1fr]">
        <Reveal direction="right">
          <div className="card-shadow grain relative aspect-4/4.5 overflow-hidden rounded-2xl border border-ink/8 bg-slate-tint">
            <img
              src="/images/dr-ashfaq-about.jpg"
              alt="Dr. Ashfaq ul Hassan speaking at a lecture"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-darker/35 via-transparent to-transparent" />
            <div className="absolute right-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[11px] font-medium text-ink-soft">
              SKIMS · Srinagar
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">About</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-[40px]">
            An <span className="text-slate-dark">Educator</span> At The Heart of Anatomy.
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            {doctor.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {languages.map((lang) => (
              <div key={lang.label} className="text-sm">
                <span className="font-medium text-ink">{lang.label}</span>
                <span className="text-ink-faint"> — {lang.level}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ArrowButton href="#experience" variant="dark">
              More About Me
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
