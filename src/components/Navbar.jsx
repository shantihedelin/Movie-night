import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <h1>Movie app</h1>
      <SearchBar />
      <Link to="/favorites">Favorites</Link>
    </div>
  );
}
