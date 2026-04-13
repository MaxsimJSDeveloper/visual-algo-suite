import { createFruitArr } from "@/entities/fruit";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { linearSearch } from "@/features/searching/model/linearSearch";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useForm } from "react-hook-form";
import { useAlgorithm } from "@/shared/lib";

interface SearchForm {
  price: number;
}

const SearchingAlgorithmsPage = () => {
  const { fruits, activeIndices, successIndices, isRunning, run, reset } =
    useAlgorithm(createFruitArr(10), 150);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: { price: fruits[0]?.price || 0 },
  });

  const onSearchSubmit = (data: SearchForm) => {
    run(linearSearch, data.price);
  };

  const handleRegenerate = () => {
    const newFruits = createFruitArr(10);
    reset(newFruits);

    const randomTarget =
      newFruits[Math.floor(Math.random() * newFruits.length)].price;
    setValue("price", randomTarget);
  };

  return (
    <div className="page-container">
      <Title as="h1">Search Laboratory 🔍</Title>

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

      <div className="visualizer-container">
        <AlgoVisualizer
          fruits={fruits}
          activeIndices={activeIndices}
          successIndices={successIndices}
        />
      </div>
    </div>
  );
};

export default SearchingAlgorithmsPage;
