import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../interface/Movie";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get("https://swapi.dev/api/films/?format=json");
  const movies = response.data.results;
  const moviesWithDetails = await Promise.all(
    movies.map(async (movie:Movie) => {
      const omdbResponse = await axios.get("https://www.omdbapi.com/", {
        params: {
          t: movie.title,
          apikey: "b9a5e69d"
        }
      });
      return {
        ...movie,
        omdbDetails: omdbResponse.data
      };
    })
  );
  return moviesWithDetails;
});