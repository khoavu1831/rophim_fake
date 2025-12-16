import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <div className="h-full">
      <Header />
      <Slider />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home