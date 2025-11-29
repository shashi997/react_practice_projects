import React from 'react'
import '../css/MovieCard.css'

const MovieCard = ({movie}) => {

    const handleFavoriteClick = () => {
        alert('Added to Favorites!');
    }

  return (
    <div className='movie-card'>
        <div className='movie-poster'>            
            <img src={movie.poster} alt={`${movie.title} Poster`} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={handleFavoriteClick}>♡</button>
            </div>
        </div>

        <div className='movie-info'>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.releasedate}</p>
        </div>
    </div>
  )
}



export default MovieCard