import css from '../MovieList/MovieList.module.css'

export default function MovieList({movie}) {
    return (
        <>
            <ul className={css.movieList}>
            {movie.map((movies) => (<li className={css.movieItem} key={movies.id}>{movies.title}</li>))}
            </ul>    
        </>
        
        
    )
}