import Card from "./Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

function Collection({ movies, titleCollection, variant }) {
  const MAXCARD = 10;
  const isVertical = variant === "vertical";

  return (
    <>
      <div className="px-4">
        {/* Thumbnail */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center max-sm:justify-between w-full">
            {/* <div className="content text-[21px] font-bold bg-linear-to-r from-[#b8a1e2] to-[#ffffff] bg-clip-text text-transparent">
              Phim Hàn Quốc mới
            </div> */}
            <div className="text-[22px] sm:text-[25px] font-medium text-white max-w-[86%]">
              {titleCollection}
            </div>

            {/* More icon */}
            <div className="flex items-center text-white sm:pl-5">
              {/* <h2 className="max-sm:hidden text-[14px] font-semibold">Xem toàn bộ</h2> */}
              <a
                href=""
                className="w-8 h-8 rounded-full border border-[#646161] flex justify-center items-center"
              >
                <i className="fa-solid fa-angle-right"></i>
              </a>

            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={isVertical ? 3 : 2}
          // navigation
          breakpoints={{
            768: { slidesPerView: isVertical ? 4 : 2 },
            1024: { slidesPerView: isVertical ? 5 : 3 },
            1440: { slidesPerView: isVertical ? 8 : 5 }
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