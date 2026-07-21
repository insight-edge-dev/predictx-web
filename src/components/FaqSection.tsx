"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { faqs } from "@/data/faq";

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(255,91,99,0.08)] blur-3xl"
      />

      <div className="mx-auto max-w-3xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-[rgba(255,91,99,0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-live)]">
            Clear the confusion
          </p>
          <h2
            id="faq-title"
            className="mt-4 text-3xl font-extrabold tracking-[-0.045em] text-[var(--color-ink)] sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">
            Everything you need to know about PredictX predictions, coverage,
            and how the app works.
          </p>
        </header>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[rgba(42,23,22,0.08)] bg-white/90 shadow-[0_8px_24px_rgba(42,23,22,0.035)] backdrop-blur-sm"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[var(--color-ink)] transition-[background-color,box-shadow,filter] duration-[220ms] ease-out hover:bg-[rgba(248,246,243,0.72)] hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-live)] sm:px-6"
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="grid size-6 shrink-0 place-items-center rounded-full border border-[rgba(42,23,22,0.08)] bg-white text-[var(--color-muted)]"
                    >
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mx-5 border-t border-[rgba(42,23,22,0.07)] pb-5 pt-4 text-sm leading-6 text-[var(--color-muted)] sm:mx-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside
          aria-label="PredictX support"
          className="relative mt-8 overflow-hidden rounded-2xl border border-[rgba(42,23,22,0.08)] bg-white/90 p-5 shadow-[0_14px_36px_rgba(42,23,22,0.06)] backdrop-blur-sm sm:p-6"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 bg-[var(--color-live)]"
          />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] text-white shadow-sm"
              >
                <MessageCircle size={19} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-ink)]">
                  Still have questions?
                </h3>
                <p className="mt-1 text-xs leading-5 text-[var(--color-muted)] sm:text-sm">
                  Can&apos;t find the answer you&apos;re looking for? Let&apos;s
                  talk.
                </p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="inline-flex min-h-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[rgba(42,23,22,0.1)] bg-white px-4 text-xs font-bold text-[var(--color-ink)] shadow-sm transition-[background-color,border-color,box-shadow,filter] duration-[220ms] ease-out hover:border-[rgba(42,23,22,0.18)] hover:bg-[var(--color-bg)] hover:shadow-md hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-live)] focus-visible:ring-offset-2"
            >
              Message Support
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
