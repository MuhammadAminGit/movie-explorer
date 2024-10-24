import MovieItem from './MovieItem';

const MovieList = ({ movies }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} />)}
  </div>
);
export default MovieList;