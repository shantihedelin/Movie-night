import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function Navbar({ showSearchBar = true }) {
  return (
    <div className="bg-black text-white py-6 md:px-8 navbar">
      <div className="flex justify-between px-4">
        <Link to="/" className="text-white no-underline">
          <div>
            <h1 className="text-3xl m-0 md:text-4xl">FILMKVÄLL</h1>
            <p className="text-sm mt-0 mb-8 md:text-lg md:mb-2">
              Hemmakvälls filmbibliotek
            </p>
          </div>
        </Link>

        <Link
          to="/favorites"
          className="text-white mt-2 no-underline md:text-lg lg:text-xl"
        >
          <div
            className="flex items-center space-x-2 pb-1"
            style={{ borderBottom: "1px solid white" }}
          >
            <span>Favorites</span>{" "}
            <FaHeart className="text-red-400 text-xl md:text-2xl" />
          </div>
        </Link>
      </div>
      {showSearchBar && <SearchBar />}
    </div>
  );
}
