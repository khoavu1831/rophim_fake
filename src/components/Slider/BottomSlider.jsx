function BottomSlider({ movies, active, setActive }) {
  return (
    <div className="sm:absolute right-[10%] top-[80%] lg:top-[86%] xl:right-[70px] pt-3 pb-2.5">
      <div className="flex justify-center gap-2">
        {movies.map((m, i) => (
          <button key={m.id} onClick={() => setActive(i)} className="p-1 cursor-pointer">
            <img
              src={m.avatar}
              className={`w-[30px] h-[30px] xl:h-[41px] xl:w-[66px] xl:rounded object-cover border-2 rounded-full transition 
                      ${i === active ? "border-[#5f9beb]" : "border-[#4a537c]"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomSlider;
