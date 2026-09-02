"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { publications } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Publications() {
  const scrollerRef = useRef(null);

  function scroll(dir) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section id="publications" className="container-px py-20 sm:py-24">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-dark p-6 sm:p-10">
        <div className="mb-12 sm:mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream/80">
              Publications
            </p>
            <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-cream sm:text-[40px]">
              Selected Research
            </h2>
            <p className="mt-4 leading-relaxed text-cream/80">
              5 of 135 published works, spanning surgical anatomy, histopathology and clinical case
              studies.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="flex h-11 w-11 group items-center cursor-pointer justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="group-hover:text-slate-dark" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="flex h-11 w-11 group cursor-pointer items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="group-hover:text-slate-dark" />
            </button>
          </div>
        </div>

        <div ref={scrollerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
          {publications.map((pub) => (
            <div
              key={pub.number}
              className="card-shadow flex w-[78vw] shrink-0 snap-start flex-col justify-between rounded-2xl bg-cream p-6 sm:w-84"
            >
              <div>
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-tint text-slate-dark">
                  <FileText size={16} />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-ink-faint">{pub.subtitle}</p>
              </div>
              <p className="mt-6 text-xs font-medium text-ink-faint">Publication No. {pub.number}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
