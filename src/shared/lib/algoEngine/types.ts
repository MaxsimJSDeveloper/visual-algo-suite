import type { Fruit } from "@/entities/fruit";

export interface AlgoController {
  updateFruits: (fruits: Fruit[]) => void;
  setActiveIndices: (indices: number[]) => void;
  setSuccessIndices: (indices: number[]) => void;
  wait: () => Promise<void>;
}

export type AlgoFn = (
  fruits: Fruit[],
  controller: AlgoController,
  targetPrice?: number,
) => Promise<void | number>;

export interface AlgorithmConfig {
  id: string;
  name: string;
  fn: AlgoFn;
}
