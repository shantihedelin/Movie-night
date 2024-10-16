import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//TODO: put API_KEY in env.file

const API_KEY = "b0aa22976a88a1f9ab9dbcd9828204b5";

const getFavsFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavsToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }
    const data = await response.json();
    return data.results;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch top-rated movies");
    }
    const data = await response.json();
    return data.results;
  }
);

export const fetchMovieSearch = createAsyncThunk(
  "movies/fetchMovieSearch",
  async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to search for movies");
    }
    const data = await response.json();
    return data.results;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    searchResults: [],
    topRated: [],
    movieDetails: [],
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
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
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
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topRated = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addMovieToFavList, removeMovieFromFavList } =
  moviesSlice.actions;

export default moviesSlice.reducer;
