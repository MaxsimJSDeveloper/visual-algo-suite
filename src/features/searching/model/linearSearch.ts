import type { Fruit } from "@/entities/fruit";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const linearSearch = async (
  fruits: Fruit[],
  targetPrice: number,
  setActiveIndex: (index: number | null) => void,
  setFoundIndex: (index: number | null) => void,
  speed: number,
) => {
  setFoundIndex(null);

  for (let i = 0; i < fruits.length; i++) {
    setActiveIndex(i);
    await delay(speed);

    if (fruits[i].price === targetPrice) {
      setFoundIndex(i);
      setActiveIndex(null);
      return i;
    }
  }

  setActiveIndex(null);
  return -1;
};
