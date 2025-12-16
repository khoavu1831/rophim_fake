import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent";
import Slider from "../components/Slider/Slider";
import { getPopularMovies, getTrendingMovies } from "../services/movieService";
import { mapMovieToSlider } from "../mappers/movieSliderMapper";
import { mapTrendingMovie } from "../mappers/trendingMovieMapper";

function Home() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(data => {
      const mapped = data.results.map(mapMovieToSlider);
      setMovies(mapped);
    });

    getTrendingMovies().then(data => {
      const mapped = data.results.map(mapTrendingMovie);
      setTrendingMovies(mapped);
    });
  }, [])

  return (
    <div className="h-full">
      <Header />
      <Slider movies={movies} />
      <MainContent movies={trendingMovies} />
      <Footer />
    </div>
  )
}

export default Home