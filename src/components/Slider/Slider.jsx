import { useState } from "react";
import { movies } from "../../utils/seed";
import TopSlider from "./TopSlider";
import BottomSlider from "./BottomSlider";

function Slider() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="w-full sm:relative bg-black">
        <div className="max-sm:max-h-[300px] flex flex-col ">
          <TopSlider movies={movies} active={active} />
          <BottomSlider movies={movies} active={active} setActive={setActive}/>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/80 to-transparent" />
      </div>
    </>
  );
}

export default Slider
