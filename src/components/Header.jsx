import { useEffect, useRef, useState } from "react"
import { genres } from "../utils/seed";
import { countries } from "../utils/seed";
import { others } from "../utils/seed";
import NavItem from "./NavItem";

function Header() {
  const headerRef = useRef(null);
  const [isTop, setIsTop] = useState(true);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;

    const handleScroll = () => {
      (window.scrollY < headerHeight) ? setIsTop(true) : setIsTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 font-poppins w-full">
        <nav
          ref={headerRef}
          className={
            "h-[70px] flex justify-between items-center w-auto px-5 " +
            (isTop ? "bg-transparent" : "bg-[#0f111a]")
          }
        >
          {/* === Logo === */}
          <div className="hover:cursor-pointer">
            <a href="#">
              <div className="flex items-center">
                <img className="h-13 bg-[#0f111a]" src="movie.svg" alt="logo" />
                <h3 className="font-semibold text-white text-2xl">RoPhim</h3>
                <span className="font-mono text-gray-400">Fake</span>
              </div>
            </a>
          </div>

          {/* === Search - Nav === */}
          {/* Search */}
          <div className="flex items-center grow mx-7 border-r border-gray-500">
            <search className="flex bg-[#22242c] px-4 py-3 rounded border focus-within:border-white max-w-[340px]">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
              <input
                className="text-white text-[13px] outline-0 ml-4 pr-3 w-80 placeholder:text-white"
                type="text"
                placeholder="Tìm kiếm phim, diễn viên"
              />
            </search>

            {/* Nav */}
            <div className="ml-8 flex items-center gap-8 text-white text-[13px]">
              <NavItem label={"Phim Lẻ"} href={"/phimle"} activeNav={activeNav} setActiveNav={setActiveNav} />
              <NavItem label={"Phim Bộ"} href={"/phimbo"} activeNav={activeNav} setActiveNav={setActiveNav} />
              <NavItem label={"Thể loại"} activeNav={activeNav} setActiveNav={setActiveNav} data={genres} col={4} />
              <NavItem label={"Quốc gia"} activeNav={activeNav} setActiveNav={setActiveNav} data={countries} col={1} />
              <NavItem label={"Xem Chung"} href={"/xemchung"} activeNav={activeNav} setActiveNav={setActiveNav} />
              <NavItem label={"Thêm"} activeNav={activeNav} setActiveNav={setActiveNav} data={others} col={1} />
              <NavItem label={"Rổ Bóng"} href={"/robong"} activeNav={activeNav} setActiveNav={setActiveNav} />
            </div>
          </div>

          {/* === Member Button ===*/}
          <div>
            <button className="bg-white flex items-center rounded-3xl px-7 py-2.5 w-auto text-[13px] font-medium opacity-90 hover:cursor-pointer hover:opacity-100">
              <i className="fa-solid fa-user"></i>
              <h4 className="ml-1.5">Thành viên</h4>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header