import { Title } from "@/shared/ui/Title";
import { AppLink } from "@/shared/ui/AppLink";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4 max-w-2xl">
        <Title as="h1" className="text-5xl md:text-6xl">
          VisualAlgo Suite 🔬
        </Title>
        <p className="text-slate-400 text-lg leading-relaxed">
          Interactive laboratory for exploring algorithms and data structures.
          Visualize code execution, step by step.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-brand-card/20 border border-slate-800 p-8 rounded-3xl hover:border-brand-accent hover:bg-brand-card/40 transition-all flex flex-col items-center text-center space-y-4 group">
          <div className="text-5xl group-hover:scale-110 transition-transform">
            📊
          </div>
          <Title as="h2">Sorting Lab</Title>
          <p className="text-sm text-slate-500 flex-1">
            Visualize Bubble Sort, Merge Sort, and other array ordering
            algorithms.
          </p>
          <AppLink to="/sorting" variant="primary" isBlock>
            Enter Lab
          </AppLink>
        </div>

        <div className="bg-brand-card/20 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 hover:bg-brand-card/40 transition-all flex flex-col items-center text-center space-y-4 group">
          <div className="text-5xl group-hover:scale-110 transition-transform">
            🔍
          </div>
          <Title as="h2">Search Lab</Title>
          <p className="text-sm text-slate-500 flex-1">
            Explore Linear and Binary search with step-by-step indication.
          </p>
          <AppLink to="/search" variant="success" isBlock>
            Enter Lab
          </AppLink>
        </div>

        <div className="bg-brand-card/20 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 hover:bg-brand-card/40 transition-all flex flex-col items-center text-center space-y-4 group">
          <div className="text-5xl group-hover:scale-110 transition-transform">
            📚
          </div>
          <Title as="h2">Structures</Title>
          <p className="text-sm text-slate-500 flex-1">
            Stack (LIFO), Queue (FIFO), and other core data structures in
            action.
          </p>
          <AppLink to="/other" variant="accent" isBlock>
            Enter Lab
          </AppLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
