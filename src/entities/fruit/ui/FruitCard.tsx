import type { Fruit } from "../model/types";

interface FruitCardProps {
  fruit: Fruit;
  isActive?: boolean;
  isSorted?: boolean;
}

export const FruitCard = ({ fruit, isActive, isSorted }: FruitCardProps) => {
  return (
    <div
      className={`
        relative flex flex-col w-16 transition-all duration-200
        ${isActive ? "scale-105 z-10" : "scale-100 z-0"} 
      `}
      style={{ height: `${60 + fruit.price * 2}px` }}
    >
      <div
        className={`
          w-full flex items-center justify-center text-3xl rounded-t-xl border-t border-x
          ${fruit.color} 
          ${isActive ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.3)]" : "border-slate-800"}
          ${isSorted ? "bg-emerald-500/20 border-emerald-500/40" : ""}
          flex-1 transition-colors
        `}
      >
        {fruit.emoji}
      </div>

      <div
        className={`
          w-full py-1 text-center bg-slate-900 border-x border-b rounded-b-lg transition-colors
          ${isActive ? "border-yellow-400" : "border-slate-800"}
        `}
      >
        <span
          className={`text-[10px] font-mono font-bold ${isActive ? "text-yellow-400" : "text-slate-500"}`}
        >
          ${fruit.price}
        </span>
      </div>
    </div>
  );
};
