import { useState, useEffect } from 'react'
import { fetchMovies } from './movies_api.js'
import './App.module.css'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  setMovies(fetchMovies)
  }, [movies])

  return (
    <>
      
    </>
  )
}

export default App
