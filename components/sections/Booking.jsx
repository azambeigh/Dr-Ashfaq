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

export default function Footer() {
  return (
    <footer id="footer" className="container-px pb-6 pt-24">
      <Reveal>
        <div className="grain card-shadow relative overflow-hidden rounded-[2.5rem] bg-slate-dark px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          {/* subtle heartbeat divider, reused from the hero motif */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-[38%] hidden w-full opacity-[0.12] sm:block"
            height="80"
            viewBox="0 0 1000 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40 H340 L370 8 L400 72 L430 40 L460 40 L490 12 L520 68 L550 40 H1000"
              stroke="#eef4f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14">
            {/* top: heading + CTA */}
            <div className="flex flex-col gap-8 pb-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
                  Get in touch
                </p>
                <h2 className="font-display text-3xl font-semibold leading-[1.05] text-cream sm:text-4xl lg:text-5xl">
                  Let&apos;s connect and talk medicine.
                </h2>
              </div>

              <div className="w-full max-w-sm">
                <ArrowButton href="#footer" variant="light" className="w-full justify-between">
                  Send a Message
                </ArrowButton>
              </div>
            </div>

            {/* middle: identity + link columns */}
            <div className="flex flex-col gap-12 md:flex-row md:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream font-display text-sm font-semibold text-slate-dark">
                  AH
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-cream">{doctor.name}</p>
                  <p className="text-sm text-cream/60">{doctor.title}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-cream/60">
                    <li className="flex items-center gap-2">
                      <MapPin size={13} className="shrink-0 text-cream/40" />
                      {doctor.location}
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail size={13} className="shrink-0 text-cream/40" />
                      {doctor.email}
                    </li>
                    {doctor.phone && (
                      <li className="flex items-center gap-2">
                        <Phone size={13} className="shrink-0 text-cream/40" />
                        {doctor.phone}
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 sm:gap-16">
                <div>
                  <p className="mb-3 text-sm font-semibold text-cream">Social Links</p>
                  <div className="flex gap-2">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-cream/50 hover:text-cream"
                      >
                        <social.icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold text-cream">Quick Links</p>
                  <ul className="space-y-2 text-sm text-cream/60">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="transition-colors hover:text-cream">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* bottom: copyright + back to top */}
            <div className="flex flex-col-reverse items-center gap-4 border-t border-cream/12 pt-6 text-xs text-cream/50 sm:flex-row sm:justify-between">
              <p>© {new Date().getFullYear()} {doctor.name}. All rights reserved.</p>
              <a
                href="#top"
                className="flex items-center gap-1.5 transition-colors hover:text-cream"
              >
                Back to top
                <ArrowUp size={12} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}