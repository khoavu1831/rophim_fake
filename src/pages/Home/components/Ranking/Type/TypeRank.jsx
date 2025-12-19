import HeaderTypeRank from "../HeaderTypeRank"
import ItemType from "./ItemTypeRank"

function TypeRank() {
  const exList = [
    { state: "up" }, { state: "down" }, { state: "up" }, { state: "minus" }, { state: "up" }
  ]

  return (
    <>
      <div className="flex flex-col px-6 text-white">
        <HeaderTypeRank />
        {/* MAX 5 items */}
        <div className="flex flex-col gap-5">
          {exList.map((m, i) => (
            <ItemType key={i} data={m} index={i + 1} />
          ))}
        </div>

        <div className="text-gray-500 py-4 text-[13px]">
          <button>Xem thêm</button>
        </div>
      </div>
    </>
  )
}

export default TypeRank