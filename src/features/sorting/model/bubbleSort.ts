import { type Fruit } from "@/entities/fruit";
import type { AlgoFn } from "@/shared/lib/algoEngine/types";

export const bubbleSort: AlgoFn = async (fruits: Fruit[], controller) => {
  const arr = [...fruits];
  const sorted: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      controller.setActiveIndices([j, j + 1]);
      await controller.wait();

      if (arr[j].price > arr[j + 1].price) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        controller.updateFruits([...arr]);
      }
    }
    sorted.push(arr.length - i - 1);
    controller.setSuccessIndices([...sorted]);
  }

  controller.setActiveIndices([]);
};
