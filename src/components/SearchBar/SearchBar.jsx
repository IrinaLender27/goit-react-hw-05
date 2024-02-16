import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

export const SearchBar = ({ onChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    onChange(event.target.elements.query.value);
    event.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="search"
          name="query"
          className={css.input}
        />
        <button type="submit" className={css.buttonStyle}>
          <FiSearch className={css.iconSearch} />
        </button>
      </form>
    </header>
  );
};
