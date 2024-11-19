import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import fb from "../assets/icons/fb.svg";
import insta from "../assets/icons/insta.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/yt.svg";
import toparrow from "../assets/icons/toparrow.svg";
import { Link } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <footer className="flex justify-center items-center px-10 lg:px-20 py-10 lg:py-12 flex-col gap-6 bg-slate-800 w-full">
        <div
          id="social-icons"
          className="flex flex-row justify-start items-start gap-6 mt-3"
        >
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={fb} width={28} height={28} alt="fb-icon" />
          </div>
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={insta} width={28} height={28} alt="insta-icon" />
          </div>
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={youtube} width={28} height={28} alt="youtube-icon" />
          </div>
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={twitter} width={28} height={28} alt="twitter-icon" />
          </div>
        </div>
        <ul className=" flex justify-center items-start lg:items-center text-white text-lg mt-3 gap-4 lg:gap-10">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About Us </li>
          <li className="hover:text-orange-500 cursor-pointer">Menu</li>
          <li className="hover:text-orange-500 cursor-pointer">Gallary</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </footer>

      <div className="w-full bg-black p-4 flex flex-col justify-center items-center text-white font-semibold">
        <h1 className="text-center">
          Copywrite &copy; 2024,Design & Developed by Subhas. All Rights
          Reserved.
        </h1>
        <div>
          <div
            id="icon-box"
            className="bg-green-500 p-2 rounded-full hover:bg-orange-500 cursor-pointer fixed bottom-12 right-6"
          >
            <Link to="home" spy={true} offset={-100} smooth={true}>
              <img src={toparrow} width={35} height={35} alt="toparrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
