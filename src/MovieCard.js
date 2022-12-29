import React from 'react'

const MovieCard = (props) => {
  const apiImg = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className="movieCard">
      <div className="movieHeader">
        <strong className='title'>{props.title}</strong>
      </div>
      <div className="poster">
        <img src={props.poster_path == null ? "https://source.unsplash.com/320x400?movie-theater" : apiImg + props.poster_path} alt="poster" />
      </div>
      <div className='movieFooter'>
        <span className='date'>{props.release_date}</span>
        <span className='rate'>{props.vote_average}</span>
      </div>
    </div>
  )
}

// 

export default MovieCard