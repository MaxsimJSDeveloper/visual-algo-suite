import type { AlgoFn } from "@/shared/lib/algoEngine/types";

export const quickSort: AlgoFn = async (fruits, controller) => {
  const arr = [...fruits];
  const n = arr.length;
  const sortedIndices = new Set<number>();

  const partition = async (low: number, high: number) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      controller.setActiveIndices([j, high, i + 1]);
      await controller.wait();

      controller.recordComparison();
      if (arr[j].price < pivot.price) {
        i++;
        controller.recordSwap();
        [arr[i], arr[j]] = [arr[j], arr[i]];
        controller.updateFruits([...arr]);
      }
    }

    controller.recordSwap();
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    controller.updateFruits([...arr]);

    return i + 1;
  };

  const sort = async (low: number, high: number) => {
    if (low <= high) {
      const pi = await partition(low, high);

      sortedIndices.add(pi);
      controller.setSuccessIndices([...sortedIndices]);

      await sort(low, pi - 1);
      await sort(pi + 1, high);
    }
  };

  await sort(0, n - 1);

  controller.setSuccessIndices(arr.map((_, i) => i));
  controller.setActiveIndices([]);
};
