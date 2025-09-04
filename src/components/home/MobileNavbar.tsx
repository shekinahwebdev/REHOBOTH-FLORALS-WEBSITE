import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type MobileNavbarProps = {
  showNavbar: boolean;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ showNavbar }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={showNavbar ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="md:hidden fixed top-[90px] right-10 w-[200px] bg-white/20 backdrop-blur-md shadow-lg rounded-l-2xl py-10 z-50"
    >
      <nav>
        <ul className="list-none flex flex-col items-self justify-center gap-12 text-xl uppercase cursor-pointer">
          <li className="px-7 hover:text-[#facc22]">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="px-7  hover:text-[#facc22]">
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li className="px-7  hover:text-[#facc22]">
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </li>
          <li className="px-7 hover:text-[#facc22]">
            <Link to="/shop">
              <span>Shop</span>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default MobileNavbar;
