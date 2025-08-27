import { Link } from "react-router-dom";
import Navbar from "../Navbar";
// import logo from "/assets/icons/rehoboth-logo.png";
import menu from "/assets/icons/menu.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full px-10 xl:px-30 py-5 bg-[url(/assets/Fresh-Flower/fresh-flower14.jpg)] bg-no-repeat bg-cover min-h-screen md:min-h-[100vh] bg-center mg:bg-size[100%]">
      <header className="flex flex-row  items-center justify-between gap-10">
        <div className="logo-container">
          {/* <img
            src={logo}
            alt="rehoboth logo"
            className="w-30 h-25 rounded-full"
          /> */}
          <h1 className="text-2xl italic">Rohoboth Floral</h1>
        </div>
        <div className="flex flex-row justify-center gap-8  px-4 py-5 bg-white/20 backdrop-blur-md">
          <div className="hidden md:flex gap-8">
            <Navbar />
          </div>
          <button className="border-none">
            <img src={menu} alt="menu-icon" className="w-8" />
          </button>
        </div>
      </header>

      <div className="text-light-cream space-y-4 text-center my-10 flex flex-col flex-1 justify-center items-center">
        <p className="text-2xl text-bold tracking-wide">
          Rohoboth Florals Shop
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          A Perfect Bouquet for Every Occasion
        </h1>
        <p className="md:text-lg max-w-xl">
          Discover the beauty of fresh flowers, handcrafted with love to bring
          joy, celebrate milestones, and make every moment unforgettable.
        </p>
        <button className="text-xl mt-4 bg-gradient-to-r from-[#ff7e28] to-[#e63900] hover:bg-hover-effect text-white font-semibold px-8 py-3 rounded-xl transition duration-300">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
