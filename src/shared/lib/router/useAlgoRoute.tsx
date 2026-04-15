import { useParams, Navigate } from "react-router-dom";
import { type ReactNode } from "react";

type AlgoRouteResult<T> =
  | { isValid: false; RedirectFallback: ReactNode; currentAlgo: null }
  | { isValid: true; RedirectFallback: null; currentAlgo: T };

export const useAlgoRoute = <T,>(
  configMap: Record<string, T>,
  fallbackPath: string,
): AlgoRouteResult<T> => {
  const { id } = useParams<{ id: string }>();

  if (!id || !configMap[id]) {
    return {
      isValid: false,
      RedirectFallback: <Navigate to={fallbackPath} replace />,
      currentAlgo: null,
    };
  }

  return {
    isValid: true,
    RedirectFallback: null,
    currentAlgo: configMap[id],
  };
};
