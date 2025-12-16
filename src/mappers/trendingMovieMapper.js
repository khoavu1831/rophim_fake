import { TMDB_IMAGE_URL } from "../api/tmdb";

export const mapTrendingMovie = (m) => {
  return {
    id: m.id,
    imageUrl: {
        horizontal: m.backdrop_path ? `${TMDB_IMAGE_URL}/original${m.backdrop_path}` : "vietnam.png",
        vertical: m.poster_path ? `${TMDB_IMAGE_URL}/original${m.poster_path}` : "vietnam.png",
    },
    subtitle: "--",
    dub: "--",
    title: m.title,
    subTitle: m.original_title
  }
}