import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import topRatedMoviesReducer from "./topRatedMoviesSlice";
import movieDetailsReducer from "./movieDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    movieDetails: movieDetailsReducer,
  },
});
