import type { AlgoFn } from "@/shared/lib/algoEngine/types";
import { createFruitArr } from "@/entities/fruit";

export const stackPush: AlgoFn = async (fruits, controller) => {
  if (fruits.length >= 10) return;

  const newFruit = createFruitArr(1)[0];
  const newStack = [...fruits, newFruit];

  controller.updateFruits(newStack);
  controller.setActiveIndices([newStack.length - 1]);
  await controller.wait();

  controller.setActiveIndices([]);
};

export const stackPop: AlgoFn = async (fruits, controller) => {
  if (fruits.length === 0) return;

  controller.setActiveIndices([fruits.length - 1]);
  await controller.wait();

  const newStack = fruits.slice(0, -1);
  controller.updateFruits(newStack);
  controller.setActiveIndices([]);
};
