import Link from "next/link";

import { appLinks, socialLinks } from "@/data/links";
import { LogoLink } from "./LogoWordmark";
import { PlayStoreBadge, SocialIconButton } from "./SocialLinks";

const quickLinks = [
  { label: "Features", href: "/#features" },
  { label: "Methodology", href: "/#methodology" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Delete Account", href: "/delete-account" },
  { label: "Download App", href: "/#download" },
] as const;

function Logo() {
  return (
    <LogoLink
      variant="dark"
      className="shrink-0"
      logoClassName="h-auto w-[240px]"
    />
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink/52">
      {children}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-bg px-3 pb-8 pt-10 sm:px-6 lg:pt-16">
      <div className="mx-auto max-w-[1400px] rounded-[28px] bg-mist px-5 py-10 shadow-[0_24px_80px_rgba(42,23,22,0.07)] ring-1 ring-ink/[0.04] sm:rounded-[32px] sm:px-10 sm:py-16 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1.8fr] lg:gap-16">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 text-base font-medium leading-8 text-text-2">
              PredictX turns cricket and football signals, form, venues, and
              live momentum into calm AI predictions before every match.
            </p>
            <p className="mt-5 max-w-sm text-sm font-semibold leading-6 text-text-3">
              Built for fans who want intelligence, not betting noise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <nav aria-label="Quick Links">
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="mt-5 space-y-3 text-sm font-bold text-text-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Connect">
              <FooterHeading>Connect</FooterHeading>
              <ul className="mt-5 space-y-3 text-sm font-bold text-text-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow PredictX on ${link.label}`}
                      className="transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <FooterHeading>Download</FooterHeading>
              <a
                href={appLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download PredictX on Google Play"
                className="group mt-5 inline-flex cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <PlayStoreBadge className="origin-left scale-95" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <SocialIconButton key={link.label} {...link} />
            ))}
          </div>
          <p className="text-sm font-semibold text-text-3 lg:text-right">
            &copy; 2026 PredictX. Made with data, not luck.
          </p>
        </div>
      </div>
    </footer>
  );
}
