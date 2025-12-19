import SliderTopComment from "./TopComment/SliderTopComment"
import SliderNewComment from "./NewComment/SliderNewComment"
import TypeRank from "./Type/TypeRank"

function Ranking() {
  return (
    <>
      <div className="container-ranking w-full">
        <div className="m-4 border rounded-2xl border-gray-700">
          {/* Comment top - xl*/}
          <div className="">

          <SliderTopComment />
          </div>

          <div className="grid xl:grid-cols-[1fr_1fr_1.4fr] divide-x divide-gray-700">
            {/* Hotest movies - sm -> xl*/}
            <TypeRank />

            {/* Lovest movies - sm -> xl*/}
            <TypeRank />

            {/* Comment new - xl */}
            <SliderNewComment />

            {/* Genre - sm ->  lg*/}
            {/* <TypeRank /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Ranking