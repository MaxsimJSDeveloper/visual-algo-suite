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
        relative flex flex-col items-center justify-end w-16 transition-all duration-300
        ${isActive ? "scale-110 z-10" : "scale-100"}
      `}
      style={{ height: `${50 + fruit.price * 2}px` }}
    >
      <div
        className={`
        w-full flex items-center justify-center text-3xl rounded-t-xl border-t border-x
        ${fruit.color} 
        ${isActive ? "ring-4 ring-yellow-400 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)]" : "border-slate-700/50"}
        ${isSorted ? "bg-green-500/30 border-green-500/50" : ""}
        flex-1 transition-colors
      `}
      >
        {fruit.emoji}
      </div>

      <div
        className={`
        w-full py-1 text-center bg-slate-900 border-x border-b border-slate-700/50 rounded-b-lg
        ${isActive ? "border-yellow-400" : ""}
      `}
      >
        <span className="text-[10px] font-mono font-bold text-slate-400">
          ${fruit.price}
        </span>
      </div>

      {isActive && (
        <div className="absolute -bottom-2 w-full h-1 bg-yellow-400 blur-sm rounded-full animate-pulse" />
      )}
    </div>
  );
};
