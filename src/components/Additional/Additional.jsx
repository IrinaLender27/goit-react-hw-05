import { NavLink } from "react-router-dom";

export default function Additional() {
  return (
    <div>
      <p>Additional information </p>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </div>
  );
}
