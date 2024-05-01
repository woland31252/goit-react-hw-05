import { useState, useEffect } from 'react';
import { fetchMovies } from "../../movies_api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import SearchBar from "../../components/SearchBar/SearchBar";
import css from '../MoviesPage/MoviesPage.module.css';

export default function MoviesPage() {
   
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");


  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
  }
     
  
  


  useEffect(() => { 
    
    if (query === "") {
      return
    }

     async function serchMovies() {
       try {
        
         const data = await fetchMovies(query);
             const curentMovies = data.results;
    setMovies(curentMovies);

         
      } catch (error) {
        setError(true);
      } 
     }
    serchMovies()
    
  }, [query])
  

  

    return (
        <>
        <div className={css.containerMoviePage}>  
            <h2>Movies Page</h2>
            <SearchBar onSearch={handleSearch} />
            {movies.length > 0 && <MovieList movie={ movies} />}
            </div>
            {error && <ErrorMessage />}
        </>
        
    )
}