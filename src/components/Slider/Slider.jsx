import { useEffect, useState } from "react";
// import { movies } from "../../utils/seed";
import TopSlider from "./TopSlider";
import BottomSlider from "./BottomSlider";

function Slider({ movies }) {
  const [active, setActive] = useState(0);
  
  const MAX_MOVIE = 5;
  const maxMovieShow = movies.slice(0, MAX_MOVIE);
  
  return (
    <>
      <div className="w-full sm:relative bg-[#1b1d29]">
        <div className="max-sm:max-h-[300px] flex flex-col ">
          <TopSlider movies={maxMovieShow} active={active} />
          <BottomSlider movies={maxMovieShow} active={active} setActive={setActive}/>
        </div>
      </div>
    </>
  );
}

export default Slider
