import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      className="w-full bg-black h-fit flex justify-center items-center text-white px-10 lg:px-40 py-20 
      bg-cover bg-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div
        id="main"
        className="flex flex-col justify-center items-start gap-5 w-full"
      >
        <div
          data-aos="slide-right"
          id="box-circle"
          className="bg-green-500 p-12 rounded-full flex justify-center items-center flex-col gap-4 w-60 mt-6"
        >
          <h1 className="text-black font-bold text-6xl">40%</h1>
          <h1 className="text-black font-bold text-xl">
            Business
            <br />
            Lunch
          </h1>
        </div>
        <h1
          data-aos="slide-up"
          data-aos-delay="300"
          className="lg:text-6xl text-5xl font-semibold"
        >
          Keep up to date with us.
        </h1>
        <p
          data-aos="slide-up"
          data-aos-delay="200"
          className="text-xl lg:text-2xl font-semibold"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex lg:flex-row flex-col justify-start items-center w-full gap=5 mt-3">
          <input
            type="text"
            className="p-4 text-black font-normal w-full lg:w-[50%] rounded-full "
            placeholder="Enter the valid email"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-orange-500 py-4 px-10 text-black font-bold rounded-full text-lg"
          >
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
