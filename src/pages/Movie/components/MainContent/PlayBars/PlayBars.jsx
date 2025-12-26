import ActionButtons from "./ActionsButton"

function PlaysBar() {
  return (
    <>
      {/* Bars play */}
      <div className="container-bars py-4">
        <div className="wrapper flex flex-col w-full gap-2">
          {/* Play button */}
          <div className="btn-play flex justify-center">
            <button className="bg-linear-30 from-mainblue to-white max-sm:max-w-[288px] w-full flex justify-center items-center rounded-4xl py-4 text-[16px] cursor-pointer">
              <i className="fa-solid fa-play"></i>
              <h4 className="ml-2 text-nowrap">Xem ngay</h4>
            </button>
          </div>

          <div className="action-btns flex justify-center items-center my-2">
            <div className="flex">
              <ActionButtons icon={"fa-heart"} label={"Yêu thích"} />
              <ActionButtons icon={"fa-plus"} label={"Thêm vào"} />
              <ActionButtons icon={"fa-share"} label={"Chia sẻ"} />
            </div>

            {/* imdb score */}
            <div className="">
              <button className="bg-[#1a2c7e] w-full flex items-center gap-1 justify-around rounded-4xl px-3 py-1.5 cursor-pointer">
                <img
                  src="movie.svg"
                  className="w-6 h-6 object-cover"
                />

                <span className="text-white font-semibold">9.0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaysBar