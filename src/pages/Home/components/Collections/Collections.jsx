import Collection from "./Collection"
import CollectionTopMovie from "./CollectionTopMovie"
import { titleCollections } from "../../../../utils/seed"
import CollectionAnime from "./CollectionAnime"

function Collections({ movies, animemovies }) {
  return (
    <div className="collection gap-6 md:gap-12 flex flex-col">
      <Collection movies={movies} titleCollection={titleCollections[0]} variant={"vertical"} />
      <CollectionAnime movies={animemovies} titleCollection={"Kho tàng Anime mới nhất"} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[1]} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[2]} variant={"horizontal"} />
      <CollectionTopMovie movies={movies} titleCollection={"Top 10 phim bộ hôm nay"} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[3]} variant={"vertical"} />
      <CollectionTopMovie movies={movies} titleCollection={"Top 10 phim lẻ hôm nay"} variant={"vertical"} />
      <Collection movies={movies} titleCollection={titleCollections[4]} variant={"horizontal"} />
    </div>
  )
}

export default Collections