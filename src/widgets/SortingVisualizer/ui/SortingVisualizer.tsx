import { FruitCard, type Fruit } from "@/entities/fruit";

interface SortingVisualizerProps {
  fruits: Fruit[];
  activeIndices: number[];
  sortedIndices: number[];
}

export const SortingVisualizer = ({
  fruits,
  activeIndices,
  sortedIndices,
}: SortingVisualizerProps) => {
  return (
    <div className="flex items-end justify-center gap-3 h-[450px] w-full px-4">
      {fruits.map((fruit, index) => (
        <FruitCard
          key={fruit.id}
          fruit={fruit}
          isActive={activeIndices.includes(index)}
          isSorted={sortedIndices.includes(index)}
        />
      ))}
    </div>
  );
};
