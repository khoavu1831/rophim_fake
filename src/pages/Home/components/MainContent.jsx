import Collections from "./Collections/Collections"
import Ranking from "./Ranking/Ranking"
import TopMovies from "./TopMovies"

function MainContent({ movies }) {
  return (
    <>
      <div className="bg-[#1b1d29] h-full max-sm:pb-20 md:pb-24 lg:pb-40 gap-4 flex flex-col">
        {/* Top movies */}
        <div className="top-movies">
          <TopMovies movies={movies} />
        </div>

        {/* Ranking */}
        <div className="ranking">
          <Ranking />
        </div>

        {/* Collections */}
        <div className="collections">
          <Collections movies={movies}/>
        </div>
      </div>
    </>
  )
}

export default MainContent