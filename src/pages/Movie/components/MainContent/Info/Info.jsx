import { useState } from "react";
import RowDetailsMovie from "../Info/RowMovieDetails";
import CastCol from "./CastCol";

function Info() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="container-info relative flex justify-center max-xl:px-4 z-10 xl:w-full">
        <div className="wrapper-info flex flex-col justify-center max-xl:items-center">

          {/* Poster */}
          <div className="cover-poster w-30 h-45 xl:w-40 xl:h-60">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="https://static.nutscdn.com/vimg/300-0/d10e69cc4b68fd2974c9d0314c4b9720.jpg"
              alt=""
            />
          </div>

          {/* Title */}
          <div className="title text-white mt-4 text-xl xl:text-2xl xl:font-bold">
            <h1>Phi vụ động trời 2</h1>
          </div>

          {/* Subtitle */}
          <div className="subTitle text-gray-400 xl:text-mainblue xl:mb-6 mt-1 text-[14px]">
            <h4>Zootopia 2</h4>
          </div>

          {/* Button-more */}
          <div className="btn-more xl:hidden text-mainblue text-[14px] my-4 cursor-pointer">
            <button onClick={() => setToggle(!toggle)}>
              <span>Thông tin phim</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>

          {/* Detail info (more) */}
          <div className={`min-w-full xl:block mb-8 ${toggle ? "block" : "hidden"}`}>

            {/* Tags */}
            <div className="tags xl:mb-3">
              <div className="flex text-[10px] gap-1.5 text-white md:text-[12px] items-center">
                <div className="rounded-md px-1.5 py-1 lg:px-1.5 lg:py-1.5 bg-mainblue text-white font-bold">
                  {/* <span>{m.info.resolution ?? "--"}</span> */}
                  <span>K</span>
                </div>
                <div className="rounded-md px-1.5 py-1 lg:px-1.5 lg:py-1.5 bg-[#ffffff10] border">
                  {/* <span>{m.info.ageLimit ?? "--"}</span> */}
                  <span>2025</span>
                </div>
                <div className="border rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 bg-[#ffffff10]">
                  {/* <span>{m.info.year ?? "--"}</span> */}
                  <span>1h50m</span>
                </div>
                <div className="border rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 bg-[#ffffff10]">
                  {/* <span>{m.info.duration ?? "--"}</span> */}
                  <span>CAM</span>
                </div>
              </div>
            </div>

            {/* Genres tags */}
            <div className="flex flex-wrap text-white gap-1.5 text-[12px] py-3">
              <a href="" className="py-1 px-2 bg-[#ffffff10] rounded">Chiếu rạp</a>
              <a href="" className="py-1 px-2 bg-[#ffffff10] rounded">Gia đình</a>
              <a href="" className="py-1 px-2 bg-[#ffffff10] rounded">Thiếu nhi</a>
              <a href="" className="py-1 px-2 bg-[#ffffff10] rounded">Hài</a>
              <a href="" className="py-1 px-2 bg-[#ffffff10] rounded">Hoạt hình</a>
              <a href="" className="py-1 px-2 bg-[#ffffff10] rounded">Kinh dị</a>
            </div>

            {/* Intro */}
            <div className="flex flex-col text-[14px] mb-4">
              <h2 className="text-white font-semibold my-2">Giới thiệu:</h2>
              <span className="text-gray-500">Hai thám tử Judy Hopps và Nick Wilde bước vào hành trình truy tìm một sinh vật bò sát bí ẩn vừa xuất hiện tại Zootopia và khiến cả vương quốc động vật bị đảo lộn. Để phá được vụ án, Judy và Nick buộc phải hoạt động bí mật tại những khu vực mới lạ của thành phố – nơi mối quan hệ đồng nghiệp của họ bị thử thách hơn bao giờ hết.</span>
            </div>

            {/* Duration */}
            <RowDetailsMovie label={"Thời lượng"} contents={["1h50m"]} />

            {/* Country */}
            <RowDetailsMovie label={"Quốc gia"} contents={["Mỹ"]} />

            {/* Networks */}
            <RowDetailsMovie label={"Networks"} contents={["Disney+"]} />

            {/* Product */}
            <RowDetailsMovie label={"Sản xuất"} contents={["Walt Disney Animation Studios", "Walt Disney Pictures"]} />

            {/* Director */}
            <RowDetailsMovie label={"Sản xuất"} contents={["Christopher Nolan"]} />
          </div>

          {/* Cast - xl */}
          <div className="max-xl:hidden flex flex-col">

            {/* Heading */}
            <div className="text-white text-xl font-bold mb-4">
              <h1>Diễn viên</h1>
            </div>

            {/* Cast Avatar */}
            <div className="grid grid-cols-3 justify-items-center gap-3 gap-y-6">
              <CastCol />
              <CastCol />
              <CastCol />
              <CastCol />
              <CastCol />
              <CastCol />
              <CastCol />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info