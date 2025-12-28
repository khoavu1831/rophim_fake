import { Link } from "react-router-dom";

function CardTop({ movie, variant, index }) {
  const isVertical = variant === "vertical";
  const isEven = index % 2 === 0;

  return (
    <>
      {/* Card */}
      <div className="w-full">
        <div className="flex flex-col">
          {/* Image */}
          <Link to={"/movie"}>
            <div className="cover-thumbnail relative">
              {/* Checking variant type image */}
              {isVertical ? (
                <div className="cover-image aspect-2/3 rounded-xl">
                  <div className={`${isEven ? "skew-y-6 origin-top-left" : "-skew-y-6 origin-bottom-right"} overflow-hidden rounded-xl`}>
                    <img
                      src={movie.imageUrl.vertical}
                      className={`${isEven ? "-skew-y-6 origin-top-left" : "skew-y-6 origin-bottom-right"} h-full w-full object-cover rounded-xl`}
                    />
                  </div>
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
          </Link>

          {/* Content */}
          <div className="content flex pt-4">
            <span className="
            text-[28px] pr-2 -mt-2 font-bold italic
            bg-linear-to-b from-white/70 to-mainblue bg-clip-text text-transparent"
            >
              {index + 1}
            </span>
            <div className="right-context flex flex-col max-w-[80%]">
              <span className="text-[13px] text-white truncate w-full">{movie.title}</span>
              <span className="text-[13px] text-gray-400 truncate">{movie.subTitle}</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default CardTop