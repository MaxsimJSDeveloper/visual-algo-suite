import { type Fruit } from "@/entities/fruit";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (
  fruits: Fruit[],
  setFruits: (fruits: Fruit[]) => void,
  setActiveIndices: (indices: number[]) => void,
  setSortedIndices: (indices: number[]) => void,
  speed: number,
) => {
  const arr = [...fruits];
  const n = arr.length;
  const sorted: number[] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setActiveIndices([j, j + 1]);
      await delay(speed);

      if (arr[j].price > arr[j + 1].price) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setFruits([...arr]);
      }
    }
    sorted.push(n - i - 1);
    setSortedIndices([...sorted]);
  }

  setActiveIndices([]);
};
