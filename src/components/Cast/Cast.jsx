import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../api";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
console.log(getMovieCredits(29222));

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCast = await getMovieCredits(movieId);
        setCast(fetchCast);
      } catch (error) {
        error;
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
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
