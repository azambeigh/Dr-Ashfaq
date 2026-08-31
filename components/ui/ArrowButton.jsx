"use client";

import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const variants = {
  dark: "bg-slate-dark text-cream hover:bg-slate-darker",
  light: "bg-cream text-ink hover:bg-white",
  outline: "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
  ghost: "bg-white/10 text-cream border border-cream/25 hover:bg-white/20",
};

export default function ArrowButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "dark",
  className,
  iconOnly = false,
}) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      className={clsx(
        "group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out",
        variants[variant],
        iconOnly && "p-3",
        className
      )}
    >
      {!iconOnly && children}
      <span
        className={clsx(
          "inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-45",
          iconOnly ? "h-full w-full" : "h-6 w-6 bg-white/15"
        )}
      >
        <ArrowUpRight size={14} strokeWidth={2.25} />
      </span>
    </Component>
  );
}
