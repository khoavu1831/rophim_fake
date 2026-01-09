import { fetchApi } from "../api/http";
import { TMDB_BASE_URL } from "../api/tmdb";

export const fetchPopularMovies = () =>
    fetchApi(`${TMDB_BASE_URL}/movie/popular?language=vi-VN&page=1`);

export const fetchDetailsMovie = (id) =>
    fetchApi(`${TMDB_BASE_URL}/movie/${id}?language=vi-VN`);

export const fetchAnimes = () =>
    fetchApi(`${TMDB_BASE_URL}/discover/movie?language=vi-VN&with_original_language=ja&page=1`);

export const getTopMovies = async () => {
    const popularMovies = await fetchPopularMovies();
    const topMovies = popularMovies.results;
    const detailPromises = topMovies.map(movie => fetchDetailsMovie(movie.id));

    return await Promise.all(detailPromises);
}

export const getAnimeSliderData = async () => {
    const animeList = await fetchAnimes();
    const topAnime = animeList.results.slice(0, 15);
    const detailPromises = topAnime.map(movie => fetchDetailsMovie(movie.id));

    return await Promise.all(detailPromises);
}

