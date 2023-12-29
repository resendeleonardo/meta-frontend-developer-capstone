import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row items-center justify-between py-4 px-5 sm:px-20 2xl:px-72 bg-white">
        {/* Desktop Navigation Menu */}
        <div>
          <HashLink to="/#home">
            <img src={logo} alt="logo" />
          </HashLink>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-10">
            <HashLink 
              to="/#home" 
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
            >Home</HashLink>
            <HashLink 
              to="/#about" 
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
            >About</HashLink>
            <HashLink 
              to="/#menu" 
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
            >Menu</HashLink>
            <Link
              to="/booking"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
            >Reservations</Link>
            <Link
              to="/#"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
            >Order Online</Link>
            <Link
              to="/#"
              className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
            >LogIn</Link>
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden">
          <Bars3Icon
            onClick={() => {setIsOpen(!isOpen);}}
            className="h-10 w-10 text-black cursor-pointer"
          />
          {isOpen && (
            <>
              {/* Overlay to block content below */}
              <div
                className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50"
                onClick={() => {setIsOpen(!isOpen);}}
              ></div>
              {/* Mobile navigation content */}
              <div className="fixed top-0 right-0 left-1/4 md:left-1/2 bottom-0 bg-white p-4">
                <XMarkIcon
                  onClick={() => {setIsOpen(!isOpen);}}
                  className="h-10 w-10 text-black cursor-pointer"
                />

                <div className="flex flex-col gap-2 mt-4 p-4">
                  <HashLink 
                    to="/#home" 
                    className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                    onClick={() => {setIsOpen(!isOpen);}}
                  >Home</HashLink>
                  <HashLink 
                    to="/#about" 
                    className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                    onClick={() => {setIsOpen(!isOpen);}}
                  >About</HashLink>
                  <HashLink 
                    to="/#menu" 
                    className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >Menu</HashLink>
                  <Link
                    className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                    to={"/booking"}
                    onClick={() => {setIsOpen(!isOpen);}}
                  >Reservations</Link>
                  <Link
                    className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                    to={"/"}
                    onClick={() => {setIsOpen(!isOpen);}}
                  >Order Online</Link>
                  <Link
                    className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                    to={"/"}
                    onClick={() => {setIsOpen(!isOpen);}}
                  >LogIn</Link>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
