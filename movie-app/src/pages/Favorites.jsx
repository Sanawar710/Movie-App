import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const {Favorites} = useMovieContext();
  
  if(Favorites){
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
      <div className="movies-grid">
        {Favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
    );
  }
  return (
    <>
      <div className="favorites-empty">
        <h3>No Favorite Movies Yet</h3>
        <p>Start Adding Movies to your Favorites and they will appear here</p>
      </div>
    </>
  );
}

export default Favorites;
