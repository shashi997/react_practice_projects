const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPopularMovies = async () => {
    // console.log('API_KEY:', API_KEY);
    // console.log('BASE_URL:', BASE_URL);
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    // console.log('data from getPopularMovies:', data);
    return data.results;
}

export const searchMovies = async (query) => {
    // console.log('query:', query);
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json();
    return data.results;
}