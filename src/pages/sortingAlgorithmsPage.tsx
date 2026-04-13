import { createFruitArr } from "@/entities/fruit";
import { Button } from "@/shared/ui/Button";
import { Title } from "@/shared/ui/Title";
import { bubbleSort } from "@/features/sorting/model/bubbleSort";
import { useAlgorithm } from "@/shared/lib";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";

const SortingAlgorithmsPage = () => {
  const { fruits, activeIndices, successIndices, isRunning, run, reset } =
    useAlgorithm(createFruitArr(10), 150);

  const handleStartSort = () => run(bubbleSort);
  const handleRegenerate = () => reset(createFruitArr(10));

  return (
    <div className="page-container">
      <Title as="h1">Sorting Lab 🔬</Title>

      <div className="visualizer-container">
        <AlgoVisualizer
          fruits={fruits}
          activeIndices={activeIndices}
          successIndices={successIndices}
        />
      </div>

      <div className="flex gap-4">
        <Button onClick={handleRegenerate} disabled={isRunning}>
          Regenerate Fruits
        </Button>
        <Button
          onClick={handleStartSort}
          disabled={isRunning}
          variant="success"
        >
          {isRunning ? "Sorting..." : "Start Bubble Sort"}
        </Button>
      </div>
    </div>
  );
};

export default SortingAlgorithmsPage;
