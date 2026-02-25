import { getId } from "@/shared/utils/getId";
import { AVAILABLE_FRUITS } from "./config";
import type { Fruit } from "./types";

export function createFruitArr(count: number): Fruit[] {
  return Array.from({ length: count }, () => {
    const randomConfig =
      AVAILABLE_FRUITS[Math.floor(Math.random() * AVAILABLE_FRUITS.length)];

    return {
      ...randomConfig,
      id: getId(),
      price: Math.floor(Math.random() * 100) + 1,
    };
  });
}
