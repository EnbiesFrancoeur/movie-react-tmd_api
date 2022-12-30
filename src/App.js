import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MovieContext } from './components/MoviesContext'
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';


function App() {
  const [Movies, setMovies] = useState([])
  const [Value, setValue] = useState('')

  console.log(Movies);
  return (
    <MovieContext.Provider value={{ Movies, setMovies, Value, setValue }}>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/details/:movieId"
              element={<MovieDetails />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContext.Provider>
  )
}

export default App;
