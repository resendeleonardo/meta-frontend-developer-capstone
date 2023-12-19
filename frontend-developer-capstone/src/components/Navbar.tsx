import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between py-4 px-5 sm:px-20 bg-white">
        {/* Desktop Navigation Menu */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-10">
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Reservations
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Order Online
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Login
            </Link>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        {/* Code here... */}
      </nav>
    </>
  );
};

export default Navbar;
