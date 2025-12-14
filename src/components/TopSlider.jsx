function TopSlider({ movies, active }) {
  return (
    <div className="relative w-full h-60 overflow-hidden">
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
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 flex flex-col items-center w-full">
                <div className="max-w-full">
                  <h1 className="text-white font-bold text-[20px] truncate px-4">{m.title}</h1>
                </div>
                <div className="max-w-full">
                  <p className="text-[#5f9beb] truncate text-[12px] px-8">{m.subTitle}</p>
                </div>
                <div className="flex text-[10px] gap-2 text-white py-2">
                  <span className="border rounded-md py-px px-1">
                    <span className="text-[#5f9beb]">IMDb</span> {m.info.imdb}
                  </span>
                  <span className="border rounded-md py-px px-1 bg-[#5f9beb] text-black font-semibold">{m.info.resolution}</span>
                  <span className="border rounded-md py-px px-1 bg-white text-black font-semibold">{m.info.ageLimit}</span>
                  <span className="border rounded-md py-px px-1">{m.info.year}</span>
                  <span className="border rounded-md py-px px-1">{m.info.duration}</span>
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
