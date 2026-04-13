import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { useStack } from "@/features/stack/model/useStack";

export const OtherAlgorithmsPage = () => {
  const { stack, push, pop, isAnimating, activeIndices } = useStack();

  return (
    <div className="page-container">
      <Title as="h1">Data Structures: Stack 📚</Title>

      <div className="control-panel flex items-center gap-6">
        <div className="space-y-1 text-slate-400 mr-auto">
          <p className="text-xs uppercase tracking-wider font-bold">
            Stack Size / Capacity:
          </p>
          <p className="text-2xl text-brand-accent font-mono font-bold">
            {stack.length} <span className="text-slate-600">/ 10</span>
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={push}
            disabled={isAnimating || stack.length >= 10}
            variant="success"
          >
            Push (Add)
          </Button>
          <Button
            onClick={pop}
            variant="danger"
            disabled={isAnimating || stack.length === 0}
          >
            Pop (Remove)
          </Button>
        </div>
      </div>
      <div className="visualizer-container">
        {stack.length === 0 ? (
          <div className="text-slate-500 font-mono text-xl animate-pulse">
            Stack is empty. Push some fruits!
          </div>
        ) : (
          <div className="w-full">
            {/* <SortingVisualizer
              fruits={stack}
              activeIndices={activeIndices}
              sortedIndices={[]}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherAlgorithmsPage;
