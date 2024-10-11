import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black text-white">
      <div>
        <h1>Filmkväll</h1>
        <p>Hemmakvälls filmbibliotek</p>
      </div>
      <SearchBar />
      <Link to="/favorites">Favorites</Link>
    </div>
  );
}
