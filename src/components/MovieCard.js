import { useNavigate } from "react-router-dom"

const MovieCard = (props) => {
  const apiImg = "https://image.tmdb.org/t/p/w500/"
  const navigate = useNavigate()

  const setRateColor = vote => {
    if (vote >= 8) return 'green'
    else if (vote >= 6) return 'goldenrod'
    else return 'red'
  }

  const showMovieDetail = id => {
    navigate(`/details/${id}`)
  }

  return (
    <div className="MovieCard" onClick={() => showMovieDetail(props.id)}>
      <div className="movieHeader">
        <strong className='title'>{props.title}</strong>
      </div>
      <div className="poster">
        <img src={props.poster_path == null ? "https://source.unsplash.com/320x400?movie-theater" : apiImg + props.poster_path} alt="poster" />
        <span className='rate' style={{ backgroundColor: setRateColor(props.vote_average) }}>{props.vote_average}</span>
        <span className='date'>{props.release_date}</span>
      </div>
    </div>
  )
}

// 

export default MovieCard