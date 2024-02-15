import { Link, useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useRef } from "react";
export const Back = () => {
  const location = useLocation();
  const backRef = useRef(location.state);

  return (
    <div>
      <Link to={backRef.current ?? "/"}>
        <p>
          <GoArrowLeft />
          Go back
        </p>
      </Link>
    </div>
  );
};
