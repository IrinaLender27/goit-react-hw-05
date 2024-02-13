import { useState, useEffect } from "react";
import { getSerchMovie } from "../api.js";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar.jsx";
import { MovieList } from "../components/MovieList.jsx";
// import toast from "react-hot-toast";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const query = params.get("query") ?? "";
  const changeQuery = (newQuery) => {
    params.set("query", newQuery);
    setParams(params);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getSerchMovie(query);
        setSearchMovies(fetchedMovies.results);
      } catch (error) {
        error;
      }
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBar onChange={changeQuery} />
      <MovieList movies={searchMovies} />
    </div>
  );
}
