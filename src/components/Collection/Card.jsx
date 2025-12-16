function Card({ movie, isVertical }) {
  const isStand = isVertical === "yes" ? true : false;

  return (
    <>
      <div className="card w-full">
        <div className="flex flex-col">
          {/* Cover image */}
          <a href="">
            <div className="cover-thumbnail relative">
              {isStand ? (
                <div className="cover-image aspect-2/1">
                  <img
                    src={movie.imageUrl.vertical}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="cover-image aspect-1/2">
                  <img
                    src={movie.imageUrl.horizontal}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              )}

              {/* Subtitle & Dub */}
              <div className="container-sub text-white absolute text-[9px] sm:text-[12px] flex max-sm:flex-col gap-1 bottom-0 pl-2 max-sm:pb-2">
                <span className="max-sm:p-[1px_8px] p-[3px_8px] rounded-xl sm:rounded bg-gray-500">
                  PĐ.
                  <strong>{movie.subtitle}</strong>
                </span>
                <span className="max-sm:p-[1px_8px] p-[3px_8px] rounded-xl sm:rounded bg-green-500">
                  TM.
                  <strong>{movie.dub}</strong>
                </span>
              </div>
            </div>
          </a>

          {/* Content */}
          <div className="content flex flex-col text-center text-white py-4">
            <h4 className="text-[13px] truncate">{movie.title}</h4>
            <h4 className="text-[13px] text-gray-400">{movie.subTitle}</h4>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card