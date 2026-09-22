"use client";

import { Brain, Microscope, LibraryBig, NotebookPen, GraduationCap, BookOpen, Stethoscope, Award, Globe, ShieldCheck, Landmark, Plane } from "lucide-react";
import { expertise } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const icons = [
  Brain, Microscope, LibraryBig, NotebookPen, GraduationCap, BookOpen, Stethoscope, Award, Globe, ShieldCheck, Landmark, Plane,
];

const images = [
  "/images/expertise-anatomy.jpg",
  "/images/Aboutimg.webp",
  "/images/Expimg3.webp",
  "/images/NEET.webp",
  "/images/expertise-mentorship.webp",
  "/images/neet.jpg",
  "/images/FMGE.jpg",
  "/images/NEETSS.webp",
  "/images/PLAB.jpg",
  "/images/MCRS.webp",
  "/images/ARAB.webp",
  "/images/PLAB.webp",
];

// Reorders the first tile ("Expertise in These Exams") into row 2 of the grid,
// without touching the icon/image index mapping. Values are per-index literal
// Tailwind classes (not template-interpolated) so JIT can pick them up.
const orderClasses = [
  "sm:order-3 lg:order-5",   // i=0 — the solid title tile, pushed to row 2
  "sm:order-1 lg:order-1",
  "sm:order-2 lg:order-2",
  "sm:order-4 lg:order-3",
  "sm:order-5 lg:order-4",
  "sm:order-6 lg:order-6",
  "sm:order-7 lg:order-7",
  "sm:order-8 lg:order-8",
  "sm:order-9 lg:order-9",
  "sm:order-10 lg:order-10",
  "sm:order-11 lg:order-11",
  "sm:order-12 lg:order-12",
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
            Mentor for NEET PG , FMGE, INICET, NEET SS.USMLE, PLAB, MRCS.
          </p>
        </Reveal>

        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => {
            const Icon = icons[i];

            // first card: solid title-only tile, text stacked in 3 lines, site colors
            if (i === 0) {
              return (
                <Reveal key={item.title} delay={i * 0.07} className={orderClasses[i]}>
                  <div className="card-shadow flex h-full flex-col rounded-2xl bg-slate-dark px-6 py-8">
                    <h3 className="font-display text-3xl sm:text-[38px] font-semibold leading-tight text-cream">
                      Expertise
                      <br />
                      in These
                      <br />
                      Exams
                    </h3>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={item.title} delay={i * 0.07} className={orderClasses[i]}>
                <div className="group card-shadow relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-cream">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={images[i]}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-darker/50 via-slate-darker/0 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 px-4 py-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-dark/8 text-slate-dark">
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-ink-soft">{item.description}</p>
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