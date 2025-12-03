import MovieCard from '../components/MovieCard'
import {useState, useEffect} from 'react'
import { searchMovies, getPopularMovies } from '../services/api'
import '../css/Home.css'

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        // console.log('popularMovies:', popularMovies);
        setMovies(popularMovies);
      } catch (error) {
        setError('Error fetching popular movies.');
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);



  const checkMovies = () => {
    return movies.length > 0 ? true : false
    // return false
  }

  // console.log('checkMovies():', checkMovies())

  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(`Searching for: ${searchQuery}`);
    if(!searchQuery.trim()) return;
    if(loading) return;

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError('Error searching for movies.');
      console.error('Error searching for movies:', error);
    } finally {
      setLoading(false);
    }


    // setSearchQuery('');
  }

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input type="text" placeholder='Search movies...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type='submit' className='search-button'>Search</button>
      </form>

      {error && <div className='error-message'>{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

      {!checkMovies() && <p>No movies available.</p>}
    </div>
  )
}

export default HomePage