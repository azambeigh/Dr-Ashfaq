import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Certifications() {
  return (
    <section className="container-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-xl">
          <p className="mb-3 text-medium font-bold uppercase tracking-[0.18em] text-ink-faint">
            Credentials
          </p>
          
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Certified Across <span className="text-slate-dark"> Four </span> Countries.
          </h2>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.label} delay={i * 0.04}>
              <div className="card-shadow flex h-full items-start gap-3 rounded-2xl border border-ink/8 bg-cream p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-tint text-slate-dark">
                  <Award size={15} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{cert.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-faint">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
