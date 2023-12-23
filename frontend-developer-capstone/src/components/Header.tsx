import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
