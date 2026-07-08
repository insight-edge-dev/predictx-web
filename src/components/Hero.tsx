"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { appLinks } from "@/data/links";
import { PlayStoreBadge, SocialLinks } from "./SocialLinks";

const phones = [
  {
    src: "/mockups/predictx-mockup-6.png",
    alt: "PredictX rankings app screen",
    className:
      "left-[17%] top-[14%] z-0 w-[34%] -rotate-[14deg] opacity-85",
    priority: true,
  },
  {
    src: "/mockups/predictx-mockup-1.png",
    alt: "PredictX home app screen",
    className: "left-1/2 top-0 z-20 w-[48%] -translate-x-1/2 rotate-0",
    priority: true,
  },
  {
    src: "/mockups/predictx-mockup-4.png",
    alt: "PredictX prediction app screen",
    className:
      "right-[17%] top-[14%] z-10 w-[34%] rotate-[14deg] opacity-88",
    priority: true,
  },
];

function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute aspect-[9/16] rounded-[1.9rem] bg-white shadow-xl shadow-ink/10 ring-[5px] ring-ink drop-shadow-[0_30px_55px_rgba(91,124,255,0.12)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 42vw, 20vw"
          className="object-cover object-bottom"
        />
        <div className="pointer-events-none absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] shadow-[0_1px_0_rgba(255,255,255,0.72)_inset]" />
      </div>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#ebe6dc] px-3 pb-7 pt-24 sm:px-6 sm:pt-28 lg:px-10">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid min-h-[68vh] max-w-7xl items-center overflow-hidden rounded-[1.75rem] bg-surface px-5 py-9 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] sm:rounded-[3.25rem] sm:px-12 sm:py-10 lg:min-h-[610px] lg:grid-cols-[1fr_1.05fr_1fr] lg:px-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,1),transparent_30%),radial-gradient(circle_at_50%_54%,rgba(234,231,255,0.38),transparent_32%),radial-gradient(circle_at_48%_82%,rgba(91,124,255,0.1),transparent_34%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(var(--color-ink)_1px,transparent_1px),linear-gradient(90deg,var(--color-ink)_1px,transparent_1px)] [background-size:42px_42px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.54) 42%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.54) 42%, transparent 80%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:radial-gradient(var(--color-ink)_0.7px,transparent_0.7px)] [background-size:6px_6px]" />
        <div className="pointer-events-none absolute left-1/2 top-[46%] h-80 w-[34rem] -translate-x-1/2 rounded-full bg-lavender-2/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-1/2 h-48 w-[38rem] -translate-x-1/2 rounded-full bg-[#5B7CFF]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(42,23,22,0.035)_100%)]" />

        <div className="relative z-10 order-2 mx-auto max-w-[25rem] text-center lg:order-1 lg:mx-0 lg:text-left">
          <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-px w-16 bg-gradient-to-r from-ink/12 to-transparent lg:block" />
          <h1 className="text-[2.45rem] font-extrabold uppercase leading-[0.92] tracking-tight text-ink min-[390px]:text-4xl sm:text-5xl lg:text-[2.65rem]">
            Pure Sports
            <br />
            <span className="mt-2 inline-block rounded-xl bg-[#E08BFF] px-2 pb-1 text-ink shadow-[0_12px_30px_rgba(224,139,255,0.22)]">
              Intelligence.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[17.5rem] text-sm font-semibold leading-6 text-text-3 lg:mx-0">
            No bets, no fantasy, no noise - Just data driven prediction from AI
            models and real analysis
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={appLinks.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PredictX on Google Play"
              className="group rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              <PlayStoreBadge />
            </a>
          </div>
          <SocialLinks align="center" className="mt-7 lg:items-start" />
        </div>

        <div className="relative z-10 order-1 mx-auto my-7 h-[292px] w-full max-w-[360px] sm:my-8 sm:h-[370px] sm:max-w-[455px] lg:order-2 lg:my-0 lg:h-[430px] lg:max-w-[520px]">
          <div className="absolute left-1/2 top-[14%] h-64 w-80 -translate-x-1/2 rounded-full bg-lavender-2/45 blur-3xl" />
          <div className="absolute left-1/2 top-[28%] h-56 w-64 -translate-x-1/2 rounded-full bg-[#5B7CFF]/10 blur-3xl" />
          {phones.map((phone) => (
            <PhoneFrame key={phone.src} {...phone} />
          ))}
          <div className="absolute left-1 top-[59%] z-30 rounded-full border border-white/70 bg-white/66 px-2.5 py-1.5 text-[10px] font-extrabold text-ink shadow-[0_14px_38px_rgba(42,23,22,0.1)] backdrop-blur-xl sm:left-[5%] sm:px-3 sm:py-2 sm:text-[11px]">
            Live Match
          </div>
          <div className="absolute right-1 top-[38%] z-30 max-w-[8.2rem] rounded-full border border-white/70 bg-white/66 px-2.5 py-1.5 text-[10px] font-extrabold text-ink shadow-[0_14px_38px_rgba(42,23,22,0.1)] backdrop-blur-xl sm:right-[2%] sm:max-w-none sm:px-3 sm:py-2 sm:text-[11px]">
            AI Confidence 96%
          </div>
          <div className="absolute bottom-[16%] left-1/2 z-30 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/62 px-3 py-2 text-[11px] font-extrabold text-ink shadow-[0_14px_38px_rgba(42,23,22,0.1)] backdrop-blur-xl sm:block">
            Prediction Ready
          </div>
          <div className="absolute bottom-4 left-1/2 h-10 w-64 -translate-x-1/2 rounded-full bg-ink/10 blur-2xl" />
        </div>

        <div className="relative z-10 order-3 mx-auto max-w-[18rem] text-center lg:mx-0 lg:justify-self-end lg:text-right">
          <div className="pointer-events-none absolute -left-10 top-1/2 hidden h-px w-16 bg-gradient-to-l from-ink/12 to-transparent lg:block" />
          <h2 className="text-lg font-extrabold uppercase leading-tight tracking-tight text-text-3 sm:text-xl">
            The best{" "}
            <span className="rounded-xl bg-[#8BEA4F] px-1.5 py-0.5 text-text-2 shadow-[0_12px_28px_rgba(139,234,79,0.2)]">
              Experience
            </span>
            <br />
            in sports intelligence
          </h2>
          <p className="mt-4 text-sm font-semibold italic leading-6 text-text-3 sm:text-base">
            Verified accuracy on every pick, every month
          </p>
        </div>
      </motion.div>
    </section>
  );
}
