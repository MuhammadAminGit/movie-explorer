import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = async (query) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=379f731`);
    setMovies(response.data.Search || []);
  };

  const handleSearch = () => fetchMovies(searchQuery);

  useEffect(() => {
    fetchMovies('avengers'); 
  }, []);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;