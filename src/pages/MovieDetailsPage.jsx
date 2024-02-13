import { useEffect, useState } from "react";
import { getMovieDetails } from "../api";
import { useParams } from "react-router-dom";
import { MovieItem } from "../components/MovieItem";

export default function MovieDetalistPage() {
  const { movieId } = useParams();
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

  return <div>
    {movieDetails && <MovieItem movieData={movieDetails} />}</div>;
}
