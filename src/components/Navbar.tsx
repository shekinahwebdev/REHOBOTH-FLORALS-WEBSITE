import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <ul className="list-none flex flex-row justify-center items-center gap-8 text-xl uppercase cursor-pointer">
        <li className="px-7 hover:text-hover-effect">
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="px-7 hover:text-hover-effect">
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li className="px-7  hover:text-hover-effect">
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
        <li className="px-7 hover:text-hover-effect">
          <Link to="/shop">
            <span>Shop</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
