"use client";

import { motion, useReducedMotion } from "framer-motion";

import { features } from "@/data/features";
import { FeatureCard } from "./FeatureCard";

export function FeatureGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <h2 className="relative z-10 mb-2 text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
        Why fans choose PredictX
      </h2>
      <p className="relative z-10 mb-10 italic text-text-3">
        Everything a cricket &amp; football fan needs, in one app.
      </p>

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.16, margin: "0px 0px -80px 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3"
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
