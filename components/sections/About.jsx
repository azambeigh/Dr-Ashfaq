import { doctor, languages } from "@/lib/data";
import ArrowButton from "@/components/ui/ArrowButton";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#e2f0f0] container-px py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.65fr_1fr] lg:gap-16">
        <Reveal direction="right">
          <div className="card-shadow grain relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/8 bg-slate-tint">
            <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full" fill="none">
              <rect x="0" y="0" width="400" height="320" fill="var(--color-slate-tint)" />
              <rect x="36" y="40" width="150" height="98" rx="16" fill="var(--color-cream)" />
              <rect x="52" y="58" width="118" height="8" rx="4" fill="var(--color-slate-light)" />
              <rect x="52" y="76" width="90" height="8" rx="4" fill="var(--color-slate-light)" />
              <rect x="52" y="94" width="70" height="8" rx="4" fill="var(--color-slate-light)" />
              <circle cx="300" cy="90" r="60" fill="var(--color-slate)" fillOpacity="0.55" />
              <path d="M270 96a30 30 0 0 0 60 0" stroke="var(--color-cream)" strokeWidth="3" fill="none" />
              <rect x="40" y="176" width="320" height="110" rx="18" fill="var(--color-slate-dark)" />
              <path
                d="M64 232 h60 l14 -28 l16 56 l14 -40 l12 12 h140"
                stroke="var(--color-cream)"
                strokeOpacity="0.55"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute right-4 top-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-[11px] font-medium text-ink-soft">
              SKIMS · Srinagar
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <p className="mb-3 text-medium font-bold uppercase tracking-[0.18em] text-ink-faint">About</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            An <span className="text-slate-dark">Educator</span> At The Heart of Anatomy.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
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
