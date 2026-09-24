"use client";

import { Brain, Microscope, LibraryBig, NotebookPen, GraduationCap, BookOpen, Stethoscope, Award, Globe, ShieldCheck, Landmark, Plane } from "lucide-react";
import { expertise } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const icons = [
  Brain, Microscope, LibraryBig, NotebookPen, GraduationCap, BookOpen, Stethoscope, Award, Globe, ShieldCheck, Landmark, Plane,
];

const images = [
  "/images/expertise-anatomy.jpg",
  "/images/Excel.jpg",
  "/images/Expimg3.webp",
  "/images/NEET.webp",
  "/images/expertise-mentorship.webp",
  "/images/NEETPG.webp",
  "/images/FMGE.webp",
  "/images/NEETSS.webp",
  "/images/USMLE.png",
  "/images/MCRS.webp",
  "/images/ARABB.webp",
  "/images/PLAB.webp",
];

// Base `order-*` (no breakpoint prefix) applies at ALL screen sizes,
// so the visual order stays identical on mobile, sm, and lg.
const orderClasses = [
  "order-1",   // i=0  -> pos 1
  "order-9",   // i=1  -> pos 9
  "order-10",  // i=2  -> pos 10
  "order-11",  // i=3  -> pos 11
  "order-12",  // i=4  -> pos 12
  "order-6",   // i=5  -> pos 6
  "order-7",   // i=6  -> pos 7
  "order-8",   // i=7  -> pos 8
  "order-2",   // i=8  -> pos 2
  "order-3",   // i=9  -> pos 3
  "order-4",   // i=10 -> pos 4
  "order-5",   // i=11 -> pos 5
];

export default function Expertise() {
  return (
    <section id="expertise" className="container-px py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-dark/80">
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

            // first card: image-only tile, no text/icon
            if (i === 0) {
              return (
                <Reveal key={item.title} delay={i * 0.07} className={orderClasses[i]}>
                  <div className="card-shadow relative overflow-hidden rounded-2xl h-90 md:h-93 lg:h-77 ">
                    <img
                      src="/images/ExpertCard.png"
                      alt="Expertise in these exams"
                      className="h-full w-full object-cover xs:object-fill lg:object-cover object-top "
                    />
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
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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