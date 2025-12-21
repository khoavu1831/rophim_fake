import { useState } from "react"
import HeaderTypeRank from "../HeaderTypeRank"
import ItemTypeRank from "./ItemTypeRank"

function TypeRank({ context, icon }) {
  const exList = [
    { state: "up" }, { state: "down" }, { state: "up" }, { state: "minus" }, { state: "up" },
    { state: "up" }, { state: "down" }, { state: "up" }, { state: "minus" }, { state: "up" }
  ]
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex flex-col px-6 text-white">
        <HeaderTypeRank context={context} icon={icon} />
        {/* MAX 5 items */}
        <div className="flex flex-col gap-3">
          {exList.slice(0, 5).map((m, i) => (
            <ItemTypeRank key={i} data={m} index={i + 1} />
          ))}
        </div>

        <div className="text-gray-500 py-4 text-[13px]">
          <button
            onClick={() => (setToggle(!toggle))}
            className="cursor-pointer"
          >
            Xem thêm
          </button>
        </div>
      </div>

      {/* Modal popup */}
      {toggle && (
        <div className="fixed inset-0 bg-[#1b1d29]/80 z-80">
          <div className="max-h-screen overflow-y-auto py-4">
            <div className="flex flex-col text-white bg-[#2b3561]/80 rounded-2xl m-auto max-md:w-full md:max-w-140 pr-2 pt-2 pb-4 pl-10 max-sm:pl-5">
              {/* Close button */}
              <button
                className="cursor-pointer flex justify-end"
                onClick={() => setToggle(!toggle)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="mb-2">
                <HeaderTypeRank context={context} icon={icon} />
              </div>

              {/* MAX 5 items */}
              <div className="grid divide-y divide-gray-700 gap-6 pr-40 max-sm:pr-10">
                {exList.map((m, i) => (
                  <div key={i} className="text-[15px]">
                    <ItemTypeRank data={m} index={i + 1} isModal={toggle} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TypeRank