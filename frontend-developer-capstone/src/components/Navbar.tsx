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
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600 cursor-pointer"
            >
              HOME
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600 cursor-pointer"
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600 cursor-pointer"
            >
              MENU
            </Link>
            <Link
              to="/booking"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600 cursor-pointer"
            >
              RESERVATIONS
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600 cursor-pointer"
            >
              ORDER ONLINE
            </Link>
            <Link
              to="/"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600 cursor-pointer"
            >
              LOGIN
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
