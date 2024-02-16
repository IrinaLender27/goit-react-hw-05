import css from "./MovieItem.module.css";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
export const MovieItem = ({ movieData }) => {
  return (
    <div className={css.cardBox}>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
            : defaultImg
        }
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
