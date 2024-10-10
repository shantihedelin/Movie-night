import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies } from "./redux/moviesSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchPopularMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    <>
      <div>
        <h1 className="bg-pink-200">Movie app</h1>
        <div>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
