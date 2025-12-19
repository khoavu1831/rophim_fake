import Collection from "./Collection/Collection"
import { titleCollections } from "../../../utils/seed"
import Ranking from "./Ranking/Ranking"

function MainContent({ movies }) {
  return (
    <>
      <div className="bg-[#1b1d29] h-full max-sm:pb-20 md:pb-24 lg:pb-40 gap-4 flex flex-col">
        {/* Ranking */}
        <div className="ranking">
          <Ranking />
        </div>

        {/* Collections */}
        <div className="collection gap-6 md:gap-12 flex flex-col">
          <Collection movies={movies} titleCollection={titleCollections[0]} variant={"vertical"} />
          <Collection movies={movies} titleCollection={titleCollections[1]} variant={"vertical"} />
          <Collection movies={movies} titleCollection={titleCollections[2]} variant={"horizontal"} />
          <Collection movies={movies} titleCollection={titleCollections[3]} variant={"vertical"} />
          <Collection movies={movies} titleCollection={titleCollections[4]} variant={"horizontal"} />
        </div>
      </div>
    </>
  )
}

export default MainContent