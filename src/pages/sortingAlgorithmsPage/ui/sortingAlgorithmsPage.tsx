import { createFruitArr } from "@/entities/fruit";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { useAlgorithm } from "@/shared/lib/algoEngine/useAlgorithm";
import { SORTING_ALGORITHMS, sortingNavItems } from "../config";
import { Title } from "@/shared/ui/Title";
import { SubNav } from "@/shared/ui";
import { Button } from "@/shared/ui/Button";
import { useAlgoRoute } from "@/shared/lib";
import { useEffect } from "react";

const SortingAlgorithmsPage = () => {
  const { currentAlgo, RedirectFallback, isValid } = useAlgoRoute(
    SORTING_ALGORITHMS,
    "/sorting/bubble",
  );

  const { fruits, activeIndices, successIndices, isRunning, run, reset } =
    useAlgorithm(createFruitArr(10), 300);

  useEffect(() => {
    if (isValid) {
      reset(createFruitArr(10));
    }
  }, [isValid ? currentAlgo.id : null, reset]);

  if (!isValid) return RedirectFallback;

  return (
    <div className="p-8 space-y-8">
      <Title as="h1">Sorting Lab 🔬</Title>

      <SubNav
        items={sortingNavItems}
        basePath="/sorting"
        activeId={currentAlgo.id}
        disable={isRunning}
      />

      <div className="visualizer-container">
        <AlgoVisualizer
          fruits={fruits}
          activeIndices={activeIndices}
          successIndices={successIndices}
        />
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => reset(createFruitArr(10))}
          disabled={isRunning}
          variant="outline"
        >
          Regenerate
        </Button>
        <Button
          onClick={() => run(currentAlgo.fn)}
          disabled={isRunning}
          variant="success"
        >
          {isRunning ? "Running..." : `Start ${currentAlgo.name}`}
        </Button>
      </div>
    </div>
  );
};

export default SortingAlgorithmsPage;
