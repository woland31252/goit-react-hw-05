import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../movies_api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import NotFound from '../../components/NotFound/NotFound.jsx';
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from '../../components/Loader/Loader.jsx';
import css from '../MoviesPage/MoviesPage.module.css';

export default function MoviesPage() {
  const location = useLocation();
  
   
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notFound, setNotFound] = useState(false);

const params = searchParams.get("query") ?? "";
  const handleSearch = async (newQuery) => {
    setSearchParams({ query: newQuery });
  }
     
  
  


  useEffect(() => { 
    
    if (params === "") {
      return
    }

     async function serchMovies() {
       try {
        setIsLoading(true)
        const data = await fetchMovies(params);
        const curentMovies = data.results;
        setNotFound(curentMovies.length === 0);
        setMovies(curentMovies);
         
      } catch (error) {
        setError(true);
       } finally {
         setIsLoading(false);
      }
     }
    serchMovies()
    
  }, [params])
  
    return (
        <>
        {!error && <div className={css.containerMoviePage}>
          <h2>Movies Page</h2>
          <SearchBar onSearch={handleSearch} />
          {isLoading && <Loader />}
          {notFound && <NotFound />}
          {movies.length > 0 && <MovieList movie={movies} location={location}/>}
        </div>}
          {error && <ErrorMessage />}  
        </> 
    )
}