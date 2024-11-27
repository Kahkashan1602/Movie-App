// src/components/App.tsx
import React from 'react';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SortFilter from './components/SortFilter';

const App = () => {
  return (
    <div>
      <SortFilter />
      <div className="w-full flex justify-start item-center h-screen">
        <MovieList />
        <MovieDetail />
      </div>
    </div>
  );
};

export default App;
