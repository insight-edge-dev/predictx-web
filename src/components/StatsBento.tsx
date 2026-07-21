import Image from "next/image";

const leagues = [
  { name: "IPL 2026", color: "#2563eb" },
  { name: "WC 2026", color: "#16a34a" },
  { name: "BBL", color: "#d97706" },
  { name: "PSL", color: "#7c3aed" },
  { name: "T20I", color: "#c0392b" },
];

function CardIllustration({
  src,
  className,
  imageClassName = "object-contain",
  sizes,
}: {
  src: string;
  className: string;
  imageClassName?: string;
  sizes: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-0 select-none ${className}`}
    >
      <div className="relative h-full w-full [animation:predictx-float_10s_ease-in-out_infinite_alternate]">
        <Image
          src={src}
          alt=""
          fill
          loading="lazy"
          sizes={sizes}
          className={`select-none ${imageClassName}`}
        />
      </div>
    </div>
  );
}

export function StatsBento() {
  return (
    <section id="accuracy" className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <h2 className="sr-only">
        PredictX prediction accuracy and tournament coverage
      </h2>
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-28 w-[70%] -translate-x-1/2 opacity-[0.06]">
        <Image
          src="/illustrations/prediction-wave.webp"
          alt=""
          fill
          loading="lazy"
          sizes="70vw"
          className="select-none object-contain"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        <div className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl bg-ink px-6 py-8 text-white sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] mix-blend-screen">
            <Image
              src="/illustrations/live-accuracy-overlay.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 768px) 30vw, 100vw"
              className="select-none object-cover object-center"
            />
          </div>
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50">
              Live accuracy
            </span>
            <div className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
              73%+
            </div>
            <p className="mt-4 max-w-[14rem] text-sm text-white/70">
              Prediction accuracy verified across 2,400+ matches analysed.
            </p>
          </div>
        </div>

        <div className="relative col-span-1 overflow-hidden rounded-3xl bg-lavender px-6 py-7 sm:px-8 sm:py-8 md:col-span-2">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.10] mix-blend-multiply">
            <Image
              src="/illustrations/world-cup-overlay.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="select-none object-cover object-center"
            />
          </div>
          <CardIllustration
            src="/illustrations/global-tournament.webp"
            className="right-2 top-0 h-[78%] w-[45%] opacity-[0.12]"
            sizes="(min-width: 768px) 30vw, 45vw"
          />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">
              Featured tournament
            </span>
            <h3 className="mt-3 max-w-sm text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
              FIFA World Cup 2026
            </h3>
            <p className="mt-3 max-w-sm text-sm text-text-2">
              48 teams, 12 groups, 104 matches &mdash; every group standing
              and knockout prediction, in one hub.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-sage px-6 py-6">
          <CardIllustration
            src="/illustrations/probability-engine.webp"
            className="bottom-1/2 left-0 h-[90%] w-[65%] translate-y-1/2 opacity-[0.10]"
            sizes="(min-width: 768px) 22vw, 65vw"
          />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-ink/50">
              Sample prediction
            </span>
            <div className="mt-4 flex items-center justify-between text-sm font-bold text-ink">
              <span>IND</span>
              <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                High
              </span>
              <span>AUS</span>
            </div>
            <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-white/60">
              <div className="h-full w-[64%] rounded-full bg-ink" />
            </div>
            <div className="mt-2 flex justify-between text-xs font-semibold text-text-2">
              <span>64%</span>
              <span>36%</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-surface px-6 py-6">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply">
            <Image
              src="/illustrations/league-overlay.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 768px) 28vw, 100vw"
              className="select-none object-cover object-center"
            />
          </div>
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-text-3">
              5 leagues. One app.
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {leagues.map((league) => (
                <span
                  key={league.name}
                  className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: league.color }}
                  />
                  {league.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
