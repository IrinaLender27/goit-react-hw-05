import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import clsx from "clsx";

const isActiv = ({ isActive }) => {
  return clsx(css.main, isActive && css.active);
};
export const NavBar = () => {
  return (
    <header className={css.header}>
      <div>
        <nav className={css.navigation}>
          <NavLink to="/" className={isActiv}>
            Home
          </NavLink>
          <NavLink to="/movies" className={isActiv}>
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
