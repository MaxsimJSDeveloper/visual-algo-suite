import { useState } from "react";
import { createFruitArr } from "@/entities/fruit";
import { SortingVisualizer } from "@/widgets/SortingVisualizer";
import { Button } from "@/shared/ui/Button";
import { Title } from "@/shared/ui/Title";
import { bubbleSort } from "@/features/sorting/model/bubbleSort";

const SortingAlgorithmsPage = () => {
  const [fruits, setFruits] = useState(() => createFruitArr(10));
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);

  const handleRegenerate = () => {
    setFruits(createFruitArr(10));
    setActiveIndices([]);
    setSortedIndices([]);
  };

  const handleStartSort = async () => {
    setIsSorting(true);
    await bubbleSort(
      fruits,
      setFruits,
      setActiveIndices,
      setSortedIndices,
      250,
    );
    setIsSorting(false);
  };

  return (
    <div className="p-8 space-y-10">
      <Title as="h1">Sorting Lab 🔬</Title>

      <div className="bg-brand-card/30 border border-slate-800 rounded-3xl p-10 flex items-center justify-center min-h-[500px]">
        <SortingVisualizer
          fruits={fruits}
          activeIndices={activeIndices}
          sortedIndices={sortedIndices}
        />
      </div>

      <div className="flex gap-4">
        <Button onClick={handleRegenerate} disabled={isSorting}>
          Regenerate Fruits
        </Button>
        <Button
          onClick={handleStartSort}
          disabled={isSorting}
          className={
            !isSorting
              ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20"
              : ""
          }
        >
          {isSorting ? "Sorting..." : "Start Bubble Sort"}
        </Button>
      </div>
    </div>
  );
};

export default SortingAlgorithmsPage;
