function SubNav({ data, isOpen, col }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 xl:mt-6 bg-[#0f111a]/80 rounded font-light shadow-lg z-50">
      <div 
        className="grid text-[13px] px-2 py-4 gap-1"
        style={{ 
          gridTemplateColumns: `repeat(${col}, 150px)` 
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