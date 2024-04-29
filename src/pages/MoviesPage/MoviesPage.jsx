import MovieList from "../../components/MovieList/MovieList"
import SearchBar from "../../components/SearchBar/SearchBar"

export default function MoviesPage({onSearch, onShowBtn, onClick}) {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <MovieList onShowBtn={onShowBtn} onClick={ onClick} />
        </div>
    )
}