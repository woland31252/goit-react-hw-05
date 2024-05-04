/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from '../../movies_api.js';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from '../MovieCast/MovieCast.module.css'

export default function MovieCast() {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(false);

  useEffect(() => { 
         async function searchMovieCreditsId() {
       try {
   
        const data = await fetchMovieCredits(movieId);
        setReviews(data)
        } catch (error) {
        setError(true);
      } 
     }
    searchMovieCreditsId()
    
  }, [movieId])
    
    return (
        <div className={css.castList}>
        {!error && reviews && reviews.map(data => <div className={ css.castCard} key={data.id}>
              {data.profile_path && <img className={css.castImg} src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.original_name} width="100px" />}
                <p className={css.actorTitle}>{data.name}</p>
                {data.character ? <p className={css.actorTitle}>Character: {data.character}</p> : <p>Character: There is no information</p>}
            </div>)}
            {reviews !== null && reviews.length === 0 && <p className={css.messageItem}>We don't have any data for this movie</p>}
            {error && <ErrorMessage/>}
        </div>
    )
}