import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import Rating from '../utils/Rating';
import useAvgRating from '../hooks/useAvgRating';
import { Roman} from '../utils/Roman';

const MovieDetail = () => {
  const {selectedMovie,status } = useSelector((state: RootState) => state.movies);
  const {imdbRating,rottenTomatoesRating,metacriticRating,averageRating} = useAvgRating();
  
  if (status === 'loading') return null;
  return (
    <div className="movie-list w-1/2 p-4 border-s-2 border-slate-200">
      {!selectedMovie && <div>Please select a movie to see details.</div>}
      {selectedMovie && (
        <>
          <h2 className="text-2xl font-bold">Episode {Roman(selectedMovie.episode_id)} - {selectedMovie.title}</h2>
          <div className='flex justify-center'>
            <img src={selectedMovie.omdbDetails.Poster} alt={selectedMovie.title} className="my-4 w-48" />
            <p className='m-4 justify-start'>{selectedMovie.opening_crawl}</p>
          </div>
            <div>Directed By: {selectedMovie.director}</div>
            <div className='flex my-3'> Average Rating: 
                <span className='mx-2 mt-1'><Rating value={averageRating}/></span>
            </div>
            <div className="ratings">
              {imdbRating !==0 && <span className='rating'>Internet Movie Database: {imdbRating}%</span>}
              {rottenTomatoesRating !==0 && <span className='rating'>Rotten Tomatoes: {rottenTomatoesRating}%</span> }
              {metacriticRating !==0 && <span className='rating'>Metacritic: {metacriticRating}%</span> }
            </div>
          </>
      )}
    </div>
  );
};

export default MovieDetail;
