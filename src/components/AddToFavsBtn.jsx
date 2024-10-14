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
      // Skicka en händelse till dataLayer när en film tas bort från favoriter
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "remove_from_favorites",
        movie_title: movie.title,
        movie_id: movie.id,
      });
    } else {
      dispatch(addMovieToFavList(movie));
      // Skicka en händelse till dataLayer när en film läggs till i favoriter
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "add_to_favorites",
        movie_title: movie.title,
        movie_id: movie.id,
      });
    }
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to favorites"}
    </button>
  );
}
