import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToFavList,
  removeMovieFromFavList,
} from "../redux/moviesSlice";

export default function AddToFavoritesBtn({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeMovieFromFavList(movie.id));
    } else {
      dispatch(addMovieToFavList(movie));
    }
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to favorites"}
    </button>
  );
}
