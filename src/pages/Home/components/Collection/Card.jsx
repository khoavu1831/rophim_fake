function Card({ movie, variant }) {
  const isVertical = variant === "vertical";

  return (
    <>
      {/* Card */}
      <div className="w-full">
        <div className="flex flex-col">
          {/* Image */}
          <a href="">
            <div className="cover-thumbnail relative">
              {/* Checking variant type image */}
              {isVertical ? (
                <div className="cover-image aspect-2/3">
                  <img
                    src={movie.imageUrl.vertical}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="cover-image aspect-2/1">
                  <img
                    src={movie.imageUrl.horizontal}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              )}

              {/* Subtitle & Dub */}
              <div className={`container-sub text-white absolute text-[9px] sm:text-[12px] flex sm:w-full max-sm:flex-col gap-1 bottom-0 max-sm:pl-2 max-sm:pb-2 ${isVertical ? "justify-center" : "pl-5"}`}>
                <span className="max-sm:p-[1px_8px] p-[3px_8px] rounded-xl sm:rounded bg-gray-500">
                  PĐ.
                  <strong>{movie.subtitle}</strong>
                </span>
                <span className="max-sm:p-[1px_8px] p-[3px_8px] rounded-xl sm:rounded bg-blue-400">
                  TM.
                  <strong>{movie.dub}</strong>
                </span>
                {/* <span className="max-sm:p-[1px_8px] p-[3px_8px] rounded-xl sm:rounded bg-gray-500">
                  P.Đề
                  <strong>{movie.dub}</strong>
                </span>
                <span className="max-sm:p-[1px_8px] p-[3px_8px] rounded-xl sm:rounded bg-blue-400">
                  L.Tiếng
                  <strong>{movie.dub}</strong>
                </span> */}
              </div>
            </div>
          </a>

          {/* Content */}
          <div className={`content flex flex-col text-white pt-4 ${isVertical ? "text-center" : "max-md:text-center"}`}
          >
            <h4 className="text-[13px] truncate">{movie.title}</h4>
            <h4 className="text-[13px] text-gray-400 truncate">{movie.subTitle}</h4>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card