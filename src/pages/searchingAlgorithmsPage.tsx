import { useState } from "react";
import { createFruitArr } from "@/entities/fruit";
import { SortingVisualizer } from "@/widgets/SortingVisualizer";
import { linearSearch } from "@/features/searching/model/linearSearch";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useForm } from "react-hook-form";

interface SearchForm {
  price: number;
}

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>({
    defaultValues: { price: fruits[0]?.price || 0 },
  });

  const onSearchSubmit = (data: SearchForm) => {
    setTargetPrice(data.price);
    handleStartSearch();
  };

  return (
    <div className="p-8 space-y-10">
      <Title as="h1">Search Laboratory 🔍</Title>

      <div className="flex justify-between bg-brand-card/20 p-6 rounded-2xl border border-slate-800">
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

          <Button type="submit" disabled={isSearching}>
            Find Fruit
          </Button>
        </form>

        <div className="block my-auto">
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
