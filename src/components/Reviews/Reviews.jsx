import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../api";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchCast = await getMovieReviews(movieId);
        setReviews(fetchCast);
      } catch (error) {
        error;
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
