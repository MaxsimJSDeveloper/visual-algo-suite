import { createFruitArr } from "@/entities/fruit";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useForm } from "react-hook-form";
import { useAlgorithm, useAlgoRoute } from "@/shared/lib";
import { SubNav } from "@/shared/ui";
import { SEARCHING_ALGORITHMS, searchingNavItems } from "../config";
import { useEffect } from "react";

interface SearchForm {
  price: number;
}

const SearchingAlgorithmsPage = () => {
  const { currentAlgo, RedirectFallback, isValid } = useAlgoRoute(
    SEARCHING_ALGORITHMS,
    "/search/linear",
  );

  const { fruits, activeIndices, successIndices, isRunning, run, reset } =
    useAlgorithm(createFruitArr(10), 300);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: { price: 0 },
  });

  const onSearchSubmit = (data: SearchForm) => {
    if (!currentAlgo) return;
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

  useEffect(() => {
    if (isValid && currentAlgo) {
      const newFruits = createFruitArr(10);

      if (currentAlgo.id === "binary") {
        newFruits.sort((a, b) => a.price - b.price);
      }

      reset(newFruits);

      const randomTarget =
        newFruits[Math.floor(Math.random() * newFruits.length)].price;
      setValue("price", randomTarget);
    }
  }, [isValid ? currentAlgo.id : null, reset, setValue]);

  if (!isValid) return RedirectFallback;

  return (
    <div className="page-container">
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

      <div className="control-panel flex justify-between">
        <form
          onSubmit={handleSubmit(onSearchSubmit)}
          className="flex items-end gap-4"
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

          <Button type="submit" disabled={isRunning}>
            Find Fruit
          </Button>
        </form>

        <div className="block my-auto">
          <Button onClick={handleRegenerate} disabled={isRunning}>
            Regenerate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchingAlgorithmsPage;
