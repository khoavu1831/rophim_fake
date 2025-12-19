import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import MainContent from "./components/MainContent";
import Slider from "./components/Slider/Slider";
import { getSliderMovies, getTrendingMovies } from "../../services/movieService";
import { mapTrendingMovie } from "../../mappers/trendingMovieMapper";
import { mapSliderMovie } from "../../mappers/sliderMovieMapper";

function Home() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {
      const mapped = data.results.map(mapTrendingMovie);
      setTrendingMovies(mapped);
    });

    getSliderMovies().then(data => {
      const mapped = data.map(mapSliderMovie)
      setMovies(mapped);
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