import Card from "./Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

function Collection({ movies, isVertical }) {
  const MAXCARD = 10;

  return (
    <>
      <div className="container-collection p-4">
        {/* Thumbnail */}
        <div className="collection flex items-center justify-between mb-4">
          {/* Intro */}
          <div className="intro flex items-center justify-between">
            {/* <div className="content text-[21px] font-bold bg-linear-to-r from-[#b8a1e2] to-[#ffffff] bg-clip-text text-transparent">
              Phim Hàn Quốc mới
            </div> */}
            <div className="content text-[21px] font-bold text-white">
              Phim Hàn Quốc mới
            </div>

            <i className="fa-solid fa-angle-right text-white mr-3"></i>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          // navigation
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          {movies.slice(0, MAXCARD).map((m) => (
            <SwiperSlide key={m.id}>
              <Card movie={m} isVertical={isVertical}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Collection