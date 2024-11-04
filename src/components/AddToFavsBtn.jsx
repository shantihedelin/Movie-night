import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {
  addMovieToFavList,
  removeMovieFromFavList,
} from "../redux/moviesSlice";

export default function AddToFavoritesBtn({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  //* SEO
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovieFromFavList(movie.id));
      // Skicka en händelse till dataLayer när en film tas bort från favoriter(GA)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "remove_from_favorites",
        movie_title: movie.title,
        movie_id: movie.id,
      });
    } else {
      dispatch(addMovieToFavList(movie));
      // Skicka en händelse till dataLayer när en film läggs till i favoriter(GA)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "add_to_favorites",
        movie_title: movie.title,
        movie_id: movie.id,
      });
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className="bg-transparent text-white border-none"
    >
      {isFavorite ? (
        <p className="text-red-400 hover:cursor-pointer flex">
          <FaHeart className="w-6 h-4" />
        </p>
      ) : (
        <p className="hover:cursor-pointer flex">
          <FaRegHeart className="flex w-6 h-4" />
        </p>
      )}
    </button>
  );
}
