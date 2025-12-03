import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const FavoritesPage = () => {

  const { favorites } = useMovieContext();

  if (favorites) {
    return <div className='favorites'>
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
    </div>

  }
  return (
    <div className='favorites-empty'>
      FavoritesPage
      <h2>No Favorites Yet</h2>
      <p>Start Adding to your Favorites so they will appear</p>  
    </div>
  )
}

export default FavoritesPage