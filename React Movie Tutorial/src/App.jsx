import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const movie = {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releasedate: "2010-07-16"
  }

  const movie2 = [
    {
      id: 1,
      title: "Inception",
      poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      releasedate: "2010-07-16"
    },
    {
      id: 2,
      title: "Matrix",
      poster: "https://i.insider.com/5ab017307708e93eb45772ea?width=997&format=jpeg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      releasedate: "1999-03-31"
    }
  ]


  // const checkMovies = () => {
  //   if (movie2.length > 0) {
  //     return true
  //   }
  //   return false
  // }

  const checkMovies = () => {
    return movie2.length > 0 ? true : false
  }

  console.log('checkMovies():', checkMovies())



  return (
    <>
      <div className="App">
        <h1>Hello, React!</h1>
        <MovieCard movie={movie}/>
        {checkMovies() && movie2.map( mov => (
          // Instead of using Array Index as key, use unique id from the data (from api or database) for better performance
          console.log('id of movie:', mov.id),
          <MovieCard key={mov.id} movie={mov} />
        ))}     
      </div>
    </>
  )
}


export default App
