import { Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';

import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

import Layout from "./components/Layout/Layout.jsx";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
 )
}

export default App
