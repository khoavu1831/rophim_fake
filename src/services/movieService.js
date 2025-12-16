import { fetchApi } from "../api/http";
import { TMDB_BASE_URL } from "../api/tmdb";

export const getPopularMovies = () => 
    fetchApi(`${TMDB_BASE_URL}/movie/popular?language=vi-VN&page=1`);

export const getMovieDetail = (id) =>
    fetchApi(`${TMDB_BASE_URL}/movie/${id}?language=vi-VN`);

export const getTrendingMovies = () => 
    fetchApi(`${TMDB_BASE_URL}/trending/movie/day?language=vi-VN`);

//https://api.themoviedb.org/3/trending/movie/{time_window}