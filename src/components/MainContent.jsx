import Collection from "./Collection/Collection"
import { movies } from "../utils/seed"

function MainContent() {
  return (
    <>
      <div className="bg-[#1b1d29] h-full">
        <Collection movies={movies} isVertical={"yes"}/>
        <Collection movies={movies} isVertical={"no"}/>
        <Collection movies={movies} isVertical={"no"}/>
        <Collection movies={movies} isVertical={"yes"}/>
      </div>
    </>
  )
}

export default MainContent