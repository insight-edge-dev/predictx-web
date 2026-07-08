import type { ReactNode } from "react";

import type { FeatureInfographic as FeatureInfographicName } from "@/data/features";

function AiPredictionGraphic() {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute left-2 top-8 h-3 w-3 rounded-full bg-ink/20" />
      <div className="absolute left-14 top-3 h-4 w-4 rounded-full bg-ink/25" />
      <div className="absolute right-8 top-12 h-3 w-3 rounded-full bg-ink/20" />
      <div className="absolute bottom-5 left-20 h-2.5 w-2.5 rounded-full bg-ink/25" />
      <div className="absolute left-5 top-10 h-px w-16 rotate-[-30deg] bg-ink/15" />
      <div className="absolute left-16 top-7 h-px w-16 rotate-[28deg] bg-ink/15" />
      <div className="absolute bottom-8 left-8 h-px w-20 rotate-[16deg] bg-ink/15" />
      <div className="absolute bottom-0 left-0 flex h-9 w-full items-end gap-1.5">
        {[34, 48, 26, 62, 42, 76, 54].map((height, index) => (
          <span
            key={index}
            className="w-2 rounded-full bg-ink/20"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function ExpertPicksGraphic() {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute left-0 top-2 h-16 w-12 rounded-2xl border border-ink/15 bg-white/40" />
      <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-ink/20" />
      <div className="absolute left-3 top-12 h-2 w-6 rounded-full bg-ink/15" />
      <div className="absolute right-0 top-0 h-20 w-20 rounded-3xl border border-ink/15 bg-white/40 p-3">
        <div className="h-2 w-10 rounded-full bg-ink/18" />
        <div className="mt-2 h-2 w-8 rounded-full bg-ink/12" />
        <div className="mt-5 flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((item) => (
            <span key={item} className="h-2 w-2 rounded-full bg-ink/25" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 left-8 h-8 w-20 rounded-full border border-ink/15 bg-white/50">
        <div className="mx-auto mt-3 h-2 w-12 rounded-full bg-ink/20" />
      </div>
    </div>
  );
}

function LiveScoresGraphic() {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute right-0 top-0 h-20 w-28 rounded-3xl border border-ink/15 bg-white/45 p-3">
        <div className="flex items-center justify-between text-[10px] font-bold text-ink/50">
          <span>IND</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            LIVE
          </span>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <span className="text-2xl font-extrabold leading-none text-ink/30">
            182
          </span>
          <span className="text-xs font-bold text-ink/35">18.4 ov</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-2 flex h-8 w-8 items-center justify-center rounded-full border border-ink/15">
        <span className="h-3 w-3 rounded-full bg-ink/20" />
      </div>
      <div className="absolute bottom-7 left-6 h-px w-16 bg-ink/15" />
    </div>
  );
}

function WorldCupGraphic() {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute right-2 top-1 h-16 w-16 rounded-full border border-ink/15">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/10" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink/10" />
        <div className="absolute left-2 top-4 h-px w-12 rotate-12 bg-ink/10" />
      </div>
      <div className="absolute bottom-4 left-0 grid grid-cols-[1fr_1fr_1fr] items-center gap-2">
        <div className="space-y-2">
          <span className="block h-2 w-8 rounded-full bg-ink/18" />
          <span className="block h-2 w-8 rounded-full bg-ink/12" />
        </div>
        <div className="h-px w-8 bg-ink/15" />
        <div className="space-y-2">
          <span className="block h-2 w-8 rounded-full bg-ink/20" />
          <span className="block h-2 w-8 rounded-full bg-ink/12" />
        </div>
      </div>
      <div className="absolute bottom-0 left-7 h-8 w-px bg-ink/15" />
      <div className="absolute bottom-0 left-7 h-px w-16 bg-ink/15" />
    </div>
  );
}

function RankingsGraphic() {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute right-0 top-1 grid w-24 gap-2">
        {[1, 2, 3].map((rank, index) => (
          <div
            key={rank}
            className="flex items-center justify-between rounded-2xl border border-ink/15 bg-white/45 px-3 py-2"
          >
            <span className="text-xs font-extrabold text-ink/35">0{rank}</span>
            <span
              className="h-2 rounded-full bg-ink/18"
              style={{ width: `${44 - index * 8}px` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-2 flex items-end gap-1.5">
        {[32, 48, 72, 58].map((height, index) => (
          <span
            key={index}
            className="w-3 rounded-full bg-ink/18"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function VenueIntelGraphic() {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute right-0 top-2 h-20 w-28 rounded-[1.25rem] border border-ink/15 bg-white/40">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/10" />
        <div className="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-ink/12" />
        <div className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-ink/12" />
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/12" />
      </div>
      <div className="absolute bottom-1 left-0 flex gap-1.5">
        <span className="rounded-full border border-ink/15 bg-white/45 px-2 py-1 text-[10px] font-bold text-ink/45">
          Dry
        </span>
        <span className="rounded-full border border-ink/15 bg-white/45 px-2 py-1 text-[10px] font-bold text-ink/45">
          31&deg;
        </span>
      </div>
    </div>
  );
}

const graphics: Record<FeatureInfographicName, () => ReactNode> = {
  aiPrediction: AiPredictionGraphic,
  expertPicks: ExpertPicksGraphic,
  liveScores: LiveScoresGraphic,
  worldCup: WorldCupGraphic,
  rankings: RankingsGraphic,
  venueIntel: VenueIntelGraphic,
};

export function FeatureInfographic({
  name,
}: {
  name: FeatureInfographicName;
}) {
  const Graphic = graphics[name];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-5 right-5 z-0 opacity-[0.09]"
    >
      <Graphic />
    </div>
  );
}
