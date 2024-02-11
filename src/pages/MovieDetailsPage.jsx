import { useEffect, useState } from "react";
import { getMovieDetails } from "../api";

export default function MovieDetalistPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchDetails = await getMovieDetails(movieId);
        setMovieDetails(fetchDetails);
      } catch (error) {
        error;
      }
    }
    fetchData();
  }, [movieId]);

  return <div>{movieDetails && <MovieItem />}</div>;
}
