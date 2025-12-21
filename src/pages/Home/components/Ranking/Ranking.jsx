import SliderTopComment from "./TopComment/SliderTopComment"
import SliderNewComment from "./NewComment/SliderNewComment"
import TypeRank from "./Type/TypeRank"

function Ranking() {
  return (
    <>
      <div className="container-ranking w-full">
        <div className="m-4 border rounded-2xl border-gray-700">
          {/* Comment top - xl*/}
          <SliderTopComment />

          <div className="grid grid-flow-col auto-cols-[100%]
            lg:grid-rows-2 xl:grid-flow-col
            md:auto-cols-[50%]
            overflow-x-auto xl:overflow-visible
            divide-x divide-y divide-gray-700"
          >
            {/* Hotest movies - sm -> xl*/}
            <TypeRank context={"SÔi nổi nhất"} icon={"fa-fire"} />

            {/* Lovest movies - sm -> xl*/}
            <TypeRank context={"Yêu thích nhất"} icon={"fa-heart-circle-check"} />

            {/* Genre - sm ->  lg*/}
            <TypeRank context={"Thể loại hot"} icon={"fa-clipboard-list"} />

            {/* Comment new - xl */}
            <SliderNewComment />
          </div>
        </div>
      </div>
    </>
  )
}

export default Ranking