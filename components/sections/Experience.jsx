"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="bg-mint-deep py-24 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-5xl">
          <p className="mb-3 text-medium font-bold uppercase tracking-[0.18em] text-ink-faint">
            Career Path
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            <span className="text-slate-dark">16 years</span> of Clinical Training, Leadership and Teaching.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative pl-8 sm:pl-12">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-ink/10 sm:left-[9px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[5px] top-2 w-px origin-top bg-slate-dark sm:left-[9px]"
          />

          <div className="flex flex-col gap-10 sm:gap-12">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.year} delay={i * 0.04} className="relative">
                <span className="absolute -left-8 top-1 flex h-4 w-4 items-center justify-center sm:-left-12">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-dark ring-4 ring-mint-deep" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-dark sm:w-36 sm:text-sm">
                    {item.year}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-soft">
                      {item.org} · {item.location} · {item.duration}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-faint">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
