import React, { useEffect } from 'react';
import { Movie } from '../interface/Movie';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useDispatchThunk } from '../hooks/useDispatchThunk'
import { showSelectedMovie} from '../state/movieReducer';
import Rating from '../utils/Rating';
import { fetchMovies } from '../services/fetchMovies'
import { Roman } from '../utils/Roman';

const MovieList = () => {
  const dispatch = useDispatchThunk();
  const { movies, status, error  } = useSelector((state: RootState) => state.movies);
    
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSelectMovie = (movie : Movie) => {
    dispatch(showSelectedMovie(movie));
  };

  return (
    <div className="movie-list w-1/2 p-4">
      { status === 'loading' && <div>Loading...</div> }
      { status === 'failed' && <div>Error loading data: {error}</div>}
      {
        (status !== 'loading' && status !== 'failed') &&
        <table className="table-auto w-full">
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-300">
            {movies.map((movie: Movie) => (
              <tr
                key={movie.episode_id}
                className="cursor-pointer p-2 hover:bg-gray-200 lg:text-lg md:text-base sm:text-xs xs:text-xs  text-black"
                onClick={() => handleSelectMovie(movie)}
              >
                <td className="whitespace-nowrap md:py-2 md:pl-2 md:pr-2 xs:pr-0 xs:py-0 xs:pl-0">
                  Episode {movie.episode_id}
                </td>
                <td className="whitespace-nowrap py-2 pl-2 pr-2 ">
                  Episode {Roman(movie.episode_id)} - {movie.title}
                </td>
                <td className=" hidden lg:block md:block whitespace-nowrap py-2 pl-2 pr-2 ">
                  <Rating value={parseInt(movie.omdbDetails.imdbRating)} />
                </td>
                <td className="whitespace-nowrap py-2 pl-2 pr-2">
                  {movie.release_date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default MovieList;
