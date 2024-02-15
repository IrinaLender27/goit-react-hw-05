import { useState, useEffect } from "react";
import { getSerchMovie } from "../../components/api.js";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { MovieList } from "../../components/MovieList/MovieList.jsx";
import { Loading } from "../../components/Loading/Loading.jsx";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage.jsx";
// import toast from "react-hot-toast";

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const query = params.get("query") ?? "";
  const changeQuery = (newQuery) => {
    params.set("query", newQuery);
    setParams(params);
  };
  useEffect(() => {
    if (!query) return;
    setError(false);
    setLoading(true);
    async function fetchData() {
      try {
        const fetchedMovies = await getSerchMovie(query);
        setSearchMovies(fetchedMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMessage error={setError} />}
      <SearchBar onChange={changeQuery} />
      <MovieList movies={searchMovies} />
    </div>
  );
}
