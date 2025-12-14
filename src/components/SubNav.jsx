import { useEffect, useState } from "react";

function SubNav({ data, isOpen, col }) {
  const [gridCol, setGridCol] = useState(col);
  const [cellWidth, setCellWidth] = useState(150);

  // Handle resize col MenuItems
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 350) return (setGridCol(3), setCellWidth(90));
      if (w < 1024) return (setGridCol(3), setCellWidth(100));
      setGridCol(col);
      setCellWidth(150);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [col]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 xl:mt-6 bg-[#0f111a]/80 rounded font-light shadow-lg z-50">
      <div
        className="grid text-[13px] px-2 py-4 gap-1"
        style={{
          gridTemplateColumns: `repeat(${gridCol}, ${cellWidth}px)`
        }}
      >
        {data.map((genreName) => (
          <span
            key={genreName}
            className="p-2 truncate hover:bg-[#22242c] rounded hover:text-[#5f9beb] cursor-pointer text-white"
          >
            {genreName}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SubNav