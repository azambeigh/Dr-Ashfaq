"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Clock, MapPin, Mail, CalendarCheck } from "lucide-react";
import { consultationTypes, doctor } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import ArrowButton from "@/components/ui/ArrowButton";

function ConsultationCards({ selected, onSelect }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {consultationTypes.map((tier, i) => {
        const isSelected = selected === tier.title;
        const highlight = tier.highlighted;
        return (
          <Reveal key={tier.title} delay={i * 0.08}>
            <button
              type="button"
              onClick={() => onSelect(tier.title)}
              className={`card-shadow flex h-full w-full flex-col rounded-[1.75rem] border p-6 text-left transition-colors duration-300 ${
                highlight || isSelected
                  ? "border-transparent bg-slate-dark text-cream"
                  : "border-ink/8 bg-cream text-ink"
              } ${isSelected && !highlight ? "ring-2 ring-slate-dark" : ""}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{tier.title}</h3>
                {isSelected && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/20">
                    <Check size={13} />
                  </span>
                )}
              </div>
              <p
                className={`mb-4 text-xs font-medium uppercase tracking-wide ${
                  highlight || isSelected ? "text-cream/60" : "text-ink-faint"
                }`}
              >
                {tier.duration}
              </p>
              <p
                className={`mb-5 text-sm leading-relaxed ${
                  highlight || isSelected ? "text-cream/80" : "text-ink-soft"
                }`}
              >
                {tier.description}
              </p>
              <ul className="mt-auto flex flex-col gap-2">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-sm ${
                      highlight || isSelected ? "text-cream/85" : "text-ink-soft"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        highlight || isSelected ? "bg-cream/20" : "bg-slate-tint"
                      }`}
                    >
                      <Check size={9} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}

function BookingForm({ selected }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [status, setStatus] = useState("idle");

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[0.85fr_1fr]">
      <Reveal direction="right">
        <div className="card-shadow grain relative hidden h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-ink/8 bg-slate-tint lg:block">
          <svg viewBox="0 0 400 480" className="absolute inset-0 h-full w-full" fill="none">
            <rect width="400" height="480" fill="var(--color-slate-tint)" />
            <rect x="48" y="60" width="304" height="150" rx="20" fill="var(--color-cream)" />
            <rect x="72" y="88" width="200" height="10" rx="5" fill="var(--color-slate-light)" />
            <rect x="72" y="112" width="150" height="10" rx="5" fill="var(--color-slate-light)" />
            <rect x="72" y="160" width="110" height="30" rx="15" fill="var(--color-slate-dark)" />
            <circle cx="300" cy="330" r="90" fill="var(--color-slate)" fillOpacity="0.5" />
            <path
              d="M255 330a45 45 0 0 0 90 0"
              stroke="var(--color-cream)"
              strokeWidth="3"
              fill="none"
            />
            <rect x="48" y="420" width="180" height="14" rx="7" fill="var(--color-cream)" />
          </svg>
        </div>
      </Reveal>

      <Reveal direction="left" delay={0.1}>
        <div className="card-shadow overflow-hidden rounded-[2rem] bg-slate-dark p-6 text-cream sm:p-10">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">Contact Info</h3>
          <p className="mt-2 text-sm text-cream/70">
            {selected ? `Requesting: ${selected}` : "Choose a consultation type above, then fill in your details."}
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-cream/20 bg-cream/10 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-slate-dark">
                  <Check size={18} />
                </span>
                <p className="font-display text-lg font-semibold">Request received</p>
                <p className="text-sm text-cream/75">
                  Thank you, {form.name.split(" ")[0] || "there"}. We&apos;ll confirm your appointment
                  by phone or email shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-4"
              >
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Name"
                  className="rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream/50 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="Email"
                  className="rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream/50 focus:outline-none"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="Phone"
                    className="rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream/50 focus:outline-none"
                  />
                  <div className="relative">
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      className="w-full rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-cream/50 focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Message"
                  rows={3}
                  className="resize-none rounded-xl border border-cream/20 bg-cream/10 px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream/50 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-slate-dark transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Request Appointment"}
                  <CalendarCheck size={16} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-cream/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-cream/60">
                <Clock size={12} /> Hours
              </p>
              <p className="text-sm">{doctor.hours}</p>
            </div>
            <div>
              <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-cream/60">
                <MapPin size={12} /> Location
              </p>
              <p className="text-sm">{doctor.location}</p>
            </div>
            <div>
              <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-cream/60">
                <Mail size={12} /> Support
              </p>
              <p className="text-sm">{doctor.email}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Booking() {
  const [selected, setSelected] = useState("Standard Consultation");

  return (
    <section id="booking" className="container-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-medium font-bold uppercase tracking-[0.18em] text-ink-faint">
            Booking
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Book a<span className="text-slate-dark"> Consultation </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-ink-soft sm:text-base">
            Choose the consultation that fits your needs, then share a few details below.
          </p>
        </Reveal>

        <div className="mb-6">
          <ConsultationCards selected={selected} onSelect={setSelected} />
        </div>

        <BookingForm selected={selected} />
      </div>
    </section>
  );
}
