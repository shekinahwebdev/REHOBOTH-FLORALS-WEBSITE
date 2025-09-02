import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col w-full px-10 xl:px-30 py-5 bg-[url(/assets/arrangements-in-vases-boxes/flower12.jpeg)] bg-no-repeat bg-cover min-h-[100vh] bg-center mg:bg-size[100%]">
      <div className="hero-overlay"></div>
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
    </section>
  );
};

export default HeroSection;
