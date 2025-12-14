import { useState } from "react";
import { movies } from "../utils/seed";
import TopSlider from "./TopSlider";
import BottomSlider from "./BottomSlider";

function Slider() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="w-full">
        <div className="max-sm:max-h-[300px] flex flex-col ">
          <TopSlider movies={movies} active={active} />
          <BottomSlider movies={movies} active={active} setActive={setActive}/>
        </div>
      </div>
    </>
  );
}

export default Slider
