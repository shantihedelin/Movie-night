import { removeMovieFromFavList } from "../redux/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function Favorites() {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  const handleRemove = (movieId) => {
    dispatch(removeMovieFromFavList(movieId));
  };

  //* Den här sidan indexeras inte.
  return (
    <>
      <div className="bg-blue-200 pb-52">
        <Helmet>
          <title>Dina favorit filmer</title>
        </Helmet>
        <Navbar showSearchBar={false} />
        {favorites.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {favorites.map((favorite) => (
              <div key={favorite.id} className="my-2 shadow-md rounded-lg"><img
                  src={`https://image.tmdb.org/t/p/w200${favorite.poster_path}`}
                  alt={favorite.title} className="images w-32 h-auto"
                />
                <h2 className="text-base">{favorite.title}</h2>
                <p>Rating: {favorite.vote_average}/10</p>
                
                <button
                  onClick={() => handleRemove(favorite.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove from favorites
                </button>
              </div>
            ))}</div>
        ) : (
          <p>No favorites added.</p>
        )}
      </div>
      <Footer />
    </>
  );
}
