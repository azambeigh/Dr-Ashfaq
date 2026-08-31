"use client";

import { motion } from "framer-motion";
import { Sparkles, Stethoscope, GraduationCap, BookMarked } from "lucide-react";
import { doctor, badges } from "@/lib/data";
import ArrowButton from "@/components/ui/ArrowButton";

const floatBadges = [
  {
    icon: GraduationCap,
    label: badges[0],
    className: "left-0 top-[6%] sm:-left-6 sm:top-[10%]",
    delay: 0,
  },
  {
    icon: Sparkles,
    label: badges[1],
    className: "right-0 top-[46%] sm:-right-10 sm:top-[42%]",
    delay: 0.35,
  },
  {
    icon: BookMarked,
    label: badges[3],
    className: "left-[6%] -bottom-5 sm:-left-10 sm:-bottom-6",
    delay: 0.7,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-32 md:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(20,24,27,0.05) 0px, rgba(20,24,27,0.05) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="container-px relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-1.5 text-xs font-medium text-ink-soft sm:mb-10"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-dark" />
          {doctor.title} · {doctor.org}
        </motion.p>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display text-[13vw] font-semibold leading-[0.98] tracking-tight sm:text-[8.5vw] lg:text-[4.7vw]"
          >
            <span className="block bg-gradient-to-b from-ink to-ink/30 bg-clip-text text-transparent">
              Meet Dr.
            </span>
            <span className="block bg-gradient-to-b from-ink to-ink/30 bg-clip-text text-transparent">
              Ashfaq Ul
            </span>
            <span className="block bg-gradient-to-b from-ink to-ink/30 bg-clip-text text-transparent">
              Hassan
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative mx-auto aspect-[4/5] w-[58vw] max-w-[260px] justify-self-center sm:w-[38vw] lg:w-[23vw] lg:max-w-[320px]"
          >
            <div className="card-shadow grain relative h-full w-full overflow-hidden rounded-[2rem] border border-ink/8 bg-gradient-to-b from-slate-tint to-mint-deep">
              <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" fill="none">
                <circle cx="100" cy="88" r="42" fill="var(--color-slate-light)" fillOpacity="0.5" />
                <path
                  d="M40 236c0-46 26.9-84 60-84s60 38 60 84"
                  fill="var(--color-slate)"
                  fillOpacity="0.55"
                />
                <circle cx="128" cy="150" r="5" fill="var(--color-slate-darker)" />
                <path
                  d="M128 150v22a10 10 0 0 0 10 10h4"
                  stroke="var(--color-slate-darker)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] font-medium text-ink-soft backdrop-blur">
                <Stethoscope size={12} className="shrink-0" />
                Portrait coming soon
              </div>
            </div>

            {floatBadges.map(({ icon: Icon, label, className, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + delay, ease: [0.22, 1, 0.36, 1] }}
                className={`animate-float-slow absolute z-10 hidden items-center gap-2 rounded-full border border-ink/8 bg-cream/95 px-3.5 py-2 text-xs font-medium text-ink shadow-md backdrop-blur sm:flex ${className}`}
                style={{ animationDelay: `${delay}s` }}
              >
                <Icon size={13} className="text-slate-dark" />
                <span className="whitespace-nowrap">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 text-right text-sm font-medium text-ink-soft lg:mt-12"
        >
          {doctor.credentials} — {doctor.title}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-base text-ink-soft sm:text-lg">{doctor.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <ArrowButton href="#booking" variant="dark">
              Book a Consultation
            </ArrowButton>
            <ArrowButton href="#about" variant="outline">
              More About Me
            </ArrowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
