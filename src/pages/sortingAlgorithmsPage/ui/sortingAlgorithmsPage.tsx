import { createFruitArr } from "@/entities/fruit";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { useAlgorithm } from "@/shared/lib/algoEngine/useAlgorithm";
import { SORTING_ALGORITHMS, sortingNavItems } from "../config";
import { Title } from "@/shared/ui/Title";
import { SubNav } from "@/shared/ui";
import { useAlgoRoute } from "@/shared/lib";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AlgoControls } from "@/widgets/AlgoControls/AlgoControls";

interface SortingForm {
  delay: number;
}

const SortingAlgorithmsPage = () => {
  const { currentAlgo, RedirectFallback, isValid } = useAlgoRoute(
    SORTING_ALGORITHMS,
    "/sorting/bubble",
  );

  const {
    fruits,
    activeIndices,
    successIndices,
    isRunning,
    run,
    reset,
    setSpeed,
  } = useAlgorithm(createFruitArr(10), 300);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SortingForm>({
    defaultValues: { delay: 300 },
  });

  const onSortSubmit = (data: SortingForm) => {
    if (!currentAlgo) return;
    setSpeed(Number(data.delay));
    run(currentAlgo.fn);
  };

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

      <AlgoControls
        isRunning={isRunning}
        onRegenerate={() => reset(createFruitArr(10))}
        onSubmit={handleSubmit(onSortSubmit)}
        submitText={`Start ${currentAlgo.name}`}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default SortingAlgorithmsPage;
