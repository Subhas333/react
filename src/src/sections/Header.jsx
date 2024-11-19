import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Menu", path: "menu" },
    { link: "Gallary", path: "gallery" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center gap-4 px-8 bg-slate-800 lg:px-10 py-6 sticky top-0 z-10">
        <div id="logo">
          <h1 className="lg:text-[35px] text-[28px] text-orange-500 font-bold">
            sus food station
          </h1>
        </div>

        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className="text-white  uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black "
            >
              {link}
            </Link>
          ))}
        </ul>

        {/*mobile menu */}
        <div
          className="flex justify-center lg:hidden items-center "
          onClick={toggleMenu}
        >
          <div>
            {IsMenuOpen ? (
              <FaXmark className="text-white text-2xl cursor-pointer " />
            ) : (
              <FaBars className="text-white text-2xl cursor-pointer " />
            )}
          </div>
        </div>
        <div
          className={`${IsMenuOpen ? "flex" : "hidden"}
             w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                className="text-white uppercase w-full text-center font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black "
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <button className="bg-orange-600 px-8 py-4 rounded-full hover:bg-green-500 hidden lg:flex hover:text-black font-bold ">
          ORDER NOW
        </button>
      </nav>
    </>
  );
};

export default Header;
