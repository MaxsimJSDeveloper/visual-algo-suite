import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "@/shared/ui/Loader";
import { Sidebar } from "@/widgets/Sidebar";
import { FruitCard } from "@/entities/fruit";

const HomePage = lazy(() => import("@/pages/homePage"));
const SortingAlgorithmsPage = lazy(
  () => import("@/pages/sortingAlgorithmsPage"),
);
const OtherAlgorithmsPage = lazy(() => import("@/pages/otherAlgorithmsPage"));
const SearchingAlgorithmsPage = lazy(
  () => import("@/pages/searchingAlgorithmsPage"),
);
const NotFoundPage = lazy(() => import("@/pages/notFoundPage"));

function App() {
  return (
    <div className="flex min-h-screen bg-brand-bg text-slate-200">
      <Sidebar />
      <FruitCard
        fruit={{
          id: "1",
          price: 10,
          name: "Apple",
          emoji: "🍎",
          color: "bg-red-500/20 border-red-500/50",
        }}
        isActive
        isSorted
      />
      <main className="flex-1 ml-64 p-10 font-sans">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sorting" element={<SortingAlgorithmsPage />} />
            <Route path="/search" element={<SearchingAlgorithmsPage />} />
            <Route path="/other" element={<OtherAlgorithmsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
