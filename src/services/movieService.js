import { fetchApi } from "../api/http";
import { TMDB_BASE_URL } from "../api/tmdb";

export const getPopularMovies = () =>
    fetchApi(`${TMDB_BASE_URL}/movie/popular?language=vi-VN&page=1`);

export const getDetailsMovie = (id) =>
    fetchApi(`${TMDB_BASE_URL}/movie/${id}?language=vi-VN`);

export const getSliderMovies = async () => {
    const popularMovies = await getPopularMovies();
    const topMovies = popularMovies.results.slice(0, 6);
    const detailPromises = topMovies.map(movie => getDetailsMovie(movie.id));

    return await Promise.all(detailPromises);
}

export const getTopMovies = async () => {
    const popularMovies = await getPopularMovies();
    const topMovies = popularMovies.results;
    const detailPromises = topMovies.map(movie => getDetailsMovie(movie.id));

    return await Promise.all(detailPromises);
}

export const getAnimeList = () =>
    fetchApi(`${TMDB_BASE_URL}/discover/movie?language=vi-VN&with_original_language=ja&page=1`);

export const getAnimeSliderData = async () => {
    const animeList = await getAnimeList();
    const topAnime = animeList.results.slice(0, 15);
    const detailPromises = topAnime.map(movie => getDetailsMovie(movie.id));

    return await Promise.all(detailPromises);
}