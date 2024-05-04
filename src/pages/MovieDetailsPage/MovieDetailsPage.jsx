import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import DetailsList from '../../components/DetailsList/DetailsList.jsx';
import ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";
import { fetchMoviesId } from '../../movies_api.js';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';


export default function MovieDetailsPage() {

    const location = useLocation();
    const backLinkRef = useRef(location.state);
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
      {!error && <div className={css.pageContainer}>
        <Link to={backLinkRef.current ?? "/movies"}>
            <button className={css.btn}>
             GoBack
            </button>
          </Link>
        {movies && <DetailsList details={movies} />}
        <ul className={css.linkList}>
          <li >
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>}
      {error && <ErrorMessage/>}
      </>
        
        
    )
}