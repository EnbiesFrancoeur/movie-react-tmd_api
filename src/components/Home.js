import { useEffect, useContext } from 'react'
import MovieCard from './MovieCard'
import MustWatch from './MustWatch'
import { MovieContext } from './MoviesContext'


const Home = () => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=8f11a2c440e8e722cffbc76df58bc14c"
  const { Movies, setMovies } = useContext(MovieContext)

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [setMovies])

  return (
    <main>
      <h2>Movies</h2>
      <div className='moviesWrapper'>
        {Movies.length !== 0 ? Movies.map(movie => <MovieCard {...movie} key={movie.id} />) : (
          <h1 className='notFound'>Movie not Found</h1>
        )}
      </div>
      <h2>Must Watch</h2>
      <div className='moviesWrapper'>
        <MustWatch />
      </div>
    </main>
  )
}

export default Home

