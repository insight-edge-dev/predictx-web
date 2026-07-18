import {
  BrainCircuit,
  Globe,
  MapPinned,
  NotebookPen,
  Radio,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import type { FeatureIconName } from "@/data/features";

const icons: Record<FeatureIconName, LucideIcon> = {
  BrainCircuit,
  NotebookPen,
  Radio,
  Globe,
  TrendingUp,
  MapPinned,
};

export function FeatureIcon({ name }: { name: FeatureIconName }) {
  const Icon = icons[name];

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-ink/10 bg-white/70 text-ink transition-[background-color,border-color,box-shadow] duration-[220ms] ease-out group-hover:border-ink/15 group-hover:bg-white/85 group-hover:shadow-[0_8px_24px_rgba(42,23,22,0.08)]">
      <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.45} />
    </span>
  );
}
