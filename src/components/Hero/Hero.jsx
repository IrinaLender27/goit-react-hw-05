import css from "./Hero.module.css";
const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
export const Hero = ({ movies }) => {
  const poster_path = movies[Math.floor(Math.random() * 20)]?.poster_path;

  return (
    <div className={css.hero}>
      <div className={css.banerBox}>
        <div className={css.gradientOverlay}></div>

        <img
          className={css.baner}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : defaultImg
          }
          alt="poster"
          // width={1200}
        />
        <div className={css.topOverlay}></div>
      </div>
    </div>
  );
};
