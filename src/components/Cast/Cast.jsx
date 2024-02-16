import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../api";
import css from "./Cast.module.css";
import { Loading } from "../Loading/Loading";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    async function fetchData() {
      try {
        const fetchCast = await getMovieCredits(movieId);
        setCast(fetchCast);
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
      <ul className={css.castList}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.thumb}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={200}
              alt={name}
            />
            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
