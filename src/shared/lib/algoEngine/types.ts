import type { Fruit } from "@/entities/fruit";

export type CodeLanguage = "python" | "csharp";

export interface AlgoController {
  updateFruits: (fruits: Fruit[]) => void;
  setActiveIndices: (indices: number[]) => void;
  setSuccessIndices: (indices: number[]) => void;
  wait: () => Promise<void>;
  recordComparison: () => void;
  recordSwap: () => void;
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
  codeSnippets?: Partial<Record<CodeLanguage, string>>;
}
