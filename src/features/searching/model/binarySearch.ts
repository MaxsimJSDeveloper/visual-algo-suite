import type { AlgoFn } from "@/shared/lib/algoEngine/types";

export const binarySearch: AlgoFn = async (fruits, controller, targetPrice) => {
  if (targetPrice === undefined) return -1;

  let left = 0;
  let right = fruits.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    controller.setActiveIndices([left, right, mid]);
    await controller.wait();

    controller.recordComparison();
    if (fruits[mid].price === targetPrice) {
      controller.setSuccessIndices([mid]);
      controller.setActiveIndices([]);
      return mid;
    } else if (fruits[mid].price < targetPrice) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  controller.setActiveIndices([]);
  return -1;
};
