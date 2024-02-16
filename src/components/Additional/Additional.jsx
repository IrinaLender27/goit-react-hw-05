import { NavLink } from "react-router-dom";
import css from "./Additional.module.css";

export default function Additional() {
  return (
    <div>
      <p className={css.title}>Additional information </p>
      <div className={css.navBox}>
        <NavLink to="cast" className={css.navigation}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.navigation}>
          Reviews
        </NavLink>
      </div>
    </div>
  );
}
