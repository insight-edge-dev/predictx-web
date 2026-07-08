import Image from "next/image";
import { PhonePlaceholder } from "./PhonePlaceholder";

export function TrustBlock() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-surface px-8 py-12 md:grid-cols-[1fr_auto_1fr] md:px-14">
        <div className="pointer-events-none absolute bottom-1/2 left-1/2 z-0 h-[72%] w-[42%] -translate-x-1/2 translate-y-1/2 opacity-[0.08]">
          <div className="relative h-full w-full [animation:predictx-float_12s_ease-in-out_infinite_alternate]">
            <Image
              src="/illustrations/radar-sphere.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 768px) 32vw, 70vw"
              className="select-none object-contain"
            />
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-3xl">
            Pure sports
            <br />
            intelligence.
          </h2>
          <p className="mt-4 max-w-xs text-sm text-text-2">
            No bets, no fantasy, no noise — just data-driven predictions from
            AI models and real analysts.
          </p>
        </div>
        <div className="relative z-10 flex justify-center">
          <PhonePlaceholder label="PredictX Picks" className="max-w-[190px]" />
        </div>
        <div className="relative z-10 text-right">
          <div className="text-xs font-semibold uppercase tracking-wide text-text-3">
            The best experience
            <br />
            in sports intelligence
          </div>
          <p className="mt-4 text-sm italic text-text-3">
            Verified accuracy on every pick, every match.
          </p>
        </div>
      </div>
    </section>
  );
}
