function TopSlider({ movies, active }) {
  return (
    <div className="relative w-full h-60 sm:h-[420px] lg:h-[600px] xl:h-[660px] overflow-hidden">
      <div className="flex h-full transition-transform duration-700">
        {
          movies.map((m, i) => (
            <div
              key={m.id}
              className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0 z-0"}`}>
              <img
                src={m.poster}
                className="w-full h-full object-cover"
              />
              <div className="absolute pointer-events-none inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 flex flex-col max-sm:items-center sm:pl-8 sm:pb-8 w-full">

                {/* Title */}
                <div className="max-w-full">
                  <h1 className="text-white font-bold text-[20px] sm:text-3xl truncate max-sm:px-4">{m.title}</h1>
                </div>

                {/* Sub title */}
                <div className="max-w-full">
                  <p className="text-[#5f9beb] truncate text-[12px] sm:text-[16px] max-sm:px-8 sm:py-2">{m.subTitle}</p>
                </div>

                {/* Tags */}
                <div className="flex text-[10px] gap-2.5 text-white py-2 md:text-[12px] items-center">
                  <div className="border rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 font-bold">
                    <span className="text-[#5f9beb] text-[11px]">IMDb</span> {m.info.imdb ?? "--"} 
                  </div>
                  <div className="rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 bg-[#5f9beb] text-white font-bold">
                    <span>{m.info.resolution ?? "--"}</span>
                  </div>
                  <div className="rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 bg-white text-black font-bold">
                    <span>{m.info.ageLimit ?? "--"}</span>
                  </div>
                  <div className="border rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 bg-[#ffffff10]">
                    <span>{m.info.year ?? "--"}</span>
                  </div>
                  <div className="border rounded-md px-1 py-1 lg:px-1.5 lg:py-1.5 bg-[#ffffff10]">
                    <span>{m.info.duration ?? "--"}</span>
                  </div>
                </div>

                {/* Genres tags */}
                <div className="max-sm:hidden flex text-white gap-1.5 lg:mb-3">
                  {m.info.genres.map(g => (
                    <a key={g} href="" className="text-[12px] py-1 px-2 bg-[#ffffff10] rounded font-semibold">{g}</a>
                  ))}
                </div>

                {/* Description */}
                <div className="max-lg:hidden w-[540px] overflow-hidden">
                  <p className="line-clamp-3 text-white text-[14px]">{m.description}</p>
                </div>

                {/* Touches */}
                <div className="max-sm:hidden flex items-center gap-6 mt-6">
                  {/* Play */}
                  <a href="" className="rounded-full bg-[#5f9beb] p-4 lg:p-6 shadow-[0px_4px_10px_5px_rgba(0,149,182,0.1)]">
                    <i className="fa-solid fa-play text-black text-[18px]"></i>
                  </a>
                  {/* Like + Info */}
                  <div className="flex items-center text-white bg-[#ffffff2d]/80 text-[18px] rounded-l-full rounded-r-full h-12 border">
                    <a href="" className="px-6 border-r h-full leading-12">
                      <i className="fa-solid fa-heart"></i>
                    </a>

                    <a href="" className="px-6 h-full leading-12">
                      <i className="fa-solid fa-circle-info"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TopSlider;
