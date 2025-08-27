import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <ul className="list-none flex flex-row justify-center items-center gap-8 text-xl uppercase">
        <li className="px-7">
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="px-7">
          <Link to="/">
            <span>About</span>
          </Link>
        </li>
        <li className="px-7">
          <Link to="/">
            <span>Contact</span>
          </Link>
        </li>
        <li className="px-7">
          <Link to="/">
            <span>Shop</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
