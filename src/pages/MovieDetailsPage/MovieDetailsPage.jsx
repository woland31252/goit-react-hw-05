import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import DetailsList from '../../components/DetailsList/DetailsList.jsx';
import ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";
import { fetchMoviesId } from '../../movies_api.js';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';


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
        <div className={css.pageContainer}>
        {movies && <DetailsList details={movies} />}
        <ul className={css.linkList}>
          <li >
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link  to="reviews">Reviews</Link>
          </li>
        </ul>
          <Outlet/>
          {error && <ErrorMessage/>}
        </div>
        
    )
}