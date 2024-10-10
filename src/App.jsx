import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies } from "./redux/moviesSlice";
import { useEffect } from "react";
import Slidebar from "./components/Slidebar";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const movieStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchPopularMovies()) && dispatch(fetchTopRatedMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    <>
      <Navbar />
      <div>
        <div>
          <h2>Popular movies now</h2>
          <Slidebar>
            {popularMovies.map((movie) => (
              <div>
                <li key={movie.id}>{movie.title}</li>
                <button>Add to favorites</button>
              </div>
            ))}
          </Slidebar>
          <h2>Top rated</h2>
          <Slidebar>
            {topRatedMovies.map((movie) => (
              <div>
                <li key={movie.id}>{movie.title}</li>
                <button>Add to favorites</button>
              </div>
            ))}
          </Slidebar>
        </div>
      </div>
    </>
  );
}

export default App;
