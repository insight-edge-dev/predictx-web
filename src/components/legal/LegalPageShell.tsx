import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { createPageStructuredData } from "@/lib/seo";

type LegalPageShellProps = {
  title: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
  canonicalPath: `/${string}`;
  dateModified?: string;
  tone?: "default" | "danger";
  children: React.ReactNode;
};

export function LegalPageShell({
  title,
  description,
  badge,
  icon,
  canonicalPath,
  dateModified,
  tone = "default",
  children,
}: LegalPageShellProps) {
  return (
    <>
      <JsonLd
        data={createPageStructuredData({
          name: title,
          description,
          path: canonicalPath,
          dateModified,
        })}
      />
      <Navbar />
      <main className="pt-28 sm:pt-32">
        <section className="px-3 sm:px-6">
          <div
            className={`relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] px-5 py-10 shadow-[0_24px_80px_rgba(42,23,22,0.08)] ring-1 ring-ink/[0.05] sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-20 lg:py-16 ${
              tone === "danger"
                ? "bg-[linear-gradient(135deg,#fff7f3,#f4e7df)]"
                : "bg-[linear-gradient(135deg,#ffffff,#eeeaff)]"
            }`}
          >
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#176BFF]/10 blur-3xl" />
            <div className="relative mx-auto max-w-4xl">
              <nav aria-label="Breadcrumb" className="mb-9">
                <ol>
                  <li className="inline-flex">
                    <Link
                      href="/"
                      className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border bg-white/70 px-4 text-sm font-bold text-text-2 shadow-sm transition-[background-color,border-color,box-shadow,filter] duration-[220ms] ease-out hover:border-ink/15 hover:bg-white/90 hover:brightness-[1.03] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to home
                    </Link>
                  </li>
                  <li className="sr-only" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_34px_rgba(23,107,255,0.22)] ${
                    tone === "danger" ? "bg-live" : "bg-[#176BFF]"
                  }`}
                >
                  {icon}
                </div>
                <div>
                  {badge ? (
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#176BFF]">
                      {badge}
                    </p>
                  ) : null}
                  <h1 className="text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                    {title}
                  </h1>
                  <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-text-2 sm:text-lg">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article className="legal-content mx-auto max-w-[820px] px-5 py-12 sm:px-8 sm:py-16">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
