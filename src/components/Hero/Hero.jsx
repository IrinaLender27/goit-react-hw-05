import css from "./Hero.module.css";

export const Hero = ({ movies }) => {
  const poster_path = movies[Math.floor(Math.random() * 20)]?.poster_path;

  return (
    <div className={css.hero}>
      <div className={css.banerBox}>
        <div className={css.gradientOverlay}></div>

        <img
          className={css.baner}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          // width={1200}
        />
        <div className={css.topOverlay}></div>
      </div>
    </div>
  );
};
