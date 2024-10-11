import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/moviesSlice";
import Navbar from "../components/Navbar";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movies.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    console.log(id);
    console.log(movieDetails);
  }, [dispatch, id]);

  return (
    <div>
      <Navbar showSearchBar={false}/>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>{movieDetails.overview}</p>
          <p>Release date: {movieDetails.release_date}</p>
          <p>Rating: {movieDetails.vote_average}/10</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
