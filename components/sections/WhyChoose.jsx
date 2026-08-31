import { GraduationCap, ShieldCheck, BookOpen, HeartHandshake } from "lucide-react";
import { whyChoose } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const icons = [GraduationCap, ShieldCheck, BookOpen, HeartHandshake];

export default function WhyChoose() {
  return (
    <section className="container-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Why Work With Me
          </h2>
          <p className="max-w-sm text-sm text-ink-soft sm:text-base">
            Trusted medical education focused on clarity, evidence and long-term academic growth.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card-shadow flex h-full flex-col gap-6 rounded-[1.75rem] bg-slate-dark p-6 text-cream">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/12">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-cream/75">{item.description}</p>
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
