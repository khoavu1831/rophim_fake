import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import HeaderTypeRank from "../HeaderTypeRank"
import CommentItem from "./CommentItem"
function SliderNewComment() {
  return (
    <>
      <div className="flex flex-col px-6 pb-5 text-white">
        <HeaderTypeRank />

        {/* List comment */}
        <Swiper
          direction="vertical"
          loop="true"
          slidesPerView={4}
          spaceBetween={0}
          mousewheel
          className="h-72"
        >
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
          <SwiperSlide><CommentItem /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default SliderNewComment