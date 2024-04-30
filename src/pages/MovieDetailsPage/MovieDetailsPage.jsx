import { useParams } from "react-router-dom"

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    return (
        <h2>Movie Details Page</h2>
    )
}