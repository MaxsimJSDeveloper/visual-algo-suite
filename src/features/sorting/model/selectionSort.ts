import type { AlgoFn } from "@/shared/lib/algoEngine/types";

export const selectionSort: AlgoFn = async (fruits, controller) => {
  const arr = [...fruits];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    controller.setActiveIndices([i]);
    await controller.wait();

    for (let j = i + 1; j < n; j++) {
      controller.setActiveIndices([i, j, minIdx]);
      await controller.wait();

      controller.recordComparison();
      if (arr[j].price < arr[minIdx].price) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      controller.recordSwap();
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      controller.updateFruits([...arr]);
    }

    controller.setSuccessIndices(Array.from({ length: i + 1 }, (_, k) => k));
    controller.setActiveIndices([]);
    await controller.wait();
  }
};
