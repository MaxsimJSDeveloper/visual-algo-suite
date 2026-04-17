import { bubbleSort, insertionSort, quickSort, selectionSort } from "@/features/sorting";
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
  selection: {
    id: "selection",
    name: "Selection Sort",
    fn: selectionSort,
  },
  quick: {
    id: "quick",
    name: "Quick Sort",
    fn: quickSort,
  },
};

export const sortingNavItems = Object.values(SORTING_ALGORITHMS).map(
  (algo) => ({
    id: algo.id,
    label: algo.name,
  }),
);
