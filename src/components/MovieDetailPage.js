import { useEffect, useState } from "react"

export default function MovieDetailPage(props) {
  const [MovieDetail, setMovieDetail] = useState({})

  useEffect(() => {
    const movieId = props.params.movieId
    FetchMovieDetailById(movieId)
  }, [props])


  function FetchMovieDetailById(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8f11a2c440e8e722cffbc76df58bc14c`)
      .then(response => response.json)
      .then(data => setMovieDetail(data.results))
  }
  console.log(process.env.REACT_APP_apikey);
  return (
    <div className="MovieDetail" key={MovieDetail.id}>
      <div className="MovieDetailHeader">
        <strong className='title'>{MovieDetail.title !== "" ? MovieDetail.title : "???"}</strong>
      </div>
      <div className="poster">
        <img src={MovieDetail.poster_path == null ? "https://source.unsplash.com/320x400?movie-theater" : "https://image.tmdb.org/t/p/w500/" + MovieDetail.poster_path} alt="poster" />
        <span className='date'>{MovieDetail.release_date}</span>
        <span className='rate'>{MovieDetail.vote_average}</span>
      </div>


    </div>
  )
}
