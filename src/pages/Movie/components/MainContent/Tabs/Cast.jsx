function Cast({ avatar, name }) {
  return (
    <>
      <div className="relative">
        <div className="cover-img relative w-full overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={avatar}
          />
          <div className="absolute inset-0 bg-linear-0 from-[#1b1d29] to-30%"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center -mt-11 w-full gap-1">
          <div className="w-full line-clamp-1 text-center px-2 text-white font-light text-[14px]">
            <span>{name}</span>
          </div>

          <div className="w-full bg-[#1b1d29] text-center line-clamp-1 text-mainblue font-light text-[13px]">
            <span>Chief Boghief</span>
            <span className="ml-1">(voice)</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cast