import { bubbleSort } from "@/features/sorting/model/bubbleSort";
import { insertionSort } from "@/features/sorting/model/insertionSort";
import type { AlgorithmConfig } from "@/shared/lib/algoEngine/types";

export const SORTING_ALGORITHMS: Record<string, AlgorithmConfig> = {
  bubble: {
    id: "bubble",
    name: "Bubble Sort",
    fn: bubbleSort,
  },
  insertion: {
    id: "insertion",
    name: "Insertion Sort",
    fn: insertionSort,
  },
};

export const sortingNavItems = Object.values(SORTING_ALGORITHMS).map(
  (algo) => ({
    id: algo.id,
    label: algo.name,
  }),
);
