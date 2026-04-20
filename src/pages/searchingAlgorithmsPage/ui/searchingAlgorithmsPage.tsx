import { createFruitArr } from "@/entities/fruit";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { Title } from "@/shared/ui/Title";
import { Input } from "@/shared/ui/Input";
import { useForm } from "react-hook-form";
import { useAlgorithm, useAlgoRoute } from "@/shared/lib";
import { SubNav } from "@/shared/ui";
import { SEARCHING_ALGORITHMS, searchingNavItems } from "../config";
import { lazy, Suspense, useEffect } from "react";
import { AlgoControls } from "@/widgets/AlgoControls/AlgoControls";
import { Loader } from "@/shared/ui/Loader";

interface SearchForm {
  price: number;
  delay: number;
}

const CodeViewer = lazy(() => import("@/widgets/CodeViewer/CodeViewer"));

const SearchingAlgorithmsPage = () => {
  const { currentAlgo, RedirectFallback, isValid } = useAlgoRoute(
    SEARCHING_ALGORITHMS,
    "/search/linear",
  );

  const {
    fruits,
    activeIndices,
    successIndices,
    isRunning,
    run,
    reset,
    setSpeed,
    stop,
  } = useAlgorithm(createFruitArr(10), 300);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: { price: 0, delay: 300 },
  });

  const onSearchSubmit = (data: SearchForm) => {
    if (!currentAlgo) return;
    setSpeed(Number(data.delay));
    run(currentAlgo.fn, Number(data.price));
  };

  const handleRegenerate = () => {
    const newFruits = createFruitArr(10);

    if (currentAlgo?.id === "binary") {
      newFruits.sort((a, b) => a.price - b.price);
    }

    reset(newFruits);

    const randomTarget =
      newFruits[Math.floor(Math.random() * newFruits.length)].price;
    setValue("price", randomTarget);
  };

  const algoId = isValid ? currentAlgo.id : null;

  useEffect(() => {
    if (!algoId) return;

    const newFruits = createFruitArr(10);

    if (algoId === "binary") {
      newFruits.sort((a, b) => a.price - b.price);
    }

    reset(newFruits);

    const randomTarget =
      newFruits[Math.floor(Math.random() * newFruits.length)].price;
    setValue("price", randomTarget);
  }, [algoId, reset, setValue]);

  if (!isValid) return RedirectFallback;

  return (
    <div className="page-container space-y-8">
      <Title as="h1">Search Laboratory 🔍</Title>

      <SubNav
        items={searchingNavItems}
        basePath="/search"
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
        onRegenerate={handleRegenerate}
        onSubmit={handleSubmit(onSearchSubmit)}
        submitText="Find Fruit"
        register={register}
        stop={stop}
        errors={errors}
      >
        <Input
          label="Target Price"
          type="number"
          placeholder="Enter price..."
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Too low" },
            max: { value: 100, message: "Too high" },
          })}
          error={errors.price?.message}
        />
      </AlgoControls>

      <Suspense fallback={<Loader />}>
        {currentAlgo?.codeSnippets && (
          <CodeViewer snippets={currentAlgo.codeSnippets} />
        )}
      </Suspense>
    </div>
  );
};

export default SearchingAlgorithmsPage;
