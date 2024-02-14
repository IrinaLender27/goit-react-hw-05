import { NavBar } from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import MovieDetalistPage from "../pages/MovieDetalistPage/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import HomePage from "../pages/HomePage/HomePage";
import { Toaster } from "react-hot-toast";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
export const App = () => {
  return (
    <div>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetalistPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>OOOps!</p>}></Route>
      </Routes>
    </div>
  );
};

export default App;
