import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieSearch } from "../redux/moviesSlice";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchMovieSearch(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
