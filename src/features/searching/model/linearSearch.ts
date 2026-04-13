import type { AlgoFn } from "@/shared/lib/algoEngine/types";

export const linearSearch: AlgoFn = async (fruits, controller, targetPrice) => {
  for (let i = 0; i < fruits.length; i++) {
    controller.setActiveIndices([i]);
    await controller.wait();

    if (fruits[i].price === targetPrice) {
      controller.setSuccessIndices([i]);
      controller.setActiveIndices([]);
      return i;
    }
  }

  controller.setActiveIndices([]);
  return -1;
};
