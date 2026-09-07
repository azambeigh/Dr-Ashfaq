"use client";

import { motion } from "framer-motion";
import ArrowButton from "@/components/ui/ArrowButton";
import Reveal from "@/components/ui/Reveal";
import { BookMarked, ShieldCheck, GraduationCap, Users } from "lucide-react";
import { doctor, stats } from "@/lib/data";

export default function Heroo() {
    return (
        <section
            id="top"
            className="container-px relative min-h-svh overflow-hidden bg-mint pb-16 pt-32 md:pt-36"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(20,24,27,0.05) 0px, rgba(20,24,27,0.05) 1px, transparent 1px, transparent 64px)",
                }}
            />
            <div className="mx-auto grid max-w-6xl items-center gap-8 xl:gap-12 grid-cols-1 lg:grid-cols-[1fr_0.65fr]">
                <Reveal direction="left" delay={0.1}>
                    <div className="">
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-6xl"
                        >
                            Meet <br />
                            <span className="bg-linear-to-r from-ink to-slate bg-clip-text text-transparent">Dr. Ashfaq ul Hassan</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 max-w-152 text-lg leading-relaxed text-ink-soft"
                        >
                            An Educator for Speciality Boards like NEET PG, NEET Superspeciality, USMLE, MRCS, PLAB, MBBS , FMGE and Arab Board.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 flex flex-wrap gap-6"
                        >
                            <ArrowButton href="#footer" variant="dark">
                                Book a Consultation
                            </ArrowButton>
                            <ArrowButton href="#experience" variant="outline">
                                More About Me
                            </ ArrowButton>
                        </motion.div>
                    </div>
                </Reveal>

                <Reveal direction="right">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                         className="card-shadow grain relative aspect-4/4.5 max-h-[420px] sm:max-h-[480px] lg:max-h-none lg:aspect-4/4.5 border-6 border-white rounded-xl"
                    >
                        {/* decorative rotated outlines — spin continuously behind the static portrait */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 rounded-xl border border-ink/10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="pointer-events-none absolute inset-0 rounded-xl border border-slate-light/40"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        />

                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                            <img
                                src="/Heroimg.webp"
                                alt="Dr. Ashfaq ul Hassan speaking at a lecture"
                                className="h-full w-full object-cover aspect-4/2"
                            />
                        </div>

                        {/* top-left: credential badge */}
                        <div className="absolute -left-8 top-10 z-10 hidden items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-lg backdrop-blur sm:flex">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-dark text-white">
                                <GraduationCap size={14} />
                            </span>
                            <div>
                                <p className="text-xs font-semibold text-ink">Professor & Head, SKIMS</p>
                            </div>
                        </div>

                        {/* top-right: credential badge */}
                        <div className="absolute -right-6 lg:-right-8 xl:-right-12 -top-8 z-10 hidden items-center gap-2 rounded-lg bg-white px-2 py-2.5 shadow-lg backdrop-blur sm:flex">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-dark text-white">
                                <ShieldCheck size={16} />
                            </span>
                            <div>
                                <p className="text-xs font-semibold text-ink">GMC UK Registered</p>
                                <p className="text-[10px] font-medium text-ink-faint">Verified credential</p>
                            </div>
                        </div>

                        {/* bottom-right: big stat card */}
                        <div className="absolute -bottom-10 -right-5 z-10 hidden rounded-lg bg-slate-dark px-3 py-4 text-cream shadow-xl sm:block">
                            <p className="font-display text-3xl font-semibold">40+</p>
                            <p className="text-sm font-medium text-cream/70 flex items-center gap-1">
                                <BookMarked size={14} />Books Authored</p>
                        </div>

                        {/* bottom-left: students reached card */}
                        <div className="absolute bottom-14 -left-8 z-10 hidden items-center gap-2.5 rounded-lg bg-white px-2 py-2.5 shadow-lg backdrop-blur sm:flex">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-dark text-cream">
                                <Users size={16} />
                            </span>
                            <div>
                                <p className="font-display text-sm font-semibold leading-tight text-ink">1.5 Lakh+ Students</p>
                                <p className="text-[10px] text-ink-faint">Connected across the globe</p>
                            </div>
                        </div>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}