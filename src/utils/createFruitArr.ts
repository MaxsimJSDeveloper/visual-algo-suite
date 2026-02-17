import { AVAILABLE_FRUITS } from "../shared/data/config";
import type { Fruit } from "../types/Fruit";
import { getId } from "./getId";

export function createFruitArr(count: number): Fruit[] {
  const fruitArr: Fruit[] = [];

  for (let i = 0; i < count; i++) {
    const randomFruit =
      AVAILABLE_FRUITS[Math.floor(Math.random() * AVAILABLE_FRUITS.length)];

    fruitArr[i] = {
      id: getId(),
      name: randomFruit.name,
      emoji: randomFruit.emoji,
      value: Math.floor(Math.random() * 100) + 1,
    };
  }

  return fruitArr;
}
