const API_key = "0ed478cc78e7e4527d134b2d0abbbd6f"; // API Key fetched from TMDB
const BASE_URL = "https://api.themoviedb.org/3" // Root source of the web application 

/**
 * This function is used to fetch all the popular movies from the web using API_KEY
 * @returns It returns the popular movies along with their details
 */
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_key}`);
    const data = await response.json();
    return data.results;
}

/**
 * This function is used to fetch the movie that is passed as an argument
 * @param {The name of the movie} query 
 * @returns The result (if available)
 */
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}