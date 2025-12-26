import TopContent from "./TopContent/TopContent"
import MainContent from "./MainContent/MainContent"

function Main() {
  return (
    <>
      <div className="top-wrap flex flex-col relative bg-[#1b1d29]">
        <TopContent />
        <MainContent />
      </div>
    </>
  )
}

export default Main