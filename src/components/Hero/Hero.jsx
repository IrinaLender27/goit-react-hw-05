import css from "./Hero.module.css";

export const Hero = ({ movies }) => {
  const poster_path = movies[Math.floor(Math.random() * 20)]?.poster_path;

  return (
    <div className={css.hero}>
      {
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster opacity"
          width="1200"
        />
      }
    </div>
  );
};
