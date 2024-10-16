import React from 'react'
import MoviePoster from '../components/MoviePoster'
import MovieInfo from '../components/MovieInfo';

const MovieDetailsPage = () => {
  return (
    <div>
      <div className=' flex flex-col h-auto'>
      <MoviePoster />
      <MovieInfo />
      </div>
    </div>
  )
}

export default MovieDetailsPage;