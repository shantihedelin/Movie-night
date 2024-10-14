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
        className="rounded-l-3xl px-4 w-72 h-[50px] border-none"
      >
      </input>
      <button onClick={handleSearch}
      className="h-[52px] border-none rounded-r-3xl bg-green-400 px-4">Search</button>
    </div>
  );
}
