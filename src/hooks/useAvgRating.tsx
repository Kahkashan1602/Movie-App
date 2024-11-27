import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const useAvgRating = () => {
    const {selectedMovie } = useSelector((state: RootState) => state.movies);
    const getRating = (source:string) => {
        const rating = selectedMovie?.omdbDetails?.Ratings.find(r => r.Source === source)?.Value || '';
        return source === 'Rotten Tomatoes' ? parseFloat(rating.replace('%', '')) : source === 'Metacritic' ? parseFloat(rating) : parseFloat(rating) * 10;
      };
    
    const imdbRating = getRating('Internet Movie Database') || 0;
    const rottenTomatoesRating = getRating('Rotten Tomatoes') || 0;
    const metacriticRating = getRating('Metacritic') || 0;
    
    const averageRating = (imdbRating + rottenTomatoesRating + metacriticRating) / 30;

  return {imdbRating,rottenTomatoesRating,metacriticRating,averageRating}
}

export default useAvgRating
