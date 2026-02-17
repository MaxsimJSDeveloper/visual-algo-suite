import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "../shared/Loader";

const HomePage = lazy(() => import("../pages/homePage"));
const SortingAlgorithmsPage = lazy(
  () => import("../pages/sortingAlgorithmsPage"),
);
const OtherAlgorithmsPage = lazy(() => import("../pages/otherAlgorithmsPage"));
const SearchingAlgorithmsPage = lazy(
  () => import("../pages/searchingAlgorithmsPage"),
);
const NotFoundPage = lazy(() => import("../pages/notFoundPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sorting" element={<SortingAlgorithmsPage />} />
        <Route path="/other" element={<OtherAlgorithmsPage />} />
        <Route path="/search" element={<SearchingAlgorithmsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
