import { credentialStrip, stats } from "@/lib/data";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function TrustedBy() {
  const loop = [...credentialStrip, ...credentialStrip];

  return (
    <section className="border-y border-ink/8 bg-cream/60 py-10">
      <div className="no-scrollbar mb-10 overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-ink/8 bg-cream px-5 py-2.5 text-xs font-medium text-ink-soft sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container-px mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-ink-faint sm:text-sm">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
