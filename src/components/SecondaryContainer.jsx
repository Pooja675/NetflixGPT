import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  // const movies = useSelector((store) => store.movies)
  const movies = useSelector((store) => store.movies);
   
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
       
     <div className=' -mt-40 pl-12 relative z-20'>
     <MovieList title="Now Playing"  movies={movies.nowPlayingMovies} />
      <MovieList title="Popular"  movies={movies.popularMovies} />
      <MovieList title="Upcoming"  movies={movies.upComingMovies} />
      <MovieList title="Top Rated"  movies={movies.topRatedMovies} />

     </div>
 </div>
    )
   
   
  )
}

export default SecondaryContainer