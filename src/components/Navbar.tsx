"use client";

import { Download, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { appLinks } from "@/data/links";
import { LogoLink } from "./LogoWordmark";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Screens", href: "/#showcase" },
  { label: "Accuracy", href: "/#accuracy" },
];

function Logo() {
  return (
    <LogoLink
      variant="light"
      className="shrink-0"
      logoClassName="h-auto w-[150px] sm:w-[200px]"
    />
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={`group relative rounded-full px-1 text-sm font-medium text-white/58 transition duration-150 hover:-translate-y-px hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
            index === 0 ? "text-white" : ""
          }`}
        >
          {item.label}
          <span
            className={`absolute -bottom-2 left-1/2 h-1 rounded-full bg-white transition-all duration-150 group-hover:w-5 group-hover:-translate-x-1/2 ${
              index === 0 ? "w-5 -translate-x-1/2" : "w-0"
            }`}
          />
        </a>
      ))}
    </>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 border-none bg-transparent px-3 pt-4 shadow-none sm:px-6 sm:pt-5">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto mx-auto flex max-w-[1280px] items-center justify-between rounded-full border border-white/10 bg-[linear-gradient(145deg,#2b1917,#201210_58%,#2a1716)] px-3 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] backdrop-blur-xl transition-all duration-300 sm:px-5 lg:px-6 ${
          isScrolled
            ? "h-[62px] shadow-[0_18px_56px_rgba(42,23,22,0.24)] backdrop-blur-2xl sm:h-[66px]"
            : "h-[66px] shadow-[0_16px_46px_rgba(42,23,22,0.2)] sm:h-[72px]"
        }`}
      >
        <Logo />

        <div className="hidden h-8 w-px bg-white/10 lg:block" />

        <nav className="hidden items-center gap-8 md:flex lg:gap-9">
          <NavLinks />
        </nav>

        <motion.a
          href={appLinks.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PredictX on Google Play"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
          className="hidden h-[46px] items-center gap-2 rounded-full border border-white/80 bg-white px-[26px] text-sm font-bold text-ink shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition duration-150 hover:bg-[#fff7ef] hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:inline-flex"
        >
          <Download className="h-4 w-4" />
          Download App
        </motion.a>

        <div className="flex items-center gap-1.5 md:hidden">
          <a
            href={appLinks.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get PredictX now on Google Play"
            className="inline-flex h-11 min-w-16 items-center justify-center rounded-full border border-white/80 bg-white px-3 text-[11px] font-extrabold text-ink shadow-[0_10px_26px_rgba(0,0,0,0.14)] transition hover:-translate-y-px hover:bg-[#fff7ef] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-20 sm:px-4 sm:text-xs"
          >
            Get Now
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white shadow-[0_10px_26px_rgba(0,0,0,0.16)] transition hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.div>

      {isOpen ? (
        <div className="pointer-events-auto fixed inset-0 z-[-1] bg-ink/35 backdrop-blur-sm md:hidden">
          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-4 top-24 w-[min(calc(100vw-2rem),22rem)] rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,#2b1917,#201210_58%,#2a1716)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-5 px-2 py-3">
              <NavLinks onNavigate={() => setIsOpen(false)} />
            </nav>
            <a
              href={appLinks.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PredictX on Google Play"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full border border-white/80 bg-white px-7 text-sm font-bold text-ink shadow-[0_12px_32px_rgba(0,0,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Download className="h-4 w-4" />
              Download App
            </a>
          </motion.aside>
        </div>
      ) : null}
    </header>
  );
}
