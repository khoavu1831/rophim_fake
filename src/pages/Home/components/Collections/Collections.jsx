import Collection from "./Collection"
import { titleCollections } from "../../../../utils/seed"
function Collections({ movies }) {
  return (
    <div className="collection gap-6 md:gap-12 flex flex-col">
      <Collection movies={movies} titleCollection={titleCollections[0]} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[1]} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[2]} variant={"horizontal"} />
      <Collection movies={movies} titleCollection={titleCollections[3]} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[4]} variant={"horizontal"} />
    </div>
  )
}

export default Collections