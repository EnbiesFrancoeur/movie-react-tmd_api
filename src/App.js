import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?page=1&api_key=8f11a2c440e8e722cffbc76df58bc14c"

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

    fetch(API_SEARCH + value)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }

  console.log(Movies);

  return (
    <>
      <h1>Enbies Movie</h1>
      <nav>
        <form onSubmit={handleSearch}>
          <input type="text"
            placeholder='Search Movie here'
            onChange={(e) => setValue(e.target.value)} />
          <button>Search</button>
        </form>
      </nav>
      <main>
        {Movies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
      </main>

    </>
  );
}

export default App;
