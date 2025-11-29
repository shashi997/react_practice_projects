import './css/App.css'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from './pages/FavoritesPage'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <div>
        <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </>
  )
}


export default App
