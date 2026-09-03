"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  message: "",
};

export default function BookingModel({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  // close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // reset form a moment after close, so it doesn't visibly reset mid-close-animation
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setForm(initialForm);
      setStatus("idle");
    }, 300);
    return () => clearTimeout(t);
  }, [isOpen]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

 async function handleSubmit(e) {
  e.preventDefault();
  if (!form.name || !form.email) return;

  setStatus("submitting");
  try {
    const res = await fetch("https://formspree.io/f/xjyvrpqv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  } catch (err) {
    setStatus("error");
  }
}

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-cream"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 text-cream transition-colors hover:scale-110 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div>
              {status === "success" ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-tint text-slate-dark">
                    <Calendar size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Request sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-ink-faint">
                    Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ll get back
                    to you shortly to confirm a time.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 rounded-full bg-slate-dark px-4 sm:px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-slate-darker"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="bg-slate-dark px-4 sm:px-6 pt-6 pb-5 overflow-hidden">
                    <h3
                      id="booking-modal-title"
                      className="font-display text-xl font-medium text-cream"
                    >
                      Book a Consultation
                    </h3>
                    <p className="mt-1 text-sm font-medium text-cream/90">
                      Share a few details and we&apos;ll confirm a time that works.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-5 flex px-4 sm:px-6 pb-6 flex-col gap-4">
                    <Field
                      icon={User}
                      label="Full name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                    <Field
                      icon={Mail}
                      label="Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        icon={Phone}
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX"
                      />
                      <Field
                        icon={Calendar}
                        label="Preferred date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-ink-soft">
                        <MessageSquare size={13} className="text-ink-faint" />
                        Reason for visit
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Briefly tell us what this is regarding"
                        className="w-full resize-none rounded-xl border border-line bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-slate focus:outline-none focus:ring-2 focus:ring-slate/20"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-600">
                        Something went wrong — please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex w-full items-center justify-center rounded-full bg-slate-dark px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-slate-darker disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? "Sending..." : "Request Consultation"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ icon: Icon, label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-ink-soft">
        <Icon size={13} className="text-ink-faint" />
        {label}
        {required && <span className="text-slate-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-line bg-cream px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-slate focus:outline-none focus:ring-2 focus:ring-slate/20"
      />
    </div>
  );
}