import Image from "next/image";

const screens = [
  {
    badge: "Prediction Engine",
    title: "Prediction Analysis",
    description: "Real-time AI match analysis.",
    src: "/mockups/predictx-mockup-7.png",
    chip: "96% Confidence",
    className: "left-[1%] top-[13%] z-10 -rotate-[8deg]",
  },
  {
    badge: "AI Confidence",
    title: "Discovery Feed",
    description: "Signal-first picks for every game.",
    src: "/mockups/predictx-mockup-1.png",
    chip: "AI Pick",
    className: "left-1/2 top-[4%] z-30 -translate-x-1/2 rotate-0",
  },
  {
    badge: "Live Scores",
    title: "WC Fixtures",
    description: "Fixtures and results at a glance.",
    src: "/mockups/predictx-mockup-8.png",
    chip: "Live",
    className: "right-[1%] top-[13%] z-20 rotate-[8deg]",
  },
];

function ShowcaseCard({
  badge,
  title,
  description,
  src,
  chip,
  className,
}: {
  badge: string;
  title: string;
  description: string;
  src: string;
  chip: string;
  className: string;
}) {
  return (
    <article
      className={`relative h-[19.5rem] shrink-0 snap-center overflow-hidden rounded-[1.55rem] border border-white/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(234,231,255,0.74)_52%,rgba(248,246,243,0.88))] p-2.5 shadow-[0_22px_58px_rgba(0,0,0,0.18),0_0_46px_rgba(91,124,255,0.06)] backdrop-blur-sm sm:h-[22rem] sm:rounded-[1.75rem] sm:p-3 md:absolute md:w-[15.5rem] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.55),transparent_32%,transparent_74%,rgba(255,255,255,0.24))]" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <span className="max-w-[8.25rem] truncate rounded-full border border-ink/10 bg-white/55 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-ink/70 sm:max-w-none sm:text-[10px]">
            {badge}
          </span>
          <span className="max-w-[7.5rem] truncate rounded-full border border-white/60 bg-white/55 px-2.5 py-1 text-[9px] font-bold text-ink/55 shadow-[0_8px_20px_rgba(42,23,22,0.07)] sm:max-w-none sm:text-[10px]">
            {chip}
          </span>
        </div>

        <div className="relative h-[65%] overflow-hidden rounded-[1.1rem] border border-white/70 bg-white shadow-[0_16px_34px_rgba(42,23,22,0.11)] sm:h-[68%] sm:rounded-[1.25rem] sm:shadow-[0_18px_42px_rgba(42,23,22,0.12)]">
          <Image
            src={src}
            alt={`PredictX ${title} mockup`}
            fill
            sizes="(max-width: 768px) 78vw, 16rem"
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.28),transparent_34%,transparent_72%,rgba(255,255,255,0.08))]" />
        </div>

        <div className="mt-auto pt-3 sm:pt-4">
          <h3 className="text-[15px] font-extrabold leading-tight text-ink sm:text-base">
            {title}
          </h3>
          <p className="mt-1 text-[11px] font-semibold leading-4 text-text-3 sm:text-xs sm:leading-5">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function AppShowcase() {
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-3 py-12 sm:px-6 sm:py-14">
      <div className="relative grid min-h-[34rem] grid-cols-1 items-center gap-7 overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_70%_42%,rgba(245,158,11,0.12),transparent_24%),radial-gradient(circle_at_76%_58%,rgba(91,124,255,0.14),transparent_28%),linear-gradient(135deg,#2a1716_0%,#23100f_46%,#351b19_100%)] px-4 py-10 shadow-[0_32px_100px_rgba(42,23,22,0.13)] sm:gap-8 sm:rounded-[2.75rem] sm:px-8 sm:py-12 md:grid-cols-[0.95fr_1.05fr] md:px-16 lg:min-h-[33.5rem] lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:44px_44px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at 68% 48%, black 0%, rgba(0,0,0,0.52) 42%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 68% 48%, black 0%, rgba(0,0,0,0.52) 42%, transparent 76%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.7px,transparent_0.7px)] [background-size:7px_7px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(0,0,0,0.22)_100%)]" />

        <div className="pointer-events-none absolute right-[10%] top-[50%] h-72 w-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.13),rgba(245,158,11,0.1)_34%,rgba(91,124,255,0.1)_58%,transparent_76%)] blur-3xl" />

        <div className="pointer-events-none absolute right-[18%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/25" />
        <div className="pointer-events-none absolute right-[32%] top-[76%] h-1 w-1 rounded-full bg-white/20" />
        <div className="pointer-events-none absolute right-[42%] top-[35%] hidden h-px w-24 rotate-[-18deg] bg-gradient-to-r from-transparent via-white/12 to-transparent md:block" />
        <div className="pointer-events-none absolute right-[20%] top-[63%] hidden h-px w-28 rotate-[16deg] bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
        <div className="pointer-events-none absolute right-[35%] top-[28%] hidden rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/10 md:block">
          96%
        </div>

        <div className="order-1 max-w-md text-center md:text-left">
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-[0_14px_32px_rgba(0,0,0,0.16)] sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-6 italic text-white/55">
            Deep match analysis, wherever you tap.
          </p>
          <p className="mx-auto mt-6 max-w-[21rem] text-sm leading-6 text-white/74 md:mx-0 md:mt-8">
            From the probability bar to the 7-factor comparison grid, every
            prediction is backed by data you can see for yourself.
          </p>
        </div>

        <div className="relative order-2 mx-auto w-full max-w-[29rem] md:h-[25rem] md:max-w-[34rem]">
          <div className="absolute left-1/2 top-[48%] h-60 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl" />

          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-5 pt-2 [scrollbar-width:none] sm:mx-0 sm:gap-4 sm:px-0 md:hidden [&::-webkit-scrollbar]:hidden">
            {screens.map((screen) => (
              <ShowcaseCard
                key={screen.title}
                {...screen}
                className="w-[min(78vw,18.5rem)] first:rotate-[-2deg] even:rotate-[1deg] last:rotate-[2deg]"
              />
            ))}
          </div>

          <div className="hidden md:block">
            {screens.map((screen) => (
              <ShowcaseCard key={screen.title} {...screen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
