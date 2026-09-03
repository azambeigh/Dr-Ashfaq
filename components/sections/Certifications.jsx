import { certifications } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

const FEATURED_LABEL = "GMC UK";

export default function Certifications() {
  const featured = certifications.find((cert) => cert.label === FEATURED_LABEL);
  const rest = certifications.filter((cert) => cert.label !== FEATURED_LABEL);

  return (
    <section id="Credentials" className="container-px py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Credentials
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-[40px]">
            Certified Across <span className="text-slate-dark">Four</span> Countries.
          </h2>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <Reveal direction="right">
            <div className="lg:pr-2">
              <div className="mb-10 flex h-18 w-18 items-center justify-center rounded-full border-[1.5px] border-slate-dark font-display text-sm font-bold tracking-wide text-slate-dark">
                GMC
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
                Featured
              </p>
              <p className="mb-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                {featured.issuer}
              </p>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Full UK registration to practise medicine - held alongside seven further
                credentials across India, the United States and the UAE.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="grid grid-cols-1 border-t border-slate-dark/50 sm:grid-cols-2">
              {rest.map((cert, i) => (
                <div
                  key={cert.label}
                  className="border-b border-slate-dark/50 py-4 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                >
                  <p className="font-display text-base font-semibold text-ink">{cert.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-faint">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
