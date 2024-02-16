import css from "./MovieItem.module.css";
export const MovieItem = ({ movieData }) => {
  return (
    <div className={css.cardBox}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.title}
      />
      <div>
        <h1 className={css.title}>{movieData.title}</h1>
        <p>
          User score:{`${Math.round((movieData.vote_average / 10) * 100)}%`}
        </p>
        <h2 className={css.style}>Owerview</h2>
        <p>{movieData.overview}</p>
        <h3 className={css.style}>Ganres </h3>
        <ul className={css.ganreBlock}>
          {movieData.genres.map((genre) => (
            <li key={genre.id} className={css.ganreType}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
