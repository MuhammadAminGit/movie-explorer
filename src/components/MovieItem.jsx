import { Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext'; 

const MovieItem = ({ movie }) => {
  const { addFavorite } = useFavorites(); 

  return (
    <div className="border p-4 rounded">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover"/>
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="text-blue-500">View Details</Link>

        <button 
            onClick={() => addFavorite(movie)} 
            className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
            Add to Favorites
        </button>
    </div>
  );
};

export default MovieItem;
