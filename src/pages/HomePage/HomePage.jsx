import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { trendingMovies } from "../../movies_api.js";
import Loader from '../../components/Loader/Loader.jsx';
import MovieList from "../../components/MovieList/MovieList.jsx";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import css from '../HomePage/HomePage.module.css';

export default function HomePage() {

  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => { 
    
    async function getMovies() {
      try {
      setIsLoading(true)
      const data = await trendingMovies()
      const trendingData = data.results
      setMovies(trendingData)
        
    } catch (error) {
      setError(true)
      } finally {
        setIsLoading(false)
      }
      
    }
    getMovies();
    
  }, [])
  

    return (
        <>
            {isLoading && <Loader />}
        {!error && <div className={css.container}>
          <h1 className={css.titleHomePage}>Tranding Today</h1>
          <MovieList movie={movies} location={location} />
        </div>}
            {error && <ErrorMessage />}
        </>
        
    )
}