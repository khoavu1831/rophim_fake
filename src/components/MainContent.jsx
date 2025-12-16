import Collection from "./Collection/Collection"
import { movies } from "../utils/seed"
import { titleCollections } from "../utils/seed"

function MainContent() {
  return (
    <>
      <div className="bg-[#1b1d29] h-full max-sm:pb-20 md:pb-24 lg:pb-40 gap-4 flex flex-col">
        <div className="top-list w-500px m-auto border border-amber-300 p-12 mt-4">
          <h1 className="text-4xl text-pink-500">TOP LIST HERE</h1>
        </div>
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