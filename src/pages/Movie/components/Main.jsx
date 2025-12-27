import Backdrop from "./Backdrop"
import MainContent from "./MainContent/MainContent"

function Main() {
  return (
    <>
      <div className="relative bg-[#1b1d29]">
        <div className="flex flex-col">
          <Backdrop />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default Main