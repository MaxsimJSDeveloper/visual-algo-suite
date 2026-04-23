import type { AlgoFn } from "@/shared/lib/algoEngine/types";

export const insertionSort: AlgoFn = async (fruits, controller) => {
  const arr = [...fruits];
  const n = arr.length;

  controller.setSuccessIndices([0]);

  for (let i = 1; i < n; i++) {
    let j = i;
    controller.setActiveIndices([j]);
    await controller.wait();

    controller.recordComparison();
    while (j > 0 && arr[j - 1].price > arr[j].price) {
      controller.setActiveIndices([j - 1, j]);
      await controller.wait();

      controller.recordSwap();
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];

      controller.updateFruits([...arr]);
      j--;

      if (j > 0) controller.recordComparison();
    }

    const sortedRange = Array.from({ length: i + 1 }, (_, index) => index);
    controller.setSuccessIndices(sortedRange);

    controller.setActiveIndices([]);
    await controller.wait();
  }
};
