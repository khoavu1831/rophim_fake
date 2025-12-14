function BottomSlider({ movies, active, setActive }) {
  return (
    <div className="bottom-slider pt-3 pb-2.5">
      <div className="wrapper-bottom flex justify-center gap-2">
        {movies.map((m, i) => (
          <button key={m.id} onClick={() => setActive(i)} className="p-1">
            <img
              src={m.avatar}
              className={`w-[30px] h-[30px] object-cover border-2 rounded-full transition 
                      ${i === active ? "border-[#5f9beb]" : "border-[#4a537c]"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomSlider;
