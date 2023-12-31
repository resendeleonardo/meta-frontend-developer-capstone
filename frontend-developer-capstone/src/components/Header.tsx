import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div id="home"></div>
      <header className="fixed top-0 left-0 right-0 z-10 border border-b-gray-300">
        <Navbar />
      </header>
      <div className="h-[72px]"></div>
    </>
  );
};

export default Header;
