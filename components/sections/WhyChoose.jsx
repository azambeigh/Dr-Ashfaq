import { GraduationCap, ShieldCheck, BookOpen, HeartHandshake } from "lucide-react";
import { whyChoose } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const icons = [GraduationCap, ShieldCheck, BookOpen, HeartHandshake];

export default function WhyChoose() {
  return (
    <section className="container-px py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">Experience & Impact</p>
        <Reveal className="mb-12 sm:mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-[40px]">
            Why <span className="text-slate-dark">Work </span> With Me
          </h2>
          <p className="max-w-md text-ink-soft leading-relaxed">
            Trusted medical education focused on clarity, evidence and long-term academic growth.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card-shadow flex h-full flex-col gap-6 rounded-2xl bg-slate-dark px-4 py-6 text-cream">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream/12">
                    <Icon size={19} className="shrink-0" />
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-lg font-medium">{item.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-cream/75">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
