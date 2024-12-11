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
    // <div classNameName="movie-list w-1/2 p-4 border-s-2 border-slate-200">
    //   {!selectedMovie && <div>Please select a movie to see details.</div>}
    //   {selectedMovie && (
    //     <>
    //       <h2 classNameName="text-2xl font-bold">Episode {Roman(selectedMovie.episode_id)} - {selectedMovie.title}</h2>
    //       <div classNameName='flex justify-center'>
    //         <img src={selectedMovie.omdbDetails.Poster} alt={selectedMovie.title} classNameName="my-4 w-48" />
    //         <p classNameName='m-4 justify-start'>{selectedMovie.opening_crawl}</p>
    //       </div>
    //         <div>Directed By: {selectedMovie.director}</div>
    //         <div classNameName='flex my-3'> Average Rating: 
    //             <span classNameName='mx-2 mt-1'><Rating value={averageRating}/></span>
    //         </div>
    //         <div classNameName="ratings">
    //           {imdbRating !==0 && <span classNameName='rating'>Internet Movie Database: {imdbRating}%</span>}
    //           {rottenTomatoesRating !==0 && <span classNameName='rating'>Rotten Tomatoes: {rottenTomatoesRating}%</span> }
    //           {metacriticRating !==0 && <span classNameName='rating'>Metacritic: {metacriticRating}%</span> }
    //         </div>
    //       </>
    //   )}
    // </div>
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
