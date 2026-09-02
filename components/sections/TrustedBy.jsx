import { stats } from "@/lib/data";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function TrustedBy() {

  return (
    <section className="bg-slate-dark py-10">
      <div className="container-px mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center sm:text-left">
            <p className="font-display text-3xl text-center font-semibold text-cream sm:text-[40px]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm sm:text-base text-center text-cream/70 leading-relaxed">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
