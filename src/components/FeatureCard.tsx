"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { Feature } from "@/data/features";
import { FeatureIcon } from "./FeatureIcon";
import { FeatureInfographic } from "./FeatureInfographic";

const accentClasses: Record<Feature["accentColor"], string> = {
  lavender: "bg-lavender",
  surface: "bg-surface",
  sage: "bg-sage",
};

const sizeClasses = [
  "min-h-[19rem]",
  "min-h-[19rem]",
  "min-h-[19rem]",
  "min-h-[19rem]",
  "min-h-[19rem]",
  "min-h-[19rem]",
];

export function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      className={`group relative overflow-hidden rounded-3xl border border-border p-6 shadow-[0_1px_0_rgba(42,23,22,0.03)] transition-shadow duration-[250ms] ease-out hover:shadow-[0_18px_45px_rgba(42,23,22,0.08)] focus-within:shadow-[0_18px_45px_rgba(42,23,22,0.08)] sm:p-7 ${
        accentClasses[feature.accentColor]
      } ${sizeClasses[index] ?? "min-h-[20rem]"}`}
    >
      <FeatureInfographic name={feature.infographic} />

      <div className="relative z-10 flex h-full flex-col">
        <FeatureIcon name={feature.icon} />

        <div className="mt-4 text-xs font-bold uppercase tracking-widest text-text-3">
          {feature.category}
        </div>

        <h3 className="mt-2 max-w-md text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-3xl">
          {feature.title}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-text-2 sm:line-clamp-2">
          {feature.description}
        </p>

        <ul className="mt-4 grid gap-1.5 text-sm font-semibold text-ink/80">
          {feature.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white/60">
                <Check aria-hidden="true" className="h-2.5 w-2.5" />
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
