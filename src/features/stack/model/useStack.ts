import { useState } from "react";
import { createFruitArr } from "@/entities/fruit";
import type { Fruit } from "@/entities/fruit";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useStack = () => {
  const [stack, setStack] = useState<Fruit[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const push = async () => {
    if (isAnimating || stack.length >= 10) return;
    setIsAnimating(true);

    const newFruit = createFruitArr(1)[0];

    setStack((prev) => [...prev, newFruit]);

    setActiveIndices([stack.length]);
    await delay(400);
    setActiveIndices([]);

    setIsAnimating(false);
  };

  const pop = async () => {
    if (isAnimating || stack.length === 0) return;
    setIsAnimating(true);

    // Ефект: підсвічуємо верхівку стеку перед тим, як її знищити
    setActiveIndices([stack.length - 1]);
    await delay(400);

    // Видаляємо останній елемент
    setStack((prev) => prev.slice(0, -1));
    setActiveIndices([]);

    setIsAnimating(false);
  };

  return { stack, push, pop, isAnimating, activeIndices };
};
