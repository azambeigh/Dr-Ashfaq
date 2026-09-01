"use client";

import { Brain, Microscope, NotebookPen, GraduationCap, ArrowUpRight } from "lucide-react";
import { expertise } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const icons = [Brain, Microscope, NotebookPen, GraduationCap];
const tints = ["from-slate-tint to-mint-deep", "from-mint-deep to-slate-tint", "from-slate-tint to-mint-deep", "from-mint-deep to-slate-tint"];

export default function Expertise() {
  return (
    <section id="expertise" className="container-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-medium font-bold uppercase tracking-[0.18em] text-ink-faint">
            Specialties
          </p>
        <Reveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Areas of Expertise
          </h2>
          <p className="max-w-sm text-sm text-ink-soft sm:text-base">
            Focused on the disciplines that connect research, teaching and clinical anatomy.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group card-shadow relative overflow-hidden rounded-[1.75rem] border border-ink/8">
                  <div className={`flex aspect-square items-center justify-center bg-gradient-to-br ${tints[i]}`}>
                    <Icon size={40} className="text-slate-dark transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-slate-dark px-5 py-4">
                    <div>
                      <h3 className="font-display text-sm font-semibold text-cream">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-cream/65">{item.description}</p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/12 text-cream transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={14} />
                    </span>
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
