import { useEffect, useState } from "react";
import { getTrendMovies } from "../../components/api";
import { Hero } from "../../components/Hero/Hero";
import { MovieList } from "../../components/MovieList/MovieList";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    setLoading(true);
    async function fetchData() {
      try {
        const fetchedTrandMovies = await getTrendMovies();
        setTrendMovies(fetchedTrandMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMessage error={setError} />}
      <div>
        <Hero movies={trendMovies} />
      </div>
      <p className={css.title}>Trending today</p>
      {trendMovies.length > 0 && <MovieList movies={trendMovies} />}
    </div>
  );
}
