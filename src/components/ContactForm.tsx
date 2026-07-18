"use client";

import { Mail, Send } from "lucide-react";
import type { FormEvent } from "react";

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-border bg-white/80 px-4 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(42,23,22,0.035)] outline-none transition placeholder:text-text-3/65 hover:border-ink/20 focus:border-[#176bff]/50 focus:ring-4 focus:ring-[#176bff]/10 disabled:cursor-not-allowed disabled:opacity-60";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = `PredictX website enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:support@predictxsports.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(234,231,255,0.55))] shadow-[0_28px_80px_rgba(42,23,22,0.08)] sm:rounded-[36px]">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative overflow-hidden bg-ink px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-16">
            <div aria-hidden="true" className="absolute -right-20 -top-20 size-64 rounded-full bg-[#176bff]/25 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-20 size-64 rounded-full bg-violet-400/15 blur-3xl" />

            <div className="relative">
              <div className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <Mail aria-hidden="true" className="size-5" />
              </div>
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.22em] text-white/50">
                Contact PredictX
              </p>
              <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                Let&apos;s talk football intelligence.
              </h2>
              <p className="mt-5 max-w-md text-sm font-medium leading-7 text-white/65 sm:text-base">
                Questions, feedback, or partnership ideas? Send us a message and our team will get back to you.
              </p>
              <a
                href="mailto:support@predictxsports.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Mail aria-hidden="true" className="size-4" />
                support@predictxsports.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-5 py-8 sm:px-10 sm:py-12 lg:px-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-extrabold text-ink">
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  placeholder="Your name"
                  className={fieldClassName}
                />
              </label>

              <label className="text-sm font-extrabold text-ink">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className={fieldClassName}
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-extrabold text-ink">
              Message
              <textarea
                name="message"
                rows={6}
                required
                minLength={10}
                maxLength={3000}
                placeholder="How can we help?"
                className={`${fieldClassName} min-h-36 resize-y leading-6`}
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(42,23,22,0.2)] transition-[background-color,border-color,box-shadow,filter] duration-[220ms] ease-out hover:border-ink/90 hover:bg-ink/95 hover:brightness-[1.03] hover:shadow-[0_18px_38px_rgba(42,23,22,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <Send aria-hidden="true" className="size-4" />
                Send Message
              </button>

              <p className="text-xs font-semibold text-text-3 sm:text-right">
                Opens your email app to finish sending.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
