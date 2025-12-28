import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import MainContent from "./components/MainContent";
import Slider from "./components/Slider/Slider";
import { getAnimeSliderData, getSliderMovies, getTrendingMovies } from "../../services/movieService";
import { mapTrendingMovie } from "../../mappers/trendingMovieMapper";
import { mapSliderMovie } from "../../mappers/sliderMovieMapper";

function Home() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [animeMovies, setAnimeMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {
      const mapped = data.results.map(mapTrendingMovie);
      setTrendingMovies(mapped);
    });

    getSliderMovies().then(data => {
      const mapped = data.map(mapSliderMovie)
      setMovies(mapped);
    });

    getAnimeSliderData().then(data => {
      const mapped = data.map(mapSliderMovie)
      setAnimeMovies(mapped);
    })
  }, [])

  return (
    <div className="h-full bg-[#101117]">
      <Header />
      <Slider movies={movies} />
      <MainContent movies={trendingMovies} animemovies={animeMovies} />
      <Footer />
    </div>
  )
}

export default Home