import CardTop from "../../../../components/Cards/CardTop"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

function CollectionTopMovie({ movies, titleCollection, type }) {
  const isTopMovies = type === "top-movies";

  return (
    <>
      <div className={`px-4 ${isTopMovies && "xl:flex"}`}>
        {/* Thumbnail */}
        <div className={`flex w-full 
          ${isTopMovies
            ? "xl:pb-13.75 max-xl:items-center max-xl:justify-between xl:flex-col xl:justify-end max-xl:mb-4"
            : "items-center max-sm:justify-between mb-4"}`}>

          {/* Title */}
          <div className="text-[22px] sm:text-[25px] xl:text-[32px] font-medium text-white max-w-[86%]">
            {titleCollection}
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            425: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768:
            {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 10
            }
          }}
          className="pb-40! -mb-40!"
        >
          {movies.map((m, index) => (
            <SwiperSlide key={m.id}>
              <CardTop movie={m} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default CollectionTopMovie