import css from '../DetailsList/DetailsList.module.css'

export default function DetailsList({
    details: {
        poster_path,
        tagline,
        title,
        vote_average,
        overview,
        genres
}}) {
    return (
          <div className={css.listContainer}>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={tagline} />
          <ul className={css.list}>
            <li><h2 className={css.titleMovie}>{title}</h2></li>
            <li>User score: {vote_average}</li>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
                    <p>{genres.map(genre => genre.name).join(" ")}</p>
            </li>
          </ul>
        </div>
    )
}