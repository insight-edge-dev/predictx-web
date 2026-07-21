"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const revealText =
  "PredictX turns live form, fixture pressure, player signals, and AI confidence into clear pre-match insight fans can trust before kickoff.";

function RevealWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1.7) / total;
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(42,23,22,0.20)", "rgba(42,23,22,1)"],
  );
  const y = useTransform(progress, [start, end], [10, 0]);
  const opacity = useTransform(progress, [start, end], [0.46, 1]);

  return (
    <motion.span style={{ color, y, opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

export function ScrollTextReveal() {
  const targetRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 70%", "end 40%"],
  });
  const words = revealText.split(" ");

  return (
    <section
      ref={targetRef}
      className="relative min-h-[115vh] overflow-clip bg-bg px-4 sm:min-h-[145vh] sm:px-6"
      aria-label="PredictX insight reveal"
    >
      <div className="sticky top-0 mx-auto flex min-h-screen max-w-6xl items-center py-20 sm:py-28">
        <div className="relative w-full">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[min(42rem,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender-2/45 blur-3xl" />
          <h2 className="relative z-10 max-w-5xl text-balance text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink/25 sm:text-5xl md:text-6xl lg:text-7xl">
            {shouldReduceMotion
              ? revealText
              : words.map((word, index) => (
                  <RevealWord
                    key={`${word}-${index}`}
                    word={word}
                    index={index}
                    total={words.length}
                    progress={scrollYProgress}
                  />
                )).reduce<ReactNode[]>((nodes, node, index) => {
                  if (index > 0) {
                    nodes.push(" ");
                  }
                  nodes.push(node);
                  return nodes;
                }, [])}
          </h2>
        </div>
      </div>
    </section>
  );
}
