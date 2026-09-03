"use client";

import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { doctor, navLinks } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import ArrowButton from "@/components/ui/ArrowButton";

function LinkedinIcon({ size = 15, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const socials = [
  { icon: LinkedinIcon, href: doctor.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${doctor.email}`, label: "Email" },
];

export default function CtaSection() {
  return (
    <div id="cta" className="container-px relative z-10 pt-12">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="grain relative z-10 overflow-hidden border border-cream/30  rounded-3xl bg-slate-dark px-6 py-6 sm:py-12 shadow-[0_35px_70px_-25px_rgba(20,24,27,0.25)] sm:px-10 lg:px-14 lg:py-16">
            {/* glow — bottom-left, site palette */}
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(226,240,240,0.55) 0%, rgba(95,129,144,0.35) 45%, rgba(95,129,144,0) 75%)",
              }}
            />
            <img src="/images/globe.svg" alt="Globe" className="absolute -rotate-110 -bottom-8 -right-14 opacity-60 sm:opacity-100 h-60 w-60 lg:h-80 lg:w-80 object-cover -z-50" />
            <div className="relative flex w-full flex-col gap-14">
              {/* top: heading + CTA */}
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="relative font-display text-2xl font-semibold leading-[1.05] text-cream sm:text-4xl">
                    Guidance That Makes a Difference
                  </h2>
                  <p className="mt-4 leading-relaxed text-cream/90 text-sm sm:text-base">
                    Whether you’re seeking medical consultation or academic guidance, get personalised advice backed by experience and expertise.
                  </p>
                  <ArrowButton href="#footer" variant="light" className="mt-6">
                    Book a Consultation
                  </ArrowButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}