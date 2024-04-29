import MovieList from "../../components/MovieList/MovieList";
import css from '../HomePage/HomePage.module.css'
export default function HomePage({ movie }) {
    return (
        <div className={css.container}>
            <h1>Tranding Today</h1>
            <MovieList movie={ movie} />
        </div>
    )
}