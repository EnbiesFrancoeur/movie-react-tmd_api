import { useEffect, useState } from 'react';
import PopularMovie from './PopularMovie';
import './App.css';
import NewestMovie from './NewestMovie';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=8f11a2c440e8e722cffbc76df58bc14c"
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=8f11a2c440e8e722cffbc76df58bc14c&query="

  const [Movies, setMovies] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (value === "") return

    fetch(API_SEARCH + value)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }

  return (
    <>
      <a href="/"><h1>Enbies Movie</h1></a>
      <nav>
        <form onSubmit={handleSearch}>
          <input type="text"
            placeholder='Search Movie here'
            onChange={(e) => setValue(e.target.value)} />
          <button>Search</button>
        </form>
      </nav>
      <main>
        <h2>Popular Movies</h2>
        <div className='moviesWrapper'>
          {Movies.map(movie => <PopularMovie {...movie} key={movie.id} />)}
        </div>
        <hr />
        <h2>Highest Rated</h2>
        <div className='moviesWrapper'>
          <NewestMovie />
        </div>
      </main>
    </>
  )
}

export default App;
