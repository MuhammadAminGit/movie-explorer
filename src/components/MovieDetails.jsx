import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=379f731`);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="p-4">
      {movie ? (
        <>
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Released: {movie.Released}</p>
          <p>Rating: {movie.imdbRating}</p>
          <p>Plot: {movie.Plot}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default MovieDetails;
