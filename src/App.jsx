import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import WatchMovie from "./pages/WatchMovie/WatchMovie"
import Search from "./pages/Search/Search"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter basename="/cinepass">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/watch/:id" element={<WatchMovie />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
