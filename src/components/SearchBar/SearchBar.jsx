import toast from "react-hot-toast";

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
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
