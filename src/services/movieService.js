import axiosClient from "../api/axiosClient";

export const getMovies = (params) => axiosClient.get(`/movies?${params}`).then(res => res.data);

export const fetchSliderMovies = () => getMovies("sortBy=popularity&order=desc&pageSize=10");
export const fetchTopTodayMovies = () => getMovies("sortBy=releaseDate&order=desc&pageSize=10");
export const fetchTopSeriesMovies = () => getMovies("sortBy=voteAverage&order=desc&pageSize=10");

export const fetchAnimeSlider = () => getMovies("search=anime&sortBy=popularity&order=desc&pageSize=10");

export const fetchKoreanMovies = () => getMovies("search=korea&sortBy=popularity&order=desc&pageSize=10");

export const fetchUSUKMovies = () => getMovies("search=us&sortBy=popularity&order=desc&pageSize=10");

export const fetchThaiMovies = () => getMovies("search=thai&sortBy=popularity&order=desc&pageSize=10");

export const fetchCinemaMovies = () => getMovies("sortBy=releaseDate&order=desc&pageSize=10");

export const fetchThrillerMovies = () => getMovies("search=thriller&sortBy=popularity&order=desc&pageSize=10");

export const fetchAnimeCollection = () => getMovies("search=anime&sortBy=voteAverage&order=desc&pageSize=10");

export const getHomeData = async () => {
  const [
    sliderRes,
    animeSliderRes,
    koreanRes,
    usukRes,
    thaiRes,
    cinemaRes,
    topTodayRes,
    thrillerRes,
    animeColRes,
  ] = await Promise.all([
    fetchSliderMovies(),
    fetchAnimeSlider(),
    fetchKoreanMovies(),
    fetchUSUKMovies(),
    fetchThaiMovies(),
    fetchCinemaMovies(),
    fetchTopTodayMovies(),
    fetchThrillerMovies(),
    fetchAnimeCollection(),
  ]);

  return {
    sliderMovies: sliderRes.data ?? [],
    animeSlider: animeSliderRes.data ?? [],
    koreanMovies: koreanRes.data ?? [],
    usukMovies: usukRes.data ?? [],
    thaiMovies: thaiRes.data ?? [],
    cinemaMovies: cinemaRes.data ?? [],
    topTodayMovies: topTodayRes.data ?? [],
    thrillerMovies: thrillerRes.data ?? [],
    animeCollection: animeColRes.data ?? [],
  };
};

export const getMovieDetails = (id) => axiosClient.get(`/movies/${id}`).then(res => res.data);
