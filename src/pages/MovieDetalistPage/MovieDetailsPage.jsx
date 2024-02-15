import { useEffect, useState } from "react";
import { getMovieDetails } from "../../components/api";
import { useParams } from "react-router-dom";
import { MovieItem } from "../../components/MovieItem/MovieItem";
import Additional from "../../components/Additional/Additional";
import { Outlet } from "react-router-dom";
import { Back } from "../../components/Back/Back";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
export default function MovieDetalistPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setError(false);
      setLoading(true);
      try {
        const fetchDetails = await getMovieDetails(movieId);
        setMovieDetails(fetchDetails);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMessage error={setError} />}
      <Back />
      {movieDetails && <MovieItem movieData={movieDetails} />}
      <Additional />
      <Outlet />
    </div>
  );
}
