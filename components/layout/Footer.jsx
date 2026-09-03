"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { doctor, quickLinks } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import ArrowButton from "@/components/ui/ArrowButton";

function LinkedinIcon({ size = 15, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

// Detailed, illustrative stethoscope mark for the footer corner —
// gradient-shaded tubing and chest piece rather than a flat line icon.
function StethoscopeMark(props) {
  return (
    <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="stethoTube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--color-cream)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--color-cream)" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="stethoChest" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="var(--color-cream)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--color-cream)" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      <path
        d="M55 18c-6 0-11 5-11 11v20c0 22 16 40 38 42"
        fill="none"
        stroke="url(#stethoTube)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M95 18c6 0 11 5 11 11v20c0 22-16 40-38 42"
        fill="none"
        stroke="url(#stethoTube)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="55" cy="16" r="7" fill="url(#stethoTube)" />
      <circle cx="95" cy="16" r="7" fill="url(#stethoTube)" />

      <path
        d="M75 91c0 24 6 38 6 58 0 26 -18 46 -46 46"
        fill="none"
        stroke="url(#stethoTube)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <path
        d="M35 195c-14 4-22 16-19 30 3 15 18 25 33 22 15-3 25-18 22-33-2-11-10-19-20-21"
        fill="none"
        stroke="url(#stethoTube)"
        strokeWidth="3.5"
      />

      <circle
        cx="35"
        cy="218"
        r="34"
        fill="url(#stethoChest)"
        stroke="var(--color-cream)"
        strokeOpacity="0.6"
        strokeWidth="2"
      />
      <circle
        cx="35"
        cy="218"
        r="22"
        fill="none"
        stroke="var(--color-slate-dark)"
        strokeWidth="2"
        strokeOpacity="0.4"
      />
      <circle
        cx="35"
        cy="218"
        r="10"
        fill="none"
        stroke="var(--color-slate-dark)"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      <path
        d="M140 60c30 10 55 40 55 75s-25 65-55 75"
        fill="none"
        stroke="var(--color-cream)"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        strokeDasharray="2 4"
      />
    </svg>
  );
}

const socials = [
  { icon: Mail, href: `mailto:${doctor.email}`, label: "Email" },
  { icon: LinkedinIcon, href: doctor.linkedin, label: "LinkedIn" },
  ...(doctor.phone
    ? [{ icon: Phone, href: `tel:${doctor.phone}`, label: "Phone" }]
    : []),
  ...(doctor.location
    ? [
        {
          icon: MapPin,
          href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            doctor.location
          )}`,
          label: "Location",
        },
      ]
    : []),
];

export default function Footer() {
  return (
    <footer id="footer" className="relative z-0 -mt-28 overflow-hidden border-t border-line bg-slate-dark sm:-mt-36 lg:-mt-44">
      {/* decorative corner mark — top right */}
      <StethoscopeMark className="pointer-events-none absolute -right-20 top-60 h-40 w-40 opacity-[0.12] sm:h-56 sm:w-56" />

      <div className="container-px relative pt-44 pb-12 sm:pt-52 lg:pt-60">
        <Reveal>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
            {/* left: heading + CTA */}
            <div className="w-[70%] max-w-xl">
              <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-cream sm:text-[40px]">
                Dr. Ashfaq ul Hassan
              </h2>

              <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-cream/70">
                Professor & Head of Department, SKIMS
                Medical Professional • Medical Educator • Academic Mentor
              </p>

              <div className="mt-7">
                <ArrowButton href={`mailto:${doctor.email}`} variant="light">
                  Send a Message
                </ArrowButton>
              </div>
            </div>

            {/* right: contact + socials */}
            <div className="w-[100%] sm:w-[30%] sm:pt-1">
              <p className="font-semibold tracking-[0.18em] text-cream">
                Quick Links
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base text-cream/85 hover:text-cream"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="mt-8 font-semibold tracking-[0.18em] text-cream">
                Social Links
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Phone" ? undefined : "_blank"}
                    rel={social.label === "Phone" ? undefined : "noreferrer"}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream/60 text-cream/85 transition-colors hover:border-cream hover:text-cream"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>


        <div className="relative mx-auto mt-20 sm:mt-16 w-full max-w-6xl pt-5">

          <svg
            className="pointer-events-none absolute inset-x-0 top-[-110%] w-full opacity-[0.12] block"
            height="80"
            viewBox="0 0 1000 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40 H350 L370 8 L420 72 L430 40 L480 40 L510 12 L540 68 L570 40 H1000"
              stroke="#eef4f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="pt-4 text-xs text-cream/80">
            Made with care, from Srinagar, Kashmir. © {new Date().getFullYear()}{" "}
            {doctor.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}