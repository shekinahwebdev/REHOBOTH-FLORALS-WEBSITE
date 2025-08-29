import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import menu from "/assets/icons/menu.png";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const HeroSection = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <section className="flex flex-col w-full px-10 xl:px-30 py-5 bg-[url(/assets/arrangements-in-vases-boxes/flower12.jpeg)] bg-no-repeat bg-cover min-h-[100vh] bg-center mg:bg-size[100%]">
      <div className="hero-overlay"></div>
      <header className="flex flex-row  items-center gap-10">
        <div className="logo-container"></div>
        <div className="flex flex-row justify-between fixed top-0 right-0 gap-8 px-3 pt-3 md:p-5 bg-white/5 backdrop-blur-md w-full z-999">
          <h1 className="text-3xl italic md:text-4xl  bg-gradient-to-r from-[#f83600] to-[#facc22] bg-clip-text text-transparent drop-shadow-md">
            Rehoboth Florals
          </h1>
          <div className="hidden md:flex gap-8">
            <Navbar />
          </div>
          <button
            className="border-none hover:bg-white/20 p-3 rounded-xl cursor-pointer"
            onClick={() => setShowNavbar((prev) => !prev)}
          >
            <img src={menu} alt="menu-icon" className="w-8" />
          </button>
        </div>
      </header>

      <div className="space-y-6 text-center my-12 flex flex-col flex-1 justify-center items-center px-4  text-white">
        <p className="text-2xl md:text-4xl font-semibold tracking-wider text-white drop-shadow-md">
          Rehoboth Florals Shop
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-md">
          A Perfect Bouquet for Every Occasion
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl font-medium leading-relaxed  text-white drop-shadow-md">
          Discover the beauty of{" "}
          <span className="font-semibold">fresh flowers</span>, handcrafted with
          love to bring joy, celebrate milestones, and make every moment
          unforgettable.
        </p>
        <button className="text-lg md:text-xl mt-6 bg-gradient-to-r from-[#f83600] to-[#facc22] text-white drop-shadow-md font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
      <MobileNavbar showNavbar={showNavbar} />
    </section>
  );
};

export default HeroSection;
