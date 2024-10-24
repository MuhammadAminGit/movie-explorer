import React from 'react';
import { useFavorites } from './FavoritesContext';
import MovieList from './MovieList';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Favorite Movies</h1>
      <MovieList movies={favorites} />
    </div>
  );
};
export default Favorites;
