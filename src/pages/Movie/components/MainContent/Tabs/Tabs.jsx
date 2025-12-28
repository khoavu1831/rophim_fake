import { useEffect, useState } from "react"
import Tab from "./Tab"
import ItemVersion from "./ItemVersion";
import Cast from "./Cast";
import Card from "../../../../../components/Cards/Card";
import { getTrendingMovies } from "../../../../../services/movieService";
import { mapTrendingMovie } from "../../../../../mappers/trendingMovieMapper";

function Tabs() {
  const [active, setActive] = useState("episodes");
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {
      const mapped = data.results.map(mapTrendingMovie);
      setTrendingMovies(mapped);
    })
  }, []);


  return (
    <>
      <div className="tabs bg-linear-0 from-gray-400/18 to-90% -mx-4 px-4">
        <div className="flex justify-start md:justify-center gap-6 text-[13px] text-white">
          <Tab id="episodes" active={active} setActive={setActive} />
          <Tab id="gallery" active={active} setActive={setActive} />
          <Tab id="cast" active={active} setActive={setActive} />
          <Tab id="suggest" active={active} setActive={setActive} />
        </div>
      </div>

      {/* --- Content Tab --- */}
      {/* Espisodes */}
      {active === "episodes" && (
        <div className="versions mb-15">
          {/* Heading */}
          <div className="heading py-6">
            <h1 className="text-white text-xl font-bold">Các bản chiếu</h1>
          </div>

          {/* Content*/}
          <div className="grid gap-4 sm:grid-cols-2">
            <ItemVersion subTitle={"Phụ đề"} icon={"fa-closed-captioning"} hexColor={"#726d6d"} />
            <ItemVersion subTitle={"Thuyết minh giọng Nam"} icon={"fa-microphone"} hexColor={"#297447"} />
          </div>
        </div>
      )}


      {/* Cast */}
      {active === "cast" && (
        <div className="versions mb-15">
          {/* Heading */}
          <div className="heading py-6">
            <h1 className="text-white text-xl font-bold">Diễn viên</h1>
          </div>

          {/* Content*/}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/8e6mt0vGjPo6eW52gqRuXy5YnfN.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
          </div>
        </div>
      )}

      {/* Suggest */}
      {active === "suggest" && (
        <div className="versions mb-15">
          {/* Heading */}
          <div className="heading py-6">
            <h1 className="text-white text-xl font-bold">Có thể bạn sẽ thích</h1>
          </div>

          {/* Content*/}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            {trendingMovies.slice(0, 12).map((m) => (
              <Card key={m.id} movie={m} variant={"vertical"} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Tabs