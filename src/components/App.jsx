import { NavBar } from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import MovieDetalistPage from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";
import HomePage from "../pages/HomePage";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetalistPage />}></Route>
        <Route path="*" element={<p>OOOps!</p>}></Route>
      </Routes>
    </div>
  );
};

export default App;
