import { useState, useCallback, useRef } from "react";
import type { Fruit } from "@/entities/fruit";
import type { AlgoController, AlgoFn } from "./types";

export const useAlgorithm = (initialFruits: Fruit[], defaultSpeed: number) => {
  const [fruits, setFruits] = useState<Fruit[]>(initialFruits);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [successIndices, setSuccessIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const speedRef = useRef(defaultSpeed);
  const [speed, setSpeedState] = useState(defaultSpeed);

  const setSpeed = useCallback((newSpeed: number) => {
    speedRef.current = newSpeed;
    setSpeedState(newSpeed);
  }, []);

  const reset = useCallback((newFruits: Fruit[]) => {
    setFruits(newFruits);
    setActiveIndices([]);
    setSuccessIndices([]);
  }, []);

  const run = async (algo: AlgoFn, targetPrice?: number) => {
    if (isRunning) return;

    setIsRunning(true);
    setActiveIndices([]);
    setSuccessIndices([]);

    const controller: AlgoController = {
      updateFruits: (newFruits) => setFruits([...newFruits]),
      setActiveIndices: (indices) => setActiveIndices(indices),
      setSuccessIndices: (indices) => setSuccessIndices(indices),
      wait: () =>
        new Promise((resolve) => setTimeout(resolve, speedRef.current)),
    };

    try {
      await algo(fruits, controller, targetPrice);
    } finally {
      setIsRunning(false);
    }
  };

  return {
    fruits,
    activeIndices,
    successIndices,
    isRunning,
    speed,
    setSpeed,
    reset,
    run,
  };
};
