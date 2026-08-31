"use client";

import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { doctor, navLinks } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

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
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <footer className="container-px pb-6 pt-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-dark px-6 py-14 sm:px-12">
            <svg
              className="pointer-events-none absolute inset-x-0 top-1/2 hidden w-full -translate-y-1/2 opacity-40 sm:block"
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

            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-md font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-5xl">
                Let&apos;s Connect With Me
              </h2>

              <form onSubmit={handleSubmit} className="w-full max-w-sm">
                {sent ? (
                  <p className="rounded-full border border-cream/25 bg-cream/10 px-5 py-3.5 text-sm text-cream">
                    Thanks — we&apos;ll be in touch soon.
                  </p>
                ) : (
                  <div className="flex items-center gap-3 border-b border-cream/40 pb-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-sm text-cream placeholder:text-cream/50 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-slate-dark transition-transform hover:rotate-45"
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-10 rounded-[2rem] bg-cream px-6 py-10 sm:px-12 md:flex-row md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-tint font-display text-sm font-semibold text-slate-dark">
                AH
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink">{doctor.name}</p>
                <p className="text-sm text-ink-faint">{doctor.title}</p>
                <div className="mt-4 flex gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/12 text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
                    >
                      <social.icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">Explore</p>
                <ul className="space-y-2 text-sm text-ink-faint">
                  <li><a href="#experience" className="hover:text-ink">Experience</a></li>
                  <li><a href="#publications" className="hover:text-ink">Publications</a></li>
                  <li><a href="#expertise" className="hover:text-ink">Expertise</a></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">Quick Links</p>
                <ul className="space-y-2 text-sm text-ink-faint">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="hover:text-ink">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">Contact</p>
                <ul className="space-y-2 text-sm text-ink-faint">
                  <li>{doctor.location}</li>
                  <li>{doctor.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-ink-faint">
          © {new Date().getFullYear()} {doctor.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
