// src/components/App.tsx
import React from 'react';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SortFilter from './components/SortFilter';
import './App.css';
const App = () => {
  return (
    <div>
    <SortFilter />
    <div className="container">
        <MovieList />
        <MovieDetail />
    </div>
  </div>
  );
};

export default App;
