import { useState, useCallback, useRef } from "react";
import type { Fruit } from "@/entities/fruit";
import type { AlgoController, AlgoFn } from "./types";
import { toast } from "sonner";

export const useAlgorithm = (initialFruits: Fruit[], defaultSpeed: number) => {
  const [fruits, setFruits] = useState<Fruit[]>(initialFruits);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [successIndices, setSuccessIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeedState] = useState(defaultSpeed);

  const speedRef = useRef(defaultSpeed);
  const abortControllerRef = useRef<AbortController | null>(null);

  const stop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsRunning(false);
      setActiveIndices([]);
    }
  }, []);

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

    const stopController = new AbortController();
    abortControllerRef.current = stopController;

    setIsRunning(true);
    setActiveIndices([]);
    setSuccessIndices([]);

    const controller: AlgoController = {
      updateFruits: (newFruits) => setFruits([...newFruits]),
      setActiveIndices: (indices) => setActiveIndices(indices),
      setSuccessIndices: (indices) => setSuccessIndices(indices),
      wait: () =>
        new Promise((resolve, reject) => {
          if (stopController.signal.aborted) {
            return reject(new Error("Stop"));
          }

          const timeout = setTimeout(resolve, speedRef.current);

          stopController.signal.addEventListener(
            "abort",
            () => {
              clearTimeout(timeout);
              reject(new Error("Stop"));
            },
            { once: true },
          );
        }),
    };

    try {
      const result = await algo(fruits, controller, targetPrice);
      if (targetPrice !== undefined) {
        if (result !== -1) {
          toast.success(
            `Fruit with price $${targetPrice} found at index ${result}!`,
          );
        } else {
          toast.warning(`Fruit with price $${targetPrice} not found.`);
        }
      } else {
        toast.success("Sorting completed successfully!");
      }
    } catch (e) {
      if (e instanceof Error && e.message === "Stop") {
        toast.info("Algorithm stopped manually.");
      } else {
        toast.error("An error occurred during execution.");
      }
    } finally {
      setIsRunning(false);
      abortControllerRef.current = null;
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
    stop,
  };
};
