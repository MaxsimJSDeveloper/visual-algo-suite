import type { Fruit } from "../model/types";

export type FruitStatus = "default" | "active" | "success";

interface FruitCardProps {
  fruit: Fruit;
  status?: FruitStatus;
}

export const FruitCard = ({ fruit, status = "default" }: FruitCardProps) => {
  const statusStyles = {
    default: "border-slate-800",
    active:
      "border-yellow-400 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.3)] scale-105 z-10",
    success: "border-green-400 bg-green-400/10 opacity-90",
  };

  const textStyles = {
    default: "text-slate-500",
    active: "text-yellow-400",
    success: "text-green-400",
  };

  return (
    <div
      className={`relative flex flex-col w-16 transition-all duration-200`}
      style={{ height: `${60 + fruit.price * 2}px` }}
    >
      <div
        className={`w-full flex items-center justify-center text-3xl rounded-t-xl border-t border-x ${fruit.color} ${statusStyles[status]} flex-1 transition-colors`}
      >
        {fruit.emoji}
      </div>

      <div
        className={`w-full py-1 text-center bg-slate-900 border-x border-b rounded-b-lg transition-colors ${statusStyles[status]}`}
      >
        <span
          className={`text-[10px] font-mono font-bold ${textStyles[status]}`}
        >
          ${fruit.price}
        </span>
      </div>
    </div>
  );
};
