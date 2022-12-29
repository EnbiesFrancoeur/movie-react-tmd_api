import React, { useState, useEffect } from 'react';

function MovieList() {
  const apiImg = "https://image.tmdb.org/t/p/w500/"
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8f11a2c440e8e722cffbc76df58bc14c&sort_by=vote_average.desc`)
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
        <div className="highestRated" key={movie.id}>
          <div className="movieHeader">
            <strong className='title'>{movie.title !== "" ? movie.title : "???"}</strong>
          </div>
          <div className="poster">
            <img src={movie.poster_path == null ? "https://source.unsplash.com/320x400?movie-theater" : apiImg + movie.poster_path} alt="poster" />
          </div>
          <div className='movieFooter'>
            <span className='date'>{movie.release_date}</span>
            <span className='rate'>{movie.vote_average}</span>
          </div>
        </div>
      ))}

    </>
  )
}

export default MovieList;
