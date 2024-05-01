import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsList from '../../components/DetailsList/DetailsList.jsx'
import ErrorMessage  from "../../components/ErrorMessage/ErrorMessage";
import { fetchMoviesId }  from '../../movies_api.js'

export default function MovieDetailsPage() {
    const { movieId } = useParams();

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(false);



//   const handleSea = async (newQuery) => {
//     setQuery(newQuery);
//     setMovies([]);
//   }
     
  
  


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
            <h2>Movie Details Page {movieId}</h2>
            {movies && <DetailsList details={movies}/>}
            {error && <ErrorMessage/>}
        </>
        
    )
}