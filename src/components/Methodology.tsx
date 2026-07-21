import Link from "next/link";
import { BarChart3, Database, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Collect relevant match signals",
    description:
      "PredictX organizes available form, team and player performance, rankings, venue history, fixtures, scoring patterns, availability, and live match context.",
  },
  {
    icon: ScanSearch,
    title: "Compare the factors",
    description:
      "The football model compares six groups of factors and the cricket model compares seven, so a prediction reflects several signals rather than one headline statistic.",
  },
  {
    icon: BarChart3,
    title: "Calculate probability and confidence",
    description:
      "The combined signal is converted into outcome probabilities and a confidence level. PredictX presents the result with factor context instead of treating a pick as certain.",
  },
  {
    icon: ShieldCheck,
    title: "Review and update",
    description:
      "Predictions can be updated when material information changes before a match or when supported live data changes the match context. Analyst notes add human interpretation.",
  },
] as const;

export function Methodology() {
  return (
    <section
      id="methodology"
      aria-labelledby="methodology-title"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="rounded-[28px] border border-border bg-surface px-5 py-9 shadow-[0_24px_70px_rgba(42,23,22,0.06)] sm:rounded-[36px] sm:px-10 sm:py-12 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-text-3">
            Prediction methodology
          </p>
          <h2
            id="methodology-title"
            className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            How PredictX generates AI-powered predictions
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-text-2 sm:text-base">
            PredictX turns multiple sports signals into an explainable probability. The process is designed to show what supports a prediction while keeping uncertainty visible.
          </p>
        </div>

        <ol className="mt-9 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.title}
                className="rounded-3xl border border-border bg-mist/70 p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-white text-ink shadow-sm">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-text-3">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-7 text-sm font-semibold leading-6 text-text-3">
          Predictions are informational estimates, not guaranteed outcomes or betting advice. Explore the{" "}
          <Link href="/#features" className="text-ink underline decoration-ink/25 underline-offset-4">
            product features
          </Link>{" "}
          or read the{" "}
          <Link href="/#faq" className="text-ink underline decoration-ink/25 underline-offset-4">
            frequently asked questions
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
