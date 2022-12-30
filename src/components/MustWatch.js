import React, { useState, useEffect } from 'react';

function MovieList() {
  const apiImg = "https://image.tmdb.org/t/p/w500/"
  const [movies, setMovies] = useState([]);
  const setRateColor = vote => {
    if (vote >= 8) return 'green'
    else if (vote >= 6) return 'goldenrod'
    else return 'red'
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8f11a2c440e8e722cffbc76df58bc14c&sort_by=vote_count.desc`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <>
      {movies.map(movie => (
        <div className="mustWatch" key={movie.id}>
          <div className="movieHeader">
            <strong className='title'>{movie.title !== "" ? movie.title : "???"}</strong>
          </div>
          <div className="poster">
            <img src={movie.poster_path == null ? "https://source.unsplash.com/320x400?movie-theater" : apiImg + movie.poster_path} alt="poster" />
            <span className='rate' style={{ backgroundColor: setRateColor(movie.vote_average) }}>{movie.vote_average}</span>
            <p className='date'>{movie.release_date}</p>
          </div>
        </div>
      ))}

    </>
  )
}

export default MovieList;
