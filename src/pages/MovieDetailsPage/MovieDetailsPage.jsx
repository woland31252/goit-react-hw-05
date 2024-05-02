import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DetailsList from '../../components/DetailsList/DetailsList.jsx'
import ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";
import { fetchMoviesId }  from '../../movies_api.js'

export default function MovieDetailsPage() {
    const { movieId } = useParams();

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(false);


     
  
  


  useEffect(() => { 
    
    // if (query === "") {
    //   return
    // }

     async function searchMoviesId() {
       try {
        
        const data = await fetchMoviesId(movieId);
        setMovies(data)
        

         
      } catch (error) {
        setError(true);
      } 
     }
    searchMoviesId()
    
  }, [movieId])


    return (
        <>
        {movies && <DetailsList details={movies} />}
        {/* {movies && movies.map((movie) => (
          <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.tagline} />
          <ul>
            <li>{movie.title}</li>
            <li>User score: {movie.vote_average.value}</li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <p>{movie.genres.value}</p>
            </li>
          </ul>
        </div>
        ))} */}
            {error && <ErrorMessage/>}
        </>
        
    )
}