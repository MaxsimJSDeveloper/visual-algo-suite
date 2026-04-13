import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { AlgoVisualizer } from "@/widgets/AlgoVisualizer";
import { useAlgorithm } from "@/shared/lib/algoEngine/useAlgorithm";
import { stackPush, stackPop } from "@/features/stack/model/stackAlgos";

export const OtherAlgorithmsPage = () => {
  const {
    fruits: stack,
    activeIndices,
    isRunning,
    run,
  } = useAlgorithm([], 400);

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
            onClick={() => run(stackPush)}
            disabled={isRunning || stack.length >= 10}
            variant="success"
          >
            Push (Add)
          </Button>
          <Button
            onClick={() => run(stackPop)}
            variant="danger"
            disabled={isRunning || stack.length === 0}
          >
            Pop (Remove)
          </Button>
        </div>
      </div>

      <div className="visualizer-container flex items-end justify-center min-h-[500px]">
        {stack.length === 0 ? (
          <div className="text-slate-500 font-mono text-xl animate-pulse pb-10">
            Stack is empty. Push some fruits!
          </div>
        ) : (
          <div className="w-full">
            <AlgoVisualizer
              fruits={stack}
              activeIndices={activeIndices}
              successIndices={[]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherAlgorithmsPage;
