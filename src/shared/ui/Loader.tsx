export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[400px]">
      <div className="relative flex items-center justify-center w-16 h-16">
        <div className="absolute w-full h-full border-4 border-slate-700 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-brand-accent rounded-full border-t-transparent animate-spin"></div>
        <div className="w-4 h-4 bg-brand-accent rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
