import type { Dispatch, SetStateAction } from "react";
import Navbar from "../Navbar";
import menu from "/assets/icons/menu.png";

interface HeaderProps {
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setShowNavbar }) => {
  return (
    <header className="flex flex-row  items-center gap-10">
      <div className="logo-container"></div>
      <div className="flex flex-row justify-between fixed top-0 right-0 gap-8 px-3 py-3 md:p-5 bg-white/5 backdrop-blur-md w-full z-999">
        <h1 className="text-3xl italic md:text-4xl  bg-gradient-to-r from-[#f83600] to-[#facc22] bg-clip-text text-transparent drop-shadow-md">
          Rehoboth Florals
        </h1>
        <div className="hidden md:flex gap-8">
          <Navbar />
        </div>
        <button
          className="border-none hover:bg-white/20 p-3 rounded-xl cursor-pointer"
          onClick={() => setShowNavbar((prev: boolean) => !prev)}
        >
          <img src={menu} alt="menu-icon" className="w-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
