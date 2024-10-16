import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://movie-night-taupe.vercel.app",
      routes: async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await response.json();
        return data.results.map((movie) => `/movie-details/${movie.id}`);
      },
    }),
  ],
});
