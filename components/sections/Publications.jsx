"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, BookOpen, ArrowRight, ArrowUpRight } from "lucide-react";
import { publications, books } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import ArrowButton from "@/components/ui/ArrowButton";

const accents = [
  "bg-slate-dark text-cream",
  "bg-slate text-cream",
  "bg-mint-deep text-slate-dark",
  "bg-ink-soft text-cream",
  "bg-slate-light text-cream",
  "bg-slate-tint text-slate-dark",
];

function amazonHref(book) {
  if (book.link) return book.link;
  return `https://www.amazon.in/s?k=${encodeURIComponent(book.title)}`;
}

export default function Publications() {
  return (
    <section id="publications" className="container-px py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Research publications */}
        <Reveal >
          <div className="mb-12 sm:mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Selected Publications
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-[40px]">
                {publications.length} Notable <span className="text-slate-dark">Research</span> Publications
              </h2>
            </div>
            <a
              href="#publications"
              className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              View All Publications
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="card-shadow flex flex-col justify-between rounded-2xl border border-line bg-cream p-5"
              >
                <div>
                  <motion.span
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-dark text-cream"
                  >
                    <FileText size={16} />
                  </motion.span>
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-faint">{pub.subtitle}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs font-medium text-ink-faint">
                    Publication No. {pub.number}
                  </p>
                  <a
                    href="#publications"
                    className="group flex items-center gap-1 text-xs font-semibold text-slate-dark hover:text-slate-darker"
                  >
                    Read More
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Books — cover image, each card links out to its Amazon listing */}
        <Reveal delay={0.1}>
          <div className="mb-12 sm:mb-16 mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Featured Books
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-[40px]">
                40+ <span className="text-slate-dark">Published</span> Books
              </h2>
            </div>
            <a
              href="https://www.amazon.in/s?me=A1O5F7XR1CIVU8"
              className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              View All Books
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4">
            {books.map((book, i) => (
              <motion.a
                key={book.title}
                href={amazonHref(book)}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${book.title} on Amazon`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-3"
              >
                <div
                  className={`card-shadow relative flex aspect-3/4 flex-col justify-end overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-1 ${
                    book.cover ? "bg-cream" : `p-4 ${accents[i % accents.length]}`
                  }`}
                >
                  {book.cover ? (
                    <>
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 200px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* scrim so the title stays legible over any cover art */}
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-ink/0 to-transparent" />
                      <p className="relative z-10 p-4 text-sm font-semibold leading-snug text-cream">
                        {book.title}
                      </p>
                    </>
                  ) : (
                    <>
                      <BookOpen size={18} className="mb-2 opacity-80" />
                      <p className="text-sm font-semibold leading-snug">{book.title}</p>
                    </>
                  )}

                  <span className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/25 text-cream opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight size={13} />
                  </span>
                </div>
                {book.year && (
                  <p className="text-center text-xs text-ink-faint">{book.year}</p>
                )}
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}