import { TMDB_IMAGE_URL } from "../api/tmdb";

export const mapSliderMovie = (m) => {
  return {
    id: m.id,
    poster: m.backdrop_path ? `${TMDB_IMAGE_URL}/original${m.backdrop_path}` : "vietnam.png",
    avatar: m.poster_path ? `${TMDB_IMAGE_URL}/original${m.poster_path}` : "vietnam.png",
    title: m.title,
    subTitle: m.original_title,
    description: m.overview,
    info: {
      imdb: m.vote_average.toFixed(1) ?? "--",
      year: m.release_date.slice(0, 4) ?? "--",
      resolution: "HD",
      ageLimit: m.adult ? "18+" : "<18",
      duration: `${m.runtime % 2}h ${(m.runtime / 2).toFixed(0)}m`,
      genres: m.genres?.map(g => ({
        ...g,
        name: g.name.replace(/^Phim\s*/i, "")
      })) ?? []
    }
  }
}