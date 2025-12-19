function ItemTypeRank({ data, index }) {
  let icon = "";
  let color = "";

  if (data.state === "minus") {
    icon = "fa-minus"
    color = "text-gray-700"
  } else if (data.state === "up") {
    icon = "fa-arrow-trend-up"
    color = "text-green-400"
  } else {
    icon = "fa-arrow-trend-down"
    color = "text-red-500"
  }

  return (
    <>
      <div className="px-1">
        <div className="flex items-center gap-6">
          {/* Ordinal number */}
          <span className="text-[14px] font-bold text-gray-500">{index}.</span>

          {/* Icon trend  */}
          <span>
            <i className={`fa-solid ${icon} ${color} text-[14px]`}></i>
          </span>

          {/* Image movie */}
          <div className="cover-img h-8 w-8">
            <img
              className="w-full h-full object-cover"
              src="https://static.nutscdn.com/vimg/300-0/c04eb2651bacb46cc0642c503ee7be2e.jpg" alt=""
            />
          </div>

          {/* Name movie */}
          <div className="line-clamp-1 text-[14px]">Song Quỹ</div>
        </div>
      </div>
    </>
  )
}

export default ItemTypeRank