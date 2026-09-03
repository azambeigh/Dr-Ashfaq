"use client";

import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const variants = {
  dark: "bg-slate-dark text-cream hover:bg-slate-darker",
  light: "bg-cream text-ink hover:bg-white",
  outline: "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
  ghost: "bg-white/10 text-cream border border-cream/25 hover:bg-white/20",
};

// background for the little arrow circle — needs to contrast against
// each button's own background, so "light" gets a dark-tinted circle
// instead of the default white-tinted one used on dark buttons.
const arrowBg = {
  dark: "bg-white/15",
  light: "bg-ink/10",
  outline: "bg-ink/10",
  ghost: "bg-white/15",
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
        "group cursor-pointer inline-flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
        variants[variant],
        iconOnly && "p-3",
        className
      )}
    >
      {!iconOnly && children}
      <span
        className={clsx(
          "inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-45",
          iconOnly ? "h-full w-full" : clsx("h-6 w-6", arrowBg[variant])
        )}
      >
        <ArrowUpRight size={14} strokeWidth={2.25} />
      </span>
    </Component>
  );
}