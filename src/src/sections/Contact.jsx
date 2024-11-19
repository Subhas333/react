import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/icons/map.svg";

const Contact = () => {
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
      <section
        id="contact"
        className="bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-10"
      >
        <div
          data-aos="slide-right"
          data-aos-delay="500 "
          className="flex flex-col justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="bg-green-500 P-4 rounded-full hover:bg-orange-500 cursor-pointer"
          >
            <img src={phone} alt="ohone-logo" width={40} height={40} />
          </div>
          <h1 className="text-white font-bold text-2xl uppercase ">Call us</h1>
          <p className="text-xl text-white text-center">
            Mon-Fri from 8am to 5pm
          </p>
          <p className="text-orange-500 text-bold text-xl font-bold text-center hover:underline cursor-pointer">
            9876543210
          </p>
        </div>

        <div
          data-aos="slide-right"
          data-aos-delay="500 "
          className="flex flex-col justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="bg-green-500 P-4 rounded-full hover:bg-orange-500 cursor-pointer"
          >
            <img src={mail} alt="ohone-logo" width={40} height={40} />
          </div>
          <h1 className="text-white font-bold text-2xl uppercase ">Mail us</h1>
          <p className="text-xl text-white text-center">at</p>
          <p className="text-orange-500 text-bold text-xl font-bold text-center hover:underline cursor-pointer">
            sabc990@gmail.com
          </p>
        </div>

        <div
          data-aos="slide-right"
          data-aos-delay="500 "
          className="flex flex-col justify-center items-center gap-4"
        >
          <div
            id="icon-box"
            className="bg-green-500 P-4 rounded-full hover:bg-orange-500 cursor-pointer"
          >
            <img src={map} alt="ohone-logo" width={40} height={40} />
          </div>
          <h1 className="text-white font-bold text-2xl uppercase ">Reach Us</h1>
          <p className="text-xl text-white text-center">
            Mon-Fri from 8am to 5pm
          </p>
          <p className="text-orange-500 text-bold text-xl font-bold text-center hover:underline cursor-pointer">
            9876543210
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
