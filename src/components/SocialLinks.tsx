import { socialLinks } from "@/data/links";

type SocialLinksProps = {
  align?: "start" | "center";
  showLabel?: boolean;
  className?: string;
};

export function PlayStoreMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M4.2 3.2 13 12 4.2 20.8a2 2 0 0 1-.2-.9V4.1c0-.32.07-.62.2-.9z"
        fill="#34A853"
      />
      <path
        d="m13 12 2.8-2.8 3.46 1.94c.7.4.7 1.42 0 1.82L15.8 14.8 13 12z"
        fill="#FBBC04"
      />
      <path d="m4.2 3.2 11.6 6L13 12 4.2 3.2z" fill="#4285F4" />
      <path d="M4.2 20.8 13 12l2.8 2.8-11.6 6z" fill="#EA4335" />
    </svg>
  );
}

export function PlayStoreBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex min-h-14 shrink-0 items-center gap-3 rounded-2xl bg-[#111111] px-5 py-3 text-left text-white shadow-[0_16px_42px_rgba(42,23,22,0.2)] ring-1 ring-white/10 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_56px_rgba(42,23,22,0.24)] group-active:scale-[0.98] ${className}`}
    >
      <PlayStoreMark className="h-7 w-7 shrink-0" />
      <span className="grid leading-none">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/72">
          Get it on
        </span>
        <span className="mt-1 text-lg font-extrabold tracking-tight">
          Google Play
        </span>
      </span>
    </span>
  );
}

export function SocialIconButton({
  label,
  href,
  path,
}: (typeof socialLinks)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow PredictX on ${label}`}
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/46 text-ink shadow-[0_14px_36px_rgba(42,23,22,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:scale-105 hover:border-[#5B7CFF]/55 hover:bg-white/72 hover:text-[#5B7CFF] hover:shadow-[0_18px_42px_rgba(91,124,255,0.16),0_0_0_5px_rgba(91,124,255,0.08)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B7CFF]"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current transition duration-200 group-hover:scale-110"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

export function SocialLinks({
  align = "start",
  showLabel = true,
  className = "",
}: SocialLinksProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center" : "items-start"
      } ${className}`}
    >
      {showLabel ? (
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-text-3">
          Follow PredictX
        </p>
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <SocialIconButton key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
}
