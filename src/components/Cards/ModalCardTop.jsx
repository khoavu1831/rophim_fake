function ModalCardTop({ m }) {
  return (
    <>
      {/* Modal hover */}
      <div className="absolute inset-0 z-100 w-100 rounded-2xl overflow-hidden">
        {/* Wrapper */}
        <div className="flex flex-col h-full w-full">

          {/* Cover image */}
          <div className="h-full w-full relative overflow-hidden">
            <img
              src="https://static.nutscdn.com/vimg/500-0/1d83e95bbd7b059d7e0886701bc81043.webp"
              className="h-full w-full object-cover  mask-b-from-90"
            />

            {/* Overlay — giống hiệu ứng bạn đưa */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#2b3561] via-[#2b3561]/30 to-transparent" />

            {/* Grid noise */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.12]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                backgroundSize: "3px 3px",
                mixBlendMode: "overlay"
              }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col h-full bg-[#2b3561] p-[0_0_16px_16px] pt-2">

            {/* Title */}
            <div className="max-w-full">
              <h1 className="text-white font-bold text-[20px] sm:text-[16px] truncate max-sm:px-4">{m.title}</h1>
            </div>

            {/* Sub title */}
            <div className="max-w-full">
              <p className="text-mainblue truncate text-[12px] sm:text-[14px] max-sm:px-8">{m.subTitle}</p>
            </div>

            {/* PlaysBar */}
            <div className="flex gap-2 text-white text-[13px] py-4">
              <div className="flex items-center gap-1 py-2 px-7 bg-mainblue text-black rounded">
                <i className="fa-solid fa-play"></i>
                <span>Xem ngay</span>
              </div>

              <div className="flex items-center gap-1 py-2 px-5 border-gray-500 border rounded">
                <i className="fa-solid fa-heart"></i>
                <span>Thích</span>
              </div>

              <div className="flex items-center gap-1 py-2 px-5 border-gray-500 border rounded">
                <i className="fa-solid fa-circle-info"></i>
                <span>Chi tiết</span>
              </div>
            </div>


            {/* Tags */}
            <div className="flex text-[10px] gap-1.5 text-white py-2 md:text-[10px] items-center">
              <div className="border rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 font-bold">
                <span className="text-mainblue text-[11px]">IMDb</span>
                <span>{m.info.imdb ?? "--"}</span>
              </div>

              <div className="rounded-md px-1 py-1 bg-mainblue text-white font-bold">
                <span>{m.info.resolution ?? "--"}</span>
              </div>

              <div className="rounded-md px-1 py-1 bg-white text-black font-bold">
                <span>{m.info.ageLimit ?? "--"}</span>
              </div>

              <div className="border rounded-md px-1 py-1 bg-[#ffffff10]">
                <span>{m.info.year ?? "--"}</span>
              </div>

              <div className="border rounded-md px-1 py-1 bg-[#ffffff10]">
                <span>{m.info.duration ?? "--"}</span>
              </div>
            </div>

            {/* Genres tags */}
            <div className="max-sm:hidden flex text-white gap-1.5">
              {m.info.genres.map((g, index) => (
                <a key={g.id} href="" className="flex items-center gap-1 text-[12px] rounded font-semibold">
                  {g.name}
                  {index !== m.info.genres.length - 1 && (
                    <span className="rounded-full h-1 w-1 bg-white"></span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalCardTop