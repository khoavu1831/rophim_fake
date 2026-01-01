import { Link } from "react-router-dom";
import ModalCard from "./ModalCard";

function Card({ movie, variant }) {
  const isVertical = variant === "vertical";

  return (
    <>
      {/* Card */}
      <div className="w-full">
        <div className="flex flex-col">

          {/* Image */}
          <div className="group relative">
            {/* Checking variant type image */}
            {isVertical ? (
              <Link to={"/movie"} className="cover-image aspect-2/3">
                <img
                  src={movie.avatar}
                  className="h-full w-full object-cover rounded-xl"
                />
              </Link>
            ) : (
              <Link to={"/movie"} className="cover-image aspect-2/1">
                <img
                  src={movie.poster}
                  className="h-full w-full object-cover rounded-xl"
                />
              </Link>
            )}

            {/* Modal hover */}
            <div
              className={`
                  absolute w-full
                  pointer-events-none
                  opacity-0 z-9999
                  group-hover:opacity-100
                  rounded-2xl overflow-hidden
                  left-0 group-hover:animate-modal-up
                  ${!isVertical ? "-top-26" : "top-10"}
                `}
            >
              <ModalCard m={movie} isVertical={isVertical}/>
            </div>

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

          {/* Content */}
          <div className={`content flex flex-col text-white pt-4 ${isVertical ? "text-center" : "max-md:text-center"}`}>
            <h4 className="text-[13px] truncate">{movie.title}</h4>
            <h4 className="text-[13px] text-gray-400 truncate">{movie.subTitle}</h4>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card