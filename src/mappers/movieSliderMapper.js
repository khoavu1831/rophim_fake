import { TMDB_IMAGE_URL } from "../api/tmdb";

export const mapMovieToSlider = (m) => {
  return {
    id: m.id,
    poster: m.backdrop_path ? `${TMDB_IMAGE_URL}/original${m.backdrop_path}` : "vietnam.png",
    avatar: m.poster_path ? `${TMDB_IMAGE_URL}/original${m.poster_path}` : "vietnam.png",
    title: m.title,
    subTitle: m.original_title,
    description: m.overview,
    info: {
      imdb: m.vote_average.toFixed(1) ?? "--",
      year: m.release_data ?? "--",
      resolution: "HD",
      ageLimit: "18+",
      duration: "--",
      genres: []
    }
  }
}