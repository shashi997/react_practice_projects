import './css/App.css'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage'
import { MovieProvider } from './contexts/MovieContext'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  )
}


export default App
