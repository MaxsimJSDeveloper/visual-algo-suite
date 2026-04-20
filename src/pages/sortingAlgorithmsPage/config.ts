import {
  bubbleSort,
  bubbleSortSnippets,
  insertionSort,
  insertionSortSnippets,
  quickSort,
  quickSortSnippets,
  selectionSort,
  selectionSortSnippets,
} from "@/features/sorting";
import type { AlgorithmConfig } from "@/shared/lib/algoEngine/types";

export const SORTING_ALGORITHMS: Record<string, AlgorithmConfig> = {
  bubble: {
    id: "bubble",
    name: "Bubble Sort",
    fn: bubbleSort,
    codeSnippets: bubbleSortSnippets,
  },
  insertion: {
    id: "insertion",
    name: "Insertion Sort",
    fn: insertionSort,
    codeSnippets: insertionSortSnippets,
  },
  selection: {
    id: "selection",
    name: "Selection Sort",
    fn: selectionSort,
    codeSnippets: selectionSortSnippets,
  },
  quick: {
    id: "quick",
    name: "Quick Sort",
    fn: quickSort,
    codeSnippets: quickSortSnippets,
  },
};

export const sortingNavItems = Object.values(SORTING_ALGORITHMS).map(
  (algo) => ({
    id: algo.id,
    label: algo.name,
  }),
);
