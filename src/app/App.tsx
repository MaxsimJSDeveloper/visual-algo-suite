import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import Loader from "@/shared/ui/Loader";
import { Sidebar } from "@/widgets/Sidebar";

const HomePage = lazy(() => import("@/pages/homePage"));
const SortingAlgorithmsPage = lazy(
  () => import("@/pages/sortingAlgorithmsPage/index"),
);
const OtherAlgorithmsPage = lazy(() => import("@/pages/otherAlgorithmsPage"));
const SearchingAlgorithmsPage = lazy(
  () => import("@/pages/searchingAlgorithmsPage/index"),
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
            <Route
              path="/sorting"
              element={<Navigate to="/sorting/bubble" replace />}
            />
            <Route path="/sorting/:id" element={<SortingAlgorithmsPage />} />
            <Route
              path="/search"
              element={<Navigate to="/search/linear" replace />}
            />
            <Route path="/search/:id" element={<SearchingAlgorithmsPage />} />
            <Route path="/other" element={<OtherAlgorithmsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
