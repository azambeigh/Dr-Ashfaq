"use client";

import { motion } from "framer-motion";
import { Sparkles, Stethoscope, GraduationCap, BookMarked, MapPin } from "lucide-react";
import { doctor, badges } from "@/lib/data";
import ArrowButton from "@/components/ui/ArrowButton";

const floatBadges = [
  {
    icon: GraduationCap,
    label: badges[0],
    className: "-left-6 top-6 sm:-left-10 sm:top-8",
    delay: 0,
  },
  {
    icon: Sparkles,
    label: badges[1],
    className: "-right-4 -top-3 sm:-right-9 sm:-top-4",
    delay: 0.35,
  },
  {
    icon: BookMarked,
    label: badges[3],
    className: "-left-5 -bottom-5 sm:-left-8 sm:-bottom-7",
    delay: 0.7,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-mint pb-16 pt-32 md:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(20,24,27,0.05) 0px, rgba(20,24,27,0.05) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="container-px relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left column — copy */}
        <div className="flex flex-col items-start gap-6">
          {/* <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint"
          >
            <MapPin size={13} className="text-slate-dark" />
            {doctor.title} · {doctor.org}
          </motion.p>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            {doctor.title} · {doctor.org }
          </p> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display text-[11vw] font-bold leading-[1.02] tracking-wide text-ink sm:text-[7.5vw] lg:text-[4.6vw]"
          >
            Meet {doctor.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg font-normal leading-snug text-slate-dark/80 text-xl"
          >
            {doctor.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 flex flex-wrap gap-3"
          >
            <ArrowButton href="#footer" variant="dark">
              Book a Consultation
            </ArrowButton>
            <ArrowButton href="#experience" variant="outline">
              More About Me
            </ArrowButton>
          </motion.div>
        </div>

        {/* Right column — portrait + floating credential badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto aspect-[4/5] w-[70vw] max-w-[320px] sm:w-[42vw] lg:w-[26vw] lg:max-w-[360px]"
        >
          {/* decorative rotated outlines — spin continuously behind the static portrait */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-ink/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-slate-light/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <div className="card-shadow grain relative h-full w-full overflow-hidden rounded-[2rem] border border-ink/8 bg-gradient-to-b from-slate-tint to-mint-deep">
            {doctor.image ? (
              <img
                src={doctor.image}
                alt={doctor.name}
                className="absolute inset-0 h-full w-full origin-[50%_68%] scale-[1.22] object-cover object-top"
              />
            ) : (
              <>
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
              </>
            )}
          </div>

          {floatBadges.map(({ icon: Icon, label, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + delay, ease: [0.22, 1, 0.36, 1] }}
              className={`animate-float-slow absolute z-10 hidden items-center gap-2 rounded-full border border-ink/8 bg-cream/95 px-3.5 py-2 text-xs font-medium text-ink shadow-md backdrop-blur sm:flex ${className}`}
              style={{ animationDelay: `${delay}s` }}
            >
              <Icon size={13} className="text-slate-dark" />
              <span className="whitespace-nowrap">{label}</span>
            </motion.div>
          ))}

          <span className="absolute -bottom-2 right-6 h-3 w-3 rounded-full bg-slate-dark" />
        </motion.div>
      </div>
    </section>
  );
}