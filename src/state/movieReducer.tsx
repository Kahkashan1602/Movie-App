import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../interface/Movie";
import { fetchMovies } from '../services/fetchMovies'

  interface MovieState {
    movies: Movie[];
    originalMovies: Movie[],
    selectedMovie: Movie | null;
    status: string;
    error: string | null;
  }
  const initialState: MovieState = {
    movies: [],
    originalMovies: [],
    selectedMovie: null,
    status: 'idle',
    error: null,
  };
  
  const movieReducer = createSlice({
      name: "movieReducer",
      initialState,
      reducers:{
          showSelectedMovie:(state, action) => {
              state.selectedMovie = action.payload;
          },
          sortMoviesByYear: (state) => { 
              state.movies.sort((a, b) => new Date(a.release_date).getFullYear() - new Date(b.release_date).getFullYear()); 
          }, 
          sortMoviesByEpisode: (state) => { 
              state.movies.sort((a, b) => a.episode_id - b.episode_id); 
          },
          sortMoviesByName: (state) => { 
            state.movies.sort((a, b) => a.title.localeCompare(b.title)).join("");
          },
          sortMoviesByRating: (state) => { 
            state.movies.sort((a: Movie, b: Movie) => {
              const ratingA = a.omdbDetails.imdbRating === 'N/A' ? -1 : parseFloat(a.omdbDetails.imdbRating);
              const ratingB = b.omdbDetails.imdbRating === 'N/A' ? -1 : parseFloat(b.omdbDetails.imdbRating);
              return ratingB - ratingA;
            });     
          },
          filterMoviesByName: (state, action) => {
            const query = action.payload.toLowerCase(); 
            if (query !== '') {
              state.movies = state.originalMovies.filter((movie:Movie) => movie.title.toLowerCase().includes(query));
            } else {
              state.movies = state.originalMovies;
            }
          }
      },
      extraReducers: (builder) => {
          builder 
          .addCase(fetchMovies.pending, (state) => { 
              state.status = 'loading'; 
          }) 
          .addCase(fetchMovies.fulfilled, (state, action) => { 
              state.status = 'succeeded'; 
              state.movies = action.payload;
              state.originalMovies = action.payload;   
          }) 
          .addCase(fetchMovies.rejected, (state, action) => { 
              state.status = 'failed'; 
              state.error = action.error.message || 'Failed to fetch movies';
          });
          
      }
  })

  export const { 
    showSelectedMovie, 
    sortMoviesByYear, 
    sortMoviesByEpisode, 
    filterMoviesByName, 
    sortMoviesByName,
    sortMoviesByRating } = movieReducer.actions;
    
  export default movieReducer.reducer;