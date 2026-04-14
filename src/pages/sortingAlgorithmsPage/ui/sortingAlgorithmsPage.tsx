import { useParams, Navigate } from "react-router-dom";
import { createFruitArr } from "@/entities/fruit";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { useAlgorithm } from "@/shared/lib/algoEngine/useAlgorithm";
import { SORTING_ALGORITHMS, sortingNavItems } from "../config";
import { useEffect } from "react";
import { Title } from "@/shared/ui/Title";
import { SubNav } from "@/shared/ui";
import { Button } from "@/shared/ui/Button";

export const SortingAlgorithmsPage = () => {
  const { algoId } = useParams<{ algoId: string }>();

  const currentAlgo = algoId ? SORTING_ALGORITHMS[algoId] : null;

  const { fruits, activeIndices, successIndices, isRunning, run, reset } =
    useAlgorithm(createFruitArr(10), 300);

  useEffect(() => {
    reset(createFruitArr(10));
  }, [algoId, reset]);

  if (!currentAlgo) {
    return <Navigate to="/sorting/bubble" replace />;
  }

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
          Regenerate Fruits
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
