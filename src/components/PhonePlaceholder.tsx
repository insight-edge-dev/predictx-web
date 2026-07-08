export function PhonePlaceholder({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`flex w-full max-w-[260px] flex-col items-center gap-3 ${className}`}>
      <div
        className={`aspect-9/19 w-full rounded-[2.5rem] border-[10px] ${dark ? "border-white/20" : "border-ink"} bg-ink shadow-2xl`}
      >
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.6rem] bg-surface">
          <div className="flex items-center justify-between px-4 pb-2 pt-3 text-[10px] font-bold text-ink">
            <span>9:41</span>
            <span className="h-2 w-14 rounded-full bg-ink/10" />
          </div>
          <div className="flex-1 space-y-3 bg-mist p-4">
            <div className="h-3 w-2/3 rounded-full bg-ink/15" />
            <div className="h-2 w-1/2 rounded-full bg-ink/10" />
            <div className="mt-4 space-y-2 rounded-2xl bg-lavender p-3">
              <div className="h-2 w-3/4 rounded-full bg-ink/20" />
              <div className="h-2 w-1/2 rounded-full bg-ink/15" />
            </div>
            <div className="space-y-2 rounded-2xl bg-sage p-3">
              <div className="h-2 w-2/3 rounded-full bg-ink/20" />
              <div className="h-2 w-1/3 rounded-full bg-ink/15" />
            </div>
            <div className="space-y-2 rounded-2xl bg-surface p-3">
              <div className="h-2 w-3/5 rounded-full bg-ink/15" />
              <div className="h-2 w-2/5 rounded-full bg-ink/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full text-center leading-tight">
        <div
          className={`text-[9px] font-bold uppercase tracking-wide ${dark ? "text-white/50" : "text-text-3"}`}
        >
          Screenshot placeholder
        </div>
        <div
          className={`text-xs font-semibold ${dark ? "text-white" : "text-ink"}`}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
