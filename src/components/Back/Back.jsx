import { Link, useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useRef } from "react";
import css from "./Back.module.css";
export const Back = () => {
  const location = useLocation();
  const backRef = useRef(location.state);

  return (
    <div className={css.back}>
      <Link to={backRef.current ?? "/"}>
        <p>
          <GoArrowLeft />
          Go back
        </p>
      </Link>
    </div>
  );
};
