import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortMoviesByYear,sortMoviesByEpisode,filterMoviesByName,sortMoviesByName,sortMoviesByRating} from '../redux/movieSlice';
import '../App.css';

const SortFilter = () => {
  const [filterText, setFilterText] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = (e:any) => {
    const text = e.target.value.toLowerCase();
      setFilterText(text);
      onSortFilter('filter', text);
  };

  const handleSortChange = (e:any) => {
    const sortType = e.target.value;
    onSortFilter('sort', sortType);
  };

  const onSortFilter = (type:string,value:string) => {
    if (type === 'sort') {
      if (value === 'Year') dispatch(sortMoviesByYear());
      if (value === 'Episode') dispatch(sortMoviesByEpisode());
      if (value === 'Name') dispatch(sortMoviesByName());
      if (value === 'Rating') dispatch(sortMoviesByRating());
    } else if (type === 'filter') {
      dispatch(filterMoviesByName(value));
    }
  }

  return (
    <div className="sort-filter">
      <select onChange={handleSortChange} className="sort-dropdown">
        <option value="-1">-Sort By-</option>
        <option value="Year">Year</option>
        <option value="Episode">Episode</option>
        <option value="Name">Name</option>
        <option value="Rating">Rating</option>
      </select>
      <input
        type="text"
        placeholder="Type to filter..."
        value={filterText}
        onChange={handleFilterChange}
        className="filter-input"
      />
    </div>
  );
};

export default SortFilter;
