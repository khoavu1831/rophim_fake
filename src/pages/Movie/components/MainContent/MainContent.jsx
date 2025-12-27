import Tabs from "./Tabs/Tabs"
import Info from "./Info/Info"
import PlaysBar from "./PlayBars/PlayBars"

function MainContent() {
  return (
    <>
      <div className="main-content px-4 -mt-37.5">
        <Info />
        <PlaysBar />
        <Tabs />
      </div>
    </>
  )
}

export default MainContent