import { Link } from "react-router-dom";
import AddToFavoritesBtn from "./AddToFavsBtn";

export default function Moviecard({ movie }) {
  return (
    <div className="moviecard">
      <Link
        to={`/movies/${movie.id}`}
        className="list-none no-underline text-black text-md"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-48 md:h-72 images"
        ></img>
        <li key={movie.id}>{movie.title}</li>
      </Link>
      <AddToFavoritesBtn movie={movie} />
    </div>
  );
}
