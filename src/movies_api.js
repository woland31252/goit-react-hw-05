import axios from "axios";


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWFlMmJmMDg3ZGQyZmViNzRlZWI5YTIyZTE5MDc5MCIsInN1YiI6IjY2MmFiYmNjOTVjZTI0MDEyMDYwYTQ0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vak3Rg3EH94CVTNoXD1zr6KvBKrikxEPFiy2D724ykw',
  },
});

export const fetchMovies = async () => {
  const response = await instance.get("/trending/movie/week?language=en-US", {
    // params: {
    //   query: searchQuery,
    //   page: curentPage,
    //   per_page: 12,
    // },
  });
  return console.log(response.data);
};


