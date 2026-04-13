import { FruitCard, type Fruit } from "@/entities/fruit";
import type { FruitStatus } from "@/entities/fruit/ui/FruitCard";

interface AlgoVisualizerProps {
  fruits: Fruit[];
  activeIndices?: number[];
  successIndices?: number[];
}

export const AlgoVisualizer = ({
  fruits,
  activeIndices = [],
  successIndices = [],
}: AlgoVisualizerProps) => {
  const getCardStatus = (index: number): FruitStatus => {
    if (activeIndices.includes(index)) return "active";
    if (successIndices.includes(index)) return "success";
    return "default";
  };

  return (
    <div className="flex items-end justify-center gap-3 h-[450px] w-full px-4">
      {fruits.map((fruit, index) => (
        <FruitCard key={fruit.id} fruit={fruit} status={getCardStatus(index)} />
      ))}
    </div>
  );
};
