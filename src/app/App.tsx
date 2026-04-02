import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "@/shared/ui/Loader";
import { Sidebar } from "@/widgets/Sidebar";

const HomePage = lazy(() => import("@/pages/homePage"));
const SortingAlgorithmsPage = lazy(() =>
  import("@/pages/sortingAlgorithmsPage").then((module) => ({
    default: module.SortingAlgorithmsPage,
  })),
);
const OtherAlgorithmsPage = lazy(() => import("@/pages/otherAlgorithmsPage"));
const SearchingAlgorithmsPage = lazy(
  () => import("@/pages/searchingAlgorithmsPage"),
);
const NotFoundPage = lazy(() => import("@/pages/notFoundPage"));

function App() {
  return (
    <>
      <Sidebar />
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
    </>
  );
}

export default App;
