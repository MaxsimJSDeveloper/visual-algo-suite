import {
  binarySearch,
  binarySearchSnippets,
  linearSearch,
  linearSearchSnippets,
} from "@/features/searching";
import type { AlgorithmConfig } from "@/shared/lib/algoEngine/types";

export const SEARCHING_ALGORITHMS: Record<string, AlgorithmConfig> = {
  linear: {
    id: "linear",
    name: "Linear Search",
    fn: linearSearch,
    codeSnippets: linearSearchSnippets,
  },
  binary: {
    id: "binary",
    name: "Binary Search",
    fn: binarySearch,
    codeSnippets: binarySearchSnippets,
  },
};

export const searchingNavItems = Object.values(SEARCHING_ALGORITHMS).map(
  (algo) => ({
    id: algo.id,
    label: algo.name,
  }),
);
