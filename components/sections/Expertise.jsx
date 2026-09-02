"use client";

import { Brain, Microscope, NotebookPen, GraduationCap, ArrowUpRight } from "lucide-react";
import { expertise } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const icons = [Brain, Microscope, NotebookPen, GraduationCap];
const images = [
  "/images/expertise-anatomy.jpg",
  "/images/expertise-histology.jpg",
  "/images/expertise-curriculum.jpg",
  "/images/expertise-mentorship.jpg",
];

export default function Expertise() {
  return (
    <section id="expertise" className="container-px py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Specialties
          </p>
        <Reveal className="mb-12 sm:mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-[40px]">
            Areas of <span className="text-slate-dark">Expertise</span>
          </h2>
          <p className="max-w-md text-ink-soft leading-relaxed">
            Focused on the disciplines that connect research, teaching and clinical anatomy.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="group card-shadow relative overflow-hidden rounded-2xl border border-ink/8">
                  <div className="relative aspect-3/2.5 overflow-hidden">
                    <img
                      src={images[i]}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-darker/50 via-slate-darker/0 to-transparent" />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cream/90 text-slate-dark backdrop-blur">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 bg-slate-dark px-4 py-6">
                      <h3 className="font-display font-semibold text-cream">{item.title}</h3>
                    <div className="flex items-center justify-between gap-3">
                      <p className="mt-1 text-xs leading-relaxed text-cream/65">{item.description}</p>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream/12 text-cream transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={14} />
                    </span>
                    </div>
                    
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
