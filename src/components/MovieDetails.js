import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Video from "./Video"

const MovieDetails = () => {
  const apiImg = "https://image.tmdb.org/t/p/w500/"
  const [VideoKey, setVideoKey] = useState()
  const [MovieDetails, setMovieDetails] = useState()
  const { movieId } = useParams()

  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8f11a2c440e8e722cffbc76df58bc14c`
  const VIDEO_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=8f11a2c440e8e722cffbc76df58bc14c`

  useEffect(() => {
    fetch(MOVIE_DETAILS_URL)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
    fetch(VIDEO_URL)
      .then(response => response.json())
      .then(data => setVideoKey(data.results[0].key))
  }, [MOVIE_DETAILS_URL, VIDEO_URL])

  console.log(MovieDetails);

  return (
    <div className="movie-details">
      <h2>{MovieDetails?.original_title}</h2>
      <div className="movie-detail">
        <div className="detail-left">
          <img src={`${apiImg}${MovieDetails?.poster_path}`} alt="poster" />
          <ul>
            <li>
              <p>Release Date : {MovieDetails?.release_date}</p>
            </li>
            <li>
              <p>People Watched : {MovieDetails?.popularity.toFixed()}</p>
            </li>
            <li>
              <p>Rating : {MovieDetails?.vote_average.toFixed(1)}</p>
            </li>
            <li>
              <p>Vote Count : {MovieDetails?.vote_count}</p>
            </li>
          </ul>
          <Link to={-1}><button>Go Back</button></Link>
        </div>
        <div className="detail-right">
          {VideoKey && <Video videoKey={VideoKey} />}
          <h3>SYNOPSIS</h3>
          <p className="synopsis">
            <span>
              {MovieDetails?.tagline}
            </span>
            {MovieDetails?.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails