import { Link } from "react-router-dom";
import AddToFavoritesBtn from "./AddToFavsBtn";

export default function Moviecard({ movie }) {
  return (
    <div>
      <Link
        to={`/movies/${movie.id}`}
        className="list-none no-underline text-black text-md"
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          className="h-48 md:h-auto"
        ></img>
        <li key={movie.id}>{movie.title}</li>
      </Link>
      <AddToFavoritesBtn movie={movie} />
    </div>
  );
}
