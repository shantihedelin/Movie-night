import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/movieDetailsSlice";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="bg-black text-white pb-8 md:pb-52">
        <Helmet>
          <title>{movieDetails.title}</title>
          <meta
            name="description"
            content={`Läs mer om ${movieDetails.title}, skådespelarna, betyg och mer`}
          />
          <meta
            name="keywords"
            content="filmdetaljer, filminfo, filmfakta, cast, betyg"
          />
          <meta property="og:title" content={movieDetails.title} />
          <meta
            property="og:description"
            content={`Läs mer om ${movieDetails.title}. skådespelarna, betyg och mer.`}
          />
          <meta property="og:image" content={movieDetails.posterUrl} />
        </Helmet>
        <Navbar showSearchBar={false} />
        {movieDetails ? (
          <div className="px-8 pt-12 md:flex md:justify-around md:px-20 md:space-x-16">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="w-72 object-contain"
            />
            <div className="md:justify-center items-center">
              <h1>{movieDetails.title}</h1>
              <p>{movieDetails.overview}</p>
              <p>Release date: {movieDetails.release_date}</p>
              <p>Rating: {movieDetails.vote_average}/10</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
