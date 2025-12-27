import { Link } from "react-router-dom"
function ItemVersion({ subTitle, icon, hexColor }) {
  return (
    <>
      {/* Item */}
      <Link
        className={`relative item flex max-h-72 bg-linear-30 rounded-xl overflow-hidden`}
        style={{ backgroundColor: hexColor }}
      >
        {/* Context */}
        <div className="flex flex-col p-4 text-white gap-2">
          {/* Type */}
          <div className="flex items-center text-[14px]">
            <i className={`fa-solid ${icon} mr-2`}></i>
            <span>{subTitle}</span>
          </div>

          {/* Title */}
          <div className="title text-[18px] font-semibold mb-2">
            <span>Phi vụ động trời 2</span>
          </div>

          {/* Button */}
          <div className="btn">
            <button className="text-[12px] text-black bg-white py-1.25 px-2.5 rounded">Xem bản này</button>
          </div>
        </div>

        {/* Image - movie */}
        <div className="cover-img absolute top-0 right-0 h-full object-fit">
          {/* Overlay */}
          <div
            className={`absolute inset-0`}
            style={{ backgroundImage: `linear-gradient(to right, ${hexColor}, transparent)` }}
          ></div>
          <img
            src="https://static.nutscdn.com/vimg/300-0/e491676cbc65d0af86fba6381e5c90e9.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
    </>
  )
}

export default ItemVersion