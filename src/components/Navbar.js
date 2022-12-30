import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from './MoviesContext'

const Navbar = () => {

  const { Movies, setMovies, Value, setValue } = useContext(MovieContext)

  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=8f11a2c440e8e722cffbc76df58bc14c&query="

  const handleSearch = (e) => {
    e.preventDefault()
    if (Value === "") return

    fetch(API_SEARCH + Value)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }
  return (
    <div>
      <Link to='/' onClick={e => e.defaultPrevented()}><h1>Enbies Movie</h1></Link>
      <nav>
        <form onSubmit={handleSearch}>
          <input type="text"
            placeholder='Search Movie here'
            onChange={(e) => setValue(e.target.value)} />
          <button>Search</button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar