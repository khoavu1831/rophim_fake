import Card from "./Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

function Collection({ movies, titleCollection, variant, type }) {
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

          {/* Icon-more*/}
          <div className={`group flex items-center text-white sm:ml-5 cursor-pointer hover:text-mainblue transition-all duration-300
              ${isTopMovies ? "xl:ml-0 mt-4" : "rounded-full border border-[#646161]"}
            `}
          >
            {/* Label */}
            {isTopMovies ? (
              <h2 className={`max-sm:hidden text-[14px] font-light`}>
                Xem toàn bộ
              </h2>
            ) : (
              <h2 className={`max-sm:hidden whitespace-nowrap overflow-hidden max-w-0 transition-all duration-700 
                  text-[13px] font-light opacity-0 group-hover:opacity-100 group-hover:max-w-100 group-hover:pl-4`}
              >
                Xem thêm
              </h2>
            )}
            <a
              href=""
              className={`w-8 h-8 flex justify-center items-center group-hover:border-transparent
                  ${isTopMovies ? "" : "rounded-full border border-[#646161]"}`
              }
            >
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>

        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={isVertical ? 3 : 2}
          breakpoints={{
            768: { slidesPerView: isVertical ? 4 : 2 },
            1024: { slidesPerView: isVertical ? 5 : 3 },
            1440: { slidesPerView: isVertical ? 8 : 3 }
          }}
        >
          {movies.map((m) => (
            <SwiperSlide key={m.id}>
              <Card movie={m} variant={variant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Collection