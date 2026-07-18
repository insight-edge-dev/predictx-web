"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LogoWordmark } from "@/components/LogoWordmark";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.insideedge.cricvora&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn1fOPh8u0NHsQ7jskVxpvzw1k_toabCVngAcQvM79AHd6dconcsKK_F4YjQE_aem_c49TtxF0keeS8BtKytfhlA";
const DISPLAY_DELAY_MS = 1_000;

const subscribeToClientEnvironment = () => () => undefined;

function PredictXLogo() {
  return (
    <div
      aria-hidden="true"
      className="relative grid h-16 w-[108px] shrink-0 place-items-center overflow-hidden rounded-[18px] border border-white/60 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-[72px] sm:w-[124px] sm:rounded-[21px]"
    >
      <div className="absolute -right-5 -top-5 size-16 rounded-full bg-blue-500/10 blur-2xl" />
      <LogoWordmark className="relative w-[88px] sm:w-[102px]" />
    </div>
  );
}

function GooglePlayMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 36" className="h-7 w-auto">
      <path d="M1.6 2.3 18.8 18 1.7 33.8A4.3 4.3 0 0 1 .2 30.5V5.6c0-1.3.5-2.4 1.4-3.3Z" fill="#31D1F6" />
      <path d="m23.7 13.5-4.9 4.5L1.6 2.3A4 4 0 0 1 6.2 2l17.5 11.5Z" fill="#33D087" />
      <path d="m23.8 22.5-17.6 11.6a4 4 0 0 1-4.5-.3L18.8 18l5 4.5Z" fill="#FFCC32" />
      <path d="M30 17.6c.7.4 1.1 1.1 1.1 1.9 0 .8-.4 1.5-1.1 1.9l-6.2 4.1-5-4.5 5-4.5 6.2 4.1Z" fill="#F45B5B" transform="translate(0 -2)" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function InstallAppModal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isClient = useSyncExternalStore(
    subscribeToClientEnvironment,
    () => true,
    () => false,
  );

  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
      setIsOpen(true);
    }, DISPLAY_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [closeModal, isOpen]);

  if (!isClient) return null;

  const backdropTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.16 };
  const modalTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#02050b]/72 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={backdropTransition}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="install-app-title"
            aria-describedby="install-app-description"
            className="relative my-auto w-full max-w-[440px] overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(145deg,rgba(29,37,52,0.94),rgba(10,15,25,0.96))] p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[32px] sm:p-7"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 10 }}
            transition={modalTransition}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-24 size-56 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="absolute -bottom-32 -left-24 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              aria-label="Close install app prompt"
              className="absolute right-4 top-4 z-10 grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/[0.07] text-white opacity-70 transition-[background-color,border-color,box-shadow,filter,opacity] duration-[220ms] ease-out hover:border-white/15 hover:bg-white/[0.12] hover:brightness-[1.03] hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:top-5"
            >
              <CloseIcon />
            </button>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4 pr-12">
                <PredictXLogo />
                <div>
                  <p className="text-sm font-bold tracking-tight text-white">PredictX</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-white/60">
                    <span className="text-amber-300">4.9 ★</span>
                    <span aria-hidden="true" className="size-1 rounded-full bg-white/25" />
                    <span>Trusted by football fans</span>
                  </div>
                </div>
              </div>

              <div className="mb-7">
                <h2 id="install-app-title" className="text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[2.4rem]">
                  Predict Smarter.
                </h2>
                <p id="install-app-description" className="mt-3 text-[0.94rem] font-medium leading-6 text-white/65 sm:text-base">
                  Get instant AI football predictions, live match alerts, and exclusive features inside the PredictX app.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={PLAY_STORE_URL}
                  className="group flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-white bg-white px-5 py-3 text-[#080c14] shadow-[0_14px_35px_rgba(0,0,0,0.24)] transition-[background-color,border-color,box-shadow,filter] duration-[220ms] ease-out hover:border-white/95 hover:bg-white/95 hover:brightness-[1.03] hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <GooglePlayMark />
                  <span className="text-left leading-none">
                    <span className="block text-[0.62rem] font-bold uppercase tracking-[0.09em] text-black/55">Get it on</span>
                    <span className="mt-1 block text-[1.02rem] font-extrabold tracking-[-0.025em]">Google Play</span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={closeModal}
                  className="min-h-12 w-full cursor-pointer rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white/80 transition-[background-color,border-color,box-shadow,filter] duration-[220ms] ease-out hover:border-white/15 hover:bg-white/[0.09] hover:brightness-[1.03] hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Continue on Website
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
