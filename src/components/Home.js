import { useEffect, useContext } from 'react'
import PopularMovie from './PopularMovie'
import MustWatch from './MustWatch'
import { MovieContext } from './MoviesContext'


const Home = () => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=8f11a2c440e8e722cffbc76df58bc14c"

  const { Movies, setMovies, setValue } = useContext(MovieContext)


  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [API_URL])

  return (
    <main>
      {setValue ? <h2>Popular Movies</h2> : <h2>Search Result</h2>}
      <div className='moviesWrapper'>
        {Movies.length !== 0 ? Movies.map(movie => <PopularMovie {...movie} key={movie.id} />) : (
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

