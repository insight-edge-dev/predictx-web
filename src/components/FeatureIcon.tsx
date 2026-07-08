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
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-ink/10 bg-white/70 text-ink transition duration-[250ms] ease-out group-hover:-translate-y-0.5">
      <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.45} />
    </span>
  );
}
