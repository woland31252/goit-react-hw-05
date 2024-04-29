import { useState, useEffect } from 'react'
import { trendingMovies, fetchMovies } from './movies_api.js'
import './App.module.css'
import HomePage from './pages/HomePage/HomePage.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setMovies([]);
  }
     
  
  
  const handleLoadMore = () => {
      setPage(page+1)
  }

  useEffect(() => { 
    
    async function getMovies() {
      try {
      const data = await trendingMovies()
      const trendingData = data.results
      setMovies(trendingData)
        
    } catch (error) {
      setError(true)
      }
      
    }
    getMovies();

    if (query === "") {
      return
    }

     async function serchMovies() {
       try {
        
         const data = await fetchMovies(query, page);
         const curentMovies = data.results;
         setMovies((prevImages) => { return [...prevImages, ...curentMovies] });
         const totalPages = data.total_pages;
         setShowBtn(totalPages && totalPages !== page);
         
      } catch (error) {
        setError(true);
      } 
     }
    serchMovies()
    
  }, [query, page])
  
  console.log(movies)
  
  return (
    <>
      {movies.length > 0 && <HomePage movie={movies} />}
      {error && <ErrorMessage />}
      <MoviesPage onSearch={handleSearch} onShowBtn={ showBtn} onClick={handleLoadMore}/>
    </>
  )
}

export default App
