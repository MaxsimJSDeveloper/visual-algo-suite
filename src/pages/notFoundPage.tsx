import { Title } from "@/shared/ui/Title";
import { AppLink } from "@/shared/ui/AppLink";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 text-center animate-in zoom-in-95 duration-500">
      <div className="relative">
        <h1 className="text-[12rem] font-black text-slate-800/50 drop-shadow-2xl leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🍎🍌🍉</div>
        </div>
      </div>

      <div className="space-y-4 max-w-md relative z-10">
        <Title as="h2">Index Out of Bounds 🚨</Title>
        <p className="text-slate-400 text-lg">
          Looks like this route got lost in memory. Perhaps the Garbage
          Collector got to it, or you mistyped the URL.
        </p>
      </div>

      <AppLink to="/" variant="primary" className="mt-8 px-10 py-4 text-lg">
        Return to Laboratory
      </AppLink>
    </div>
  );
};

export default NotFoundPage;
