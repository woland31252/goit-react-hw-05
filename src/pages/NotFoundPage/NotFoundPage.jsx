import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <p>ERROR 404</p>
            <p> NotFoundPage</p >
            <p>Please visit out { <Link to="/">Home page</Link>}</p>
        </>
        

    )
}