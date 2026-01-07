function CastCol() {
  return (
    <div className="flex flex-col justify-items items-center gap-1">

      {/* Avatar */}
      <div className="h-20 w-20">
        <img
          className="h-full w-full object-cover rounded-full"
          src="https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"
          alt="cast"
        />
      </div>

      {/* Name cast */}
      <div className="text-center">
        <span className="text-[14px] text-white">Micheal Jackson</span>
      </div>
    </div>
  )
}

export default CastCol