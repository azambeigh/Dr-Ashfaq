"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Stethoscope, BookOpen, CalendarCheck } from "lucide-react";
import clsx from "clsx";

const items = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: GraduationCap },
  { id: "expertise", label: "Expertise", icon: Stethoscope },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "booking", label: "Book", icon: CalendarCheck },
];

export default function SectionDock() {
  const [active, setActive] = useState("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 md:block"
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-cream/90 p-1.5 shadow-[0_8px_30px_-8px_rgba(20,24,27,0.25)] backdrop-blur-md">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={clsx(
                "relative flex items-center gap-2 rounded-full px-3 py-2.5 text-xs font-medium transition-colors duration-300",
                isActive ? "text-cream" : "text-ink-soft hover:text-ink"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-slate-dark"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon size={15} className="relative z-10" strokeWidth={2} />
              {isActive && <span className="relative z-10 whitespace-nowrap">{item.label}</span>}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
