import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function MovieList({movie, onSowBtn, onClick}) {
    return (
        <>
           <ul>
            {movie.map((movies) => (<li key={movies.id}>{movies.title}</li>))}
            </ul>
            {onSowBtn && <LoadMoreBtn onClick={onClick}/>}    
        </>
        
        
    )
}