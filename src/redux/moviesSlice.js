import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "b0aa22976a88a1f9ab9dbcd9828204b5";

const getFavsFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavsToLocalStorage = () => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return response.data.results;
});

export const fetchMovieSearch = createAsyncThunk(
  "movies/fetchMovieSearch",
  async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchResults: [],
    favorites: getFavsFromLocalStorage(),
    status: "idle",
    error: null,
  },
  reducers: {
    addMovieToFavList: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.find((fav) => fav.id === movie.id)) {
        state.favorites.push(movie);
        saveFavsToLocalStorage(state.favorites);
      }
    },
    removeMovieFromFavList: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.id !== movieId);
      saveFavsToLocalStorage(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(fetchMovieSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addMovieToFavList, removeMovieFromFavList } =
  moviesSlice.actions;

export default moviesSlice.reducer;
