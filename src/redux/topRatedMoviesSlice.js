import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTopRatedMovies = createAsyncThunk(
  "topRatedMovies/fetchTopRatedMovies",
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

const topRatedMoviesSlice = createSlice({
  name: "topRatedMovies",
  initialState: {
    topRated: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default topRatedMoviesSlice.reducer;
