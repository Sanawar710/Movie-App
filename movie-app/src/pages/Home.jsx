import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to Load Movies....");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []); // Causes the popular movies to be rendered for only one time

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevents the page to reload when we reload

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try{
    const searchResult = await searchMovies(searchQuery);
    setMovies(searchResult); 
    setError(null); 
  } catch(err){
    console.log(err);
    setError("Failed to Load Movies....");
    }
    finally{
    setLoading(false);
    }

    setSearchQuery(""); // Set the query to an empty string
  };

  return (
    <>
      <div className="home">
        {/* Input Form */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for Movies... "
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {/* Grid for loading movies */}
        {loading ? (
          <div className="loading"> Loading... </div>
        ) : (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
