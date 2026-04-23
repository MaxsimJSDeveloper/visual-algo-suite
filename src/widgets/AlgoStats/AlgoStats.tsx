import { type FC } from "react";

interface AlgoStatsProps {
  comparisons: number;
  swaps: number;
}

const AlgoStats: FC<AlgoStatsProps> = ({ comparisons, swaps }) => {
  return (
    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 p-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-xl">
      <div className="flex items-center justify-between gap-6">
        <span className="text-slate-400 text-sm font-medium">Comparisons</span>
        <span className="text-brand-accent font-mono text-xl font-bold">
          {comparisons}
        </span>
      </div>
      <div className="flex items-center justify-between gap-6">
        <span className="text-slate-400 text-sm font-medium">
          Swaps / Writes
        </span>
        <span className="text-emerald-400 font-mono text-xl font-bold">
          {swaps}
        </span>
      </div>
    </div>
  );
};

export default AlgoStats;
