import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies } from "./redux/moviesSlice";
import { useEffect } from "react";
import Slidebar from "./components/Slidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Moviecard from "./components/Moviecard";
import { Helmet } from "react-helmet";

function App() {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const searchResults = useSelector((state) => state.movies.searchResults);
  const movieStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchPopularMovies()) && dispatch(fetchTopRatedMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    <div className="max-h-full bg-blue-200">
      <Helmet>
        <title>Filmkväll - hitta dom bästa filmerna</title>
        <meta
          name="desription"
          content="Upptäck dom populäraste och mest gillade filmerna just nu. Sök efter din favoritfilmer och lägg till dom i din lista."
        />
        <meta
          name="keywords"
          content="movies, filmer, film, populära filmer, top rated, sök efter film, favoritfilm"
        />
        <meta
          property="og:title"
          content="Filmkväll - Upptäck ppulära och dom mest gillade filmerna just nu."
        />
        <meta
          property="og:description"
          content="Upptäck dom populäraste och mest gillade filmerna just nu. Lägg till dina favorit filmer till din lista."
        />
        <meta property="og:image" content="/og-img.jpg" />
      </Helmet>
      <Navbar />
      <div className="pb-52">
        {searchResults.length > 0 && (
          <>
            <h2>Search Results</h2>
            <Slidebar>
              {searchResults.map((movie) => (
                <Moviecard key={movie.id} movie={movie} />
              ))}
            </Slidebar>
          </>
        )}
        <div>
          <h2 className="text-3xl m-0 mt-8 text-start ml-6">
            Popular movies now
          </h2>
          <Slidebar>
            {popularMovies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </Slidebar>
          <h2 className="text-3xl m-0 text-start mt-8 ml-6">Top rated</h2>
          <Slidebar>
            {topRatedMovies.map((movie) => (
              <Moviecard key={movie.id} movie={movie} />
            ))}
          </Slidebar>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
