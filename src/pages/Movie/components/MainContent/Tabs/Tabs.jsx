import { useEffect, useState } from "react"
import Tab from "./Tab"
import ItemVersion from "./ItemVersion";
import Cast from "./Cast";
import Card from "../../../../../components/Cards/Card";
import { getTopMovies } from "../../../../../services/movieService";
import { mapSliderMovie } from "../../../../../mappers/sliderMovieMapper";

function Tabs() {
  const [active, setActive] = useState("episodes");
  const [topMovies, setTopMovies] = useState([]);
  const [isPlayVideo, setIsPlayVideo] = useState(false);

  useEffect(() => {
    getTopMovies().then(data => {
      const mapped = data.map(mapSliderMovie);
      setTopMovies(mapped);
    });
  }, []);


  return (
    <>
      <div className="tabs bg-linear-0 from-gray-400/18 to-90% -mx-4 px-4">
        <div className="flex justify-start md:justify-center gap-6 text-[13px] text-white">
          <Tab id="episodes" active={active} setActive={setActive} />
          <Tab id="gallery" active={active} setActive={setActive} />
          <Tab id="cast" active={active} setActive={setActive} />
          <Tab id="suggest" active={active} setActive={setActive} />
        </div>
      </div>

      {/* --- Content Tab --- */}
      {/* Espisodes */}
      {active === "episodes" && (
        <div className="versions mb-15">
          {/* Heading */}
          <div className="heading py-6">
            <h1 className="text-white text-xl font-bold">Các bản chiếu</h1>
          </div>

          {/* Content*/}
          <div className="grid gap-4 sm:grid-cols-2">
            <ItemVersion subTitle={"Phụ đề"} icon={"fa-closed-captioning"} hexColor={"#726d6d"} />
            <ItemVersion subTitle={"Thuyết minh giọng Nam"} icon={"fa-microphone"} hexColor={"#297447"} />
          </div>
        </div>
      )}

      {/* Gallery */}
      {active === "gallery" && (
        <div className="versions mb-15">

          {/* Videos */}
          <div className="videos">

            {/* Heading */}
            <div className="heading py-6">
              <h1 className="text-white text-[18px] font-medium">Videos</h1>
            </div>

            {/* Content*/}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {/* Video item */}
              <div className="wrapper-video">
                <div className="video flex justify-center items-center w-full aspect-video border border-gray-400">
                  <button onClick={() => setIsPlayVideo(true)} className="w-10 h-10 rounded-full border-gray-400 border">
                    <i className="fa-solid fa-play text-white"></i>
                  </button>
                </div>

                {/* Context video */}
                <div className="context-video py-2 text-white text-[16px]">
                  <span>Trailer</span>
                </div>
              </div>
            </div>

            {/* Modal Video */}
            {isPlayVideo && (
              <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#1b1d29]/80 px-4">
                {/* Frame video */}
                <div className="relative flex justify-center items-center w-full md:max-w-180 bg-mainblue p-2 rounded-2xl aspect-video">
                  <button
                    onClick={() => setIsPlayVideo(false)}
                    className="cursor-pointer absolute -top-4 -right-4 flex justify-center items-center text-black text-[16px] h-9 w-9 rounded-full bg-white z-10"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="NGGYU"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Images */}
          <div className="images">
            <div className="heading py-1">
              <h1 className="text-white text-[18px] font-medium">Hình ảnh</h1>
            </div>

            {/* Content*/}
            <div className="columns-2 md:columns-3 gap-2 w-full space-y-2">

              <div className="break-inside-avoid">
                <img className="w-full rounded-sm" src="https://static.nutscdn.com/vimg/0-0/2be582621899d8efa7554449c94153a1.webp" alt="" />
              </div>

              <div className="break-inside-avoid">
                <img className="w-full rounded-sm" src="https://static.nutscdn.com/vimg/0-0/d10e69cc4b68fd2974c9d0314c4b9720.jpg" alt="" />
              </div>

              <div className="break-inside-avoid">
                <img className="w-full rounded-sm" src="https://static.nutscdn.com/vimg/0-0/49d991d7b3eb5d6c5f8b0c26f01b6b9a.webp" alt="" />
              </div>

              <div className="break-inside-avoid">
                <img className="w-full rounded-sm" src="https://static.nutscdn.com/vimg/0-0/1d83e95bbd7b059d7e0886701bc81043.webp" alt="" />
              </div>

              <div className="break-inside-avoid">
                <img className="w-full rounded-sm" src="https://static.nutscdn.com/vimg/0-0/76b0d75dd150e3d1a6aee4b617853ffe.jpg" alt="" />
              </div>

              <div className="break-inside-avoid">
                <img className="w-full rounded-sm" src="https://static.nutscdn.com/vimg/0-0/35b7075a2cdba3c7398f6f1975ab66bb.jpg" alt="" />
              </div>

            </div>
          </div>
        </div>
      )}


      {/* Cast */}
      {active === "cast" && (
        <div className="versions mb-15">
          {/* Heading */}
          <div className="heading py-6">
            <h1 className="text-white text-xl font-bold">Diễn viên</h1>
          </div>

          {/* Content*/}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/8e6mt0vGjPo6eW52gqRuXy5YnfN.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
            <Cast avatar={"https://image.tmdb.org/t/p/w500/be1bVF7qGX91a6c5WeRPs5pKXln.jpg"} name={"Iris Elba"} />
          </div>
        </div>
      )}

      {/* Suggest */}
      {active === "suggest" && (
        <div className="versions mb-15">
          {/* Heading */}
          <div className="heading py-6">
            <h1 className="text-white text-xl font-bold">Có thể bạn sẽ thích</h1>
          </div>

          {/* Content*/}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            {topMovies.slice(0, 12).map((m) => (
              <Card key={m.id} movie={m} variant={"vertical"} />
            ))}
          </div>
        </div>
      )}

      {/* Comment Section */}
      <div className="comment-section grid-cols-1 text-white">
        {/* Heading */}
        <div className="heading flex justify-between">
          {/* Count comment */}
          <div className="flex">
            <h1>
              <i class="fa-solid fa-comment-dots "></i>
              Bình luận</h1>
            <span>(843)</span>
          </div>

          {/* Comment / Rate */}
          <div className="flex border">
            <div className="p-2">
              <span>Bình luận</span>
              <span>Đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs