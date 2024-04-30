import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';
import clsx from 'clsx';
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import css from './App.module.css';


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.link}>
        <NavLink to="/" className={buildLinkClass}>Home Page</NavLink>
        <NavLink to="/moviespage" className={buildLinkClass}>Movies Page</NavLink>
        <NavLink to="/moviedetails" className={buildLinkClass}>Movie Details Page</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviespage" element={<MoviesPage />} />
        <Route path="/moviedetails" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>

  )
}

export default App
