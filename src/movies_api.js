import axios from "axios";


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWFlMmJmMDg3ZGQyZmViNzRlZWI5YTIyZTE5MDc5MCIsInN1YiI6IjY2MmFiYmNjOTVjZTI0MDEyMDYwYTQ0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vak3Rg3EH94CVTNoXD1zr6KvBKrikxEPFiy2D724ykw',
  },
});

export const trendingMovies = async () => {
  const response = await instance.get("/trending/movie/day?language=en-US");
  return response.data;
};

export const fetchMovies = async (searchQuery) => {
  const response = await instance.get("/search/movie", {
    params: {
      query: searchQuery,
      language: "en-US"
    },
  });
  return response.data
};

export const fetchMoviesId = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}`,
    {
    params: {
      language: "en-US"
    },
  });
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

