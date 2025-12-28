import CardTop from "../../../../components/Cards/CardTop"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

function CollectionTopMovie({ movies, titleCollection, variant, type }) {
  const isVertical = variant === "vertical";
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
          <div className="text-[22px] sm:text-[25px] font-medium text-white max-w-[86%]">
            {titleCollection}
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={isVertical ? 1 : 1}
          breakpoints={{
            425: {
              slidesPerView: isVertical ? 2 : 1,
              spaceBetween: 10
            },
            768:
            {
              slidesPerView: isVertical ? 3 : 1,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: isVertical ? 4 : 1,
              spaceBetween: 10
            },
            1440: { slidesPerView: isVertical ? 5 : 1 }
          }}
        >
          {movies.map((m, index) => (
            <SwiperSlide key={m.id}>
              <CardTop movie={m} variant={variant} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default CollectionTopMovie