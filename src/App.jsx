import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
function App() {

  return (
    <>
      <BrowserRouter basename="/rophim_fake">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
