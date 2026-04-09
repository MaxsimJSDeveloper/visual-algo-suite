import { SortingVisualizer } from "@/widgets/SortingVisualizer";
import { Title } from "@/shared/ui/Title";
import { Button } from "@/shared/ui/Button";
import { useStack } from "@/features/stack/model/useStack";

export const OtherAlgorithmsPage = () => {
  const { stack, push, pop, isAnimating, activeIndices } = useStack();

  return (
    <div className="p-8 space-y-10">
      <Title as="h1">Data Structures: Stack 📚</Title>

      <div className="flex items-center gap-6 bg-brand-card/20 p-6 rounded-2xl border border-slate-800">
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
            className="bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20"
          >
            Push (Add)
          </Button>
          <Button
            onClick={pop}
            variant="outline"
            disabled={isAnimating || stack.length === 0}
            className="hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/50"
          >
            Pop (Remove)
          </Button>
        </div>
      </div>
      <div className="bg-brand-card/30 border border-slate-800 rounded-3xl p-10 flex items-center justify-center min-h-[500px]">
        {stack.length === 0 ? (
          <div className="text-slate-500 font-mono text-xl animate-pulse">
            Stack is empty. Push some fruits!
          </div>
        ) : (
          <div className="w-full">
            <SortingVisualizer
              fruits={stack}
              activeIndices={activeIndices}
              sortedIndices={[]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherAlgorithmsPage;
