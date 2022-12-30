import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Video from "./Video"

const MovieDetails = () => {
  const [VideoKey, setVideoKey] = useState()
  const [MovieDetails, setMovieDetails] = useState()
  const { movieId } = useParams()

  const apiImg = "https://image.tmdb.org/t/p/w500/"

  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8f11a2c440e8e722cffbc76df58bc14c`

  const VIDEO_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=8f11a2c440e8e722cffbc76df58bc14c`

  useEffect(() => {
    const movieDetails = fetchMovieDetails()
    setMovieDetails(movieDetails)
  }, [])

  const fetchMovieDetails = async () => {
    const response = await fetch(MOVIE_DETAILS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }

  useEffect(() => {
    const videoKey = fetchMovieVideo()
    setVideoKey(videoKey)
  }, [])


  const fetchMovieVideo = async () => {
    const response = await fetch(VIDEO_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response

  }

  // useEffect(() => {
  //   fetch(MOVIE_DETAILS_URL)
  //     .then(response => response.json())
  //     .then(movieData => setMovieDetails(movieData))
  //   fetch(VIDEO_URL)
  //     .then(response => response.json())
  //     .then(data => setVideoKey(data.results[0].key))
  // }, [])


  return (
    <div className="row">
      <div className="col-left">
        <h4>Movie Details</h4>
        <img src={`${apiImg}${MovieDetails.poster_path}`} alt="poster" />
        <ul>
          <li>
            <p>Release Date : {MovieDetails.release_date}</p>
          </li>
          <li>
            <p>Rating : {MovieDetails.vote_average}, Vote Count : {MovieDetails.vote_count}</p>
          </li>
          <li>
            <p>Synopsis : {MovieDetails.overview}</p>
          </li>
          <li>
            <Link to={-1}><button>Go Back</button></Link>
          </li>
        </ul>
      </div>
      <div className="col-right">
        <h2>{MovieDetails.original_title}</h2>
        {VideoKey && <Video videoKey={VideoKey} />}
      </div>
    </div>
  )
}

export default MovieDetails