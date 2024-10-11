import { removeMovieFromFavList } from "../redux/moviesSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Favorites() {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(removeMovieFromFavList(movieId));
  };

  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <div key={favorite.id}>
            <h2>{favorite.title}</h2>
            <p>Release date: {favorite.release_date}</p>
            <p>Rating: {favorite.vote_average}/10</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${favorite.poster_path}`}
              alt={favorite.title}
            />
            <button onClick={() => handleRemove(favorite.id)}>
              Remove from favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorites added.</p>
      )}
    </div>
  );
}
