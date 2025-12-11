function Header() {
  return (
    <>
      <header className="sticky top-0 left-0 font-poppins w-full">
        <nav className="h-[70px] flex justify-between items-center bg-[#0f111a] w-auto px-5">
          {/* Logo */}
          <div className="hover:cursor-pointer">
            <div className="flex items-center">
              <img className="h-13 bg-[#0f111a]" src="movie.svg" alt="logo" />
              <h3 className="font-semibold text-white text-2xl">RoPhim</h3>
              <span className="font-mono text-gray-400">Fake</span>
            </div>
          </div>

          {/* Search - Nav */}
          <div className="flex items-center grow mx-7 border-r border-gray-500">
            <search className="flex bg-[#22242c] px-4 py-3 rounded border focus-within:border-white">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
              <input
                className="text-white text-[13px] outline-0 ml-4 pr-3 w-80 placeholder:text-white"
                type="text"
                placeholder="Tìm kiếm phim, diễn viên"
              />
            </search>

            <div className="ml-8 flex items-center gap-8 text-white text-[13px]">
              <div>
                <a href="">Phim Lẻ</a>
              </div>
              <div>
                <a href="">Phim Bộ</a>
              </div>
              <div>
                <a href="#">Thể loại</a>
                <i class="fa-solid fa-caret-down"></i></div>
              <div>
                <a href="">Quốc gia</a>
                <i class="fa-solid fa-caret-down"></i></div>
              <div>
                <a href="">Xem Chung</a>
              </div>
              <div>
                <a href="">Thêm</a>
                <i class="fa-solid fa-caret-down"></i></div>
              <div>
                <a href="">Rổ Bóng</a>
              </div>
            </div>
          </div>

          {/* Member Button */}
          <div>
            <button className="bg-white flex items-center rounded-3xl px-7 py-2.5 w-auto text-[13px] font-medium">
              <i class="fa-solid fa-user"></i>
              <h4 className="ml-1.5">Thành viên</h4>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header