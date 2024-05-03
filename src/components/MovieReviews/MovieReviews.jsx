/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from '../../movies_api.js';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from '../MovieReviews/MovieReviews.module.css'

export default function MovieReviews() {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(false);

  useEffect(() => { 
         async function searchMovieReviewsId() {
       try {
   
        const data = await fetchMovieReviews(movieId);
        setReviews(data)
        } catch (error) {
        setError(true);
      } 
     }
    searchMovieReviewsId()
    
  }, [movieId])
    
    return (
        <div>
            {reviews && reviews.map(data => (<div key={data.id}>
                {data.author?<h3 className={css.authorTitle}>AUTHOR: {data.author}</h3>:<p>No data for author</p>}
                <p className={css.contentItem}>{data.content}</p>
            </div>))}
            {reviews !== null && reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
            {error && <ErrorMessage/>}
        </div>
    )
}