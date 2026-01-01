import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import MainContent from "./components/MainContent";
import Slider from "./components/Slider/Slider";
import { getAnimeSliderData, getTopMovies } from "../../services/movieService";
import { mapSliderMovie } from "../../mappers/sliderMovieMapper";

function Home() {
  const [movies, setMovies] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getTopMovies().then(data => {
      const mapped = data.map(mapSliderMovie);
      setMovies(mapped);
    });

    getAnimeSliderData().then(data => {
      const mapped = data.map(mapSliderMovie);
      setAnimes(mapped);
    })
  }, [])

  return (
    <div className="h-full bg-[#101117]">
      <Header />
      <Slider movies={movies} />
      <MainContent animes={animes} movies={movies}/>
      <Footer />
    </div>
  )
}

export default Home