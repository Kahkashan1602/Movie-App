import React, { useEffect } from 'react';
import { Movie } from '../model/Movie';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatchThunk } from '../hooks/useDispatchThunk'
import { showSelectedMovie} from '../redux/movieSlice';
import Rating from '../utils/Rating';
import { fetchMovies } from '../services/fetchMovies'
import { Roman } from '../utils/Roman';
import '../App.css';

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
    <div className="movie-list">
      <div className="status-message">
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error loading data: {error}</div>}
      </div>
      {status !== 'loading' && status !== 'failed' && (
        <table className="movie-table">
          <tbody>
            {movies.map((movie) => (
              <tr
                key={movie.episode_id}
                className="movie-row"
                onClick={() => handleSelectMovie(movie)}
              >
                <td className="episode-id">Episode {movie.episode_id}</td>
                <td className="episode-title">
                  Episode {Roman(movie.episode_id)} - {movie.title}
                </td>
                <td className="rating">
                  <Rating value={parseInt(movie.omdbDetails.imdbRating)} />
                </td>
                <td className="release-date">{movie.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MovieList;
