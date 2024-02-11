import { NavLink } from "react-router-dom";

export const TrendMovieList = ({ trendMovies }) => {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movie/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
