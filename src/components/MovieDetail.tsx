import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Rating from '../utils/Rating';
import useAvgRating from '../hooks/useAvgRating';
import { Roman} from '../utils/Roman';
import '../App.css';

const MovieDetail = () => {
  const {selectedMovie,status } = useSelector((state: RootState) => state.movies);
  const {imdbRating,rottenTomatoesRating,metacriticRating,averageRating} = useAvgRating();
  
  if (status === 'loading') return null;
  return (
    <div className="movie-detail">
      {!selectedMovie && <div className="no-movie">Please select a movie to see details.</div>}
      {selectedMovie && (
      <>
        <h2 className="movie-title">
          Episode {Roman(selectedMovie.episode_id)} - {selectedMovie.title}
        </h2>
        <div className="details-container">
          <img src={selectedMovie.omdbDetails.Poster} alt={selectedMovie.title} className="movie-poster" />
          <p className="opening-crawl">{selectedMovie.opening_crawl}</p>
        </div>
        <div className="director">Directed By: {selectedMovie.director}</div>
        <div className="average-rating">
          Average Rating:
          <span className="rating-value">
            <Rating value={averageRating} />
          </span>
        </div>
        <div className="ratings">
          {imdbRating !== 0 && <span className="rating">Internet Movie Database: {imdbRating}%</span>}
          {rottenTomatoesRating !== 0 && <span className="rating">Rotten Tomatoes: {rottenTomatoesRating}%</span>}
          {metacriticRating !== 0 && <span className="rating">Metacritic: {metacriticRating}%</span>}
        </div>
      </>
      )}
    </div>
  );
};

export default MovieDetail;
