import { Link } from "react-router-dom";
import css from '../NotFoundPage/NotFoundPage.module.css'
export default function NotFoundPage() {
    return (
        <div className={css.notFoundPage}>
            <p className={css.textItemError}>ERROR 404</p>
            <p> NotFoundPage</p >
            <p>Please visit out { <Link to="/">Home page</Link>}</p>
        </div>
        

    )
}