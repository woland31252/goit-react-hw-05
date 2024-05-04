import { Link } from 'react-router-dom'
import css from '../MovieList/MovieList.module.css'

export default function MovieList({ movie, location }) {
    return (
        <>
            <ul className={css.movieList}>
            {movie.map((movies) => ( <li className={css.movieItem} key={movies.id}><Link to={`/movies/${movies.id}`} state={location}>{movies.title}</Link></li>))}
            </ul>    
            
        </>
        
        
    )
}