import { useState } from "react"
import RowDetailsMovie from "./RowDetailsMovie"
import ActionButtons from "./ActionsButton";

function HeaderMovie() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="top-wrap relative bg-[#1b1d29]">
      {/* Background top */}
      <div className="cover-fade max-sm:h-50 z-0">
        {/* Cover bg-top */}
        {/* <div className="bg-[url(https://static.nutscdn.com/vimg/400-0/567c678a62a49b1363c370dbb030cbb0.jpg)]"></div> */}
        <img
          className="w-full h-full object-cover saturate-110 contrast-105"
          src="https://static.nutscdn.com/vimg/400-0/567c678a62a49b1363c370dbb030cbb0.jpg"
        />

        {/* Effect shadow for image */}
        {/* <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#1b1d29] via-[#1b1d29]/90 "></div> */}

        {/* Grid noise */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.56]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                  `,
            backgroundSize: "3px 3px",
            mixBlendMode: "overlay"
          }}
        ></div>
      </div>

      {/* Info */}
      <div className="container-info flex justify-center px-4 z-20">
        <div className="wrapper-info flex flex-col justify-center items-center">
          {/* Poster */}
          <div className="cover-poster w-30 h-45">
            <img
              className="w-full h-full object-cover"
              src="https://static.nutscdn.com/vimg/300-0/fa6a6074511b4b5bbc7ab417eb62e0fd.jpg"
              alt=""
            />
          </div>

          {/* Title */}
          <div className="title text-white mt-4 text-xl">
            <h1>Phi vụ động trời 2</h1>
          </div>

          {/* Subtitle */}
          <div className="subTitle text-gray-400 mt-1 text-[14px]">
            <h4>Zootopia 2</h4>
          </div>

          {/* Button-more */}
          <div className="btn-more text-mainblue text-[14px] my-4 cursor-pointer">
            <button onClick={() => setToggle(!toggle)}>
              <span>Thông tin phim</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>

          {/* Detail info (more) */}
          {toggle && (
            <div className="min-w-full">
              {/* Tags */}
              <div className="tags">
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
            </div>
          )}

          {/* Bars play */}
          <div className="container-bars py-4">
            <div className="wrapper flex flex-col w-full gap-4">
              <div className="btn-play">
                <button className="bg-linear-30 from-mainblue to-white w-full flex justify-center items-center rounded-4xl px-24 py-4 text-[16px] cursor-pointer">
                  <i className="fa-solid fa-play"></i>
                  <h4 className="ml-2 text-nowrap">Xem ngay</h4>
                </button>
              </div>

              <div className="action-btns flex justify-center my-4">
                <ActionButtons icon={"fa-heart"} label={"Yêu thích"} />
                <ActionButtons icon={"fa-plus"} label={"Thêm vào"} />
                <ActionButtons icon={"fa-share"} label={"Chia sẻ"} />

                <div className="ml-2">
                  <button className="bg-[#1a2760] w-full flex items-center rounded-4xl py-1 px-2 cursor-pointer">
                    <img
                      src="movie.svg"
                      className="w-8 h-8 object-cover"
                    />

                    <span className="ml-1.5 text-white font-semibold">9.0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default HeaderMovie