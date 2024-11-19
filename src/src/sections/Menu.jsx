import { useEffect } from "react";
import menu1 from "../assets/menu1.webp";
import menu2 from "../assets/menu2.webp";
import menu3 from "../assets/menu3.webp";
import vertical1 from "../assets/vertical1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
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
      <section className="bg-slate-950 w-full h-fit px-20 py-28 flex flex-col lg:flex-row justify-center items-centre gap-16">
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className=" flex justify-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl"
          style={{ backgroundImage: `url(${menu1})` }}
        >
          <h1 className="text-white font-bold text-3xl">Fresh food</h1>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className=" flex justify-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl"
          style={{ backgroundImage: `url(${menu2})` }}
        >
          <h1 className="text-white font-bold text-3xl">Fresh food</h1>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className=" flex justify-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl"
          style={{ backgroundImage: `url(${menu3})` }}
        >
          <h1 className="text-white text-center font-bold text-3xl">
            Fresh food
          </h1>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:py-24 py-20 px-10 lg:px-20 bg-slate-950 w-full h-fit"
      >
        <div
          id="left "
          className="lg:w-[50%] w-full flex flex-col justify-center items-center lg:items-start gap-10"
        >
          <h1 data-aos="zoom-in" className="text-white text-6xl font-bold">
            About <span className="text-green-500 italic ">US</span>
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl font-semibold text-center lg:text-start"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quibusdam distinctio vero minus vitae repellendus?
          </p>
          <p
            data-aos="zoom-in"
            className="text-white text-xl font-semibold text-center lg:text-start"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quibusdam distinctio vero minus vitae repellendus?
          </p>
          <p
            data-aos="zoom-in"
            className="text-white text-xl font-semibold text-center lg:text-start"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quibusdam distinctio vero minus vitae repellendus?
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="text-white  bg-orange-500 px-8 py-4 rounded-full hover:bg-green-500 hover=text-black font-bold mt-6 "
          >
            ORDER NOW
          </button>
        </div>
        <div
          id="about-img"
          data-aos="slide-up "
          className="flex justify-center items-center lg:w-[50%] w-full"
        >
          <img
            src={vertical1}
            alt="about-img"
            width={500}
            height={500}
            className="rounded-xl"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Menu;
