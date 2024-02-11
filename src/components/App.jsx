import { NavBar } from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

import MoviesPage from "../pages/MoviesPage";
import HomePage from "../pages/HomePage";

export const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie" element={<MoviesPage />}></Route>
        <Route path="*" element={<p>OOOps!</p>}></Route>
      </Routes>
    </div>
  );
};

export default App;
