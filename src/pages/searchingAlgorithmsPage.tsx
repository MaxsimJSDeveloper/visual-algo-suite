import { useState } from "react";
import { createFruitArr } from "@/entities/fruit";
import { SortingVisualizer } from "@/widgets/SortingVisualizer";
import { linearSearch } from "@/features/searching/model/linearSearch";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";

const SearchingAlgorithmsPage = () => {
  const [fruits, setFruits] = useState(() => createFruitArr(12));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [targetPrice, setTargetPrice] = useState<number>(fruits[4].price);

  const handleStartSearch = async () => {
    setIsSearching(true);
    await linearSearch(fruits, targetPrice, setActiveIndex, setFoundIndex, 200);
    setIsSearching(false);
  };

  const handleRegenerate = () => {
    const newFruits = createFruitArr(12);
    setFruits(newFruits);
    setTargetPrice(newFruits[Math.floor(Math.random() * 12)].price);
    setFoundIndex(null);
  };

  return (
    <div className="p-8 space-y-10">
      <Title as="h1">Search Laboratory 🔍</Title>

      <div className="flex items-center gap-6 bg-brand-card/20 p-6 rounded-2xl border border-slate-800">
        <div className="space-y-1 text-slate-400">
          <p className="text-xs uppercase tracking-wider font-bold">
            Target Price:
          </p>
          <p className="text-2xl text-brand-accent font-mono font-bold">
            ${targetPrice}
          </p>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleStartSearch} disabled={isSearching}>
            {isSearching ? "Searching..." : "Start Linear Search"}
          </Button>
          <Button onClick={handleRegenerate} disabled={isSearching}>
            Regenerate
          </Button>
        </div>
      </div>

      <div className="bg-brand-card/30 border border-slate-800 rounded-3xl p-10 flex items-center justify-center min-h-[500px]">
        <SortingVisualizer
          fruits={fruits}
          activeIndices={activeIndex !== null ? [activeIndex] : []}
          sortedIndices={foundIndex !== null ? [foundIndex] : []}
        />
      </div>
    </div>
  );
};

export default SearchingAlgorithmsPage;
