import { useEffect, useState } from "react";
import { getTrendMovies } from "../api";
import { TrendMovieList } from "../components/TrendMovieList";
export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedTrandMovies = await getTrendMovies();
        setTrendMovies(fetchedTrandMovies.results);
      } catch (error) {
        error;
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {trendMovies.length > 0 && <TrendMovieList trendMovies={trendMovies} />}
    </div>
  );
}
