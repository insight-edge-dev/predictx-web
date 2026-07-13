import { appLinks } from "@/data/links";
import { LogoWordmark } from "./LogoWordmark";
import { PlayStoreBadge } from "./SocialLinks";

export function DownloadCta() {
  return (
    <section
      id="download"
      className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-16"
    >
      <div className="mx-auto mb-6 flex h-16 w-[min(18rem,80vw)] items-center justify-center rounded-2xl bg-white px-5 shadow-[0_18px_48px_rgba(42,23,22,0.08)] ring-1 ring-border">
        <LogoWordmark className="h-auto w-full" />
      </div>
      <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
        Get PredictX now
      </h2>
      <p className="mx-auto mb-8 max-w-sm italic text-text-3">
        Know before the match starts.
      </p>
      <a
        href={appLinks.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download PredictX on Google Play"
        className="group inline-flex rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <PlayStoreBadge />
      </a>
      <p className="mt-3 text-sm text-text-3">iOS coming soon</p>
    </section>
  );
}
