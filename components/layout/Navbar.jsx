"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, doctor } from "@/lib/data";
import ArrowButton from "@/components/ui/ArrowButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px pt-4 md:pt-6">
        <motion.div
          animate={{
            boxShadow: scrolled
              ? "0 8px 30px -10px rgba(20,24,27,0.18)"
              : "0 0px 0px rgba(20,24,27,0)",
          }}
          className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-ink/8 bg-cream/85 px-3.5 py-2.5 backdrop-blur-md md:px-4"
        >
          <a href="#top" className="flex items-center gap-2 pl-1">
            <Image
              src="/Logo1.png"
              alt="Dr. Ashfaq"
              width={140}
              height={36}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-1.5 text-sm text-ink-focus transition-colors hover:bg-slate hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <ArrowButton href="#booking" variant="outline">
              Book Consultation
            </ArrowButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-ink md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/40 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-b-3xl bg-cream px-6 pb-8 pt-6 shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">{doctor.name}</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink-soft hover:bg-ink/5 hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <ArrowButton href="#booking" variant="dark" onClick={() => setOpen(false)} className="w-full justify-between">
                  Book Consultation
                </ArrowButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
