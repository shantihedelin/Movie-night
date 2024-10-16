import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import 'dotenv/config';  // Detta läser din .env-fil


// Funktion för att generera sitemapen
const generateSitemap = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VITE_TMDB_API_KEY}`
  );
  const data = await response.json();
  console.log("Using API key:", process.env.VITE_TMDB_API_KEY);  // Lägg till detta för att kontrollera att nyckeln läses korrekt

  console.log("API Response:", data); // Lägg till detta för att se vad som returneras

  // Kontrollera om 'results' existerar och har data
  if (!data.results || data.results.length === 0) {
    throw new Error("No results found in the API response");
  }

  // Bygg sitemap URLs baserat på API-svar
  const urls = data.results.map(
    (movie) => `
    <url>
      <loc>https://movie-night-taupe.vercel.app/movie-details/${movie.id}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
  );

  // Bygg hela sitemapen
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  // Skriv sitemapen till dist-mappen
  fs.writeFileSync(path.join("dist", "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully.");
};

generateSitemap();
