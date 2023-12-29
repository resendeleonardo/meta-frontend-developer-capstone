import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className="bg-gray-300 h-3/4 py-16 px-5 sm:px-20 2xl:px-72">
        <div className="grid md:grid-cols-4 md:gap-10">
          <div style={{ backgroundImage: "url('/restaurant.jpg')"}} className="h-80 bg-cover rounded-lg hidden lg:block"></div>
          <div className="mt-0 md:mt-10">
            <h3 className="text-xl text-primary-color font-bold">Little Lemon</h3>
            <ul className="mt-5 text-black">
              <li>
                <HashLink 
                  to="/#home" 
                  className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                >Home</HashLink>
              </li>
              <li>
                <HashLink 
                  to="/#about" 
                  className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                >About</HashLink>
              </li>
              <li>
                <HashLink 
                  to="/#about" 
                  className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                >Menu</HashLink>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                >Reservations</Link></li>
              <li>
                <Link
                  to="/#"
                  className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                >Order Online</Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="mt-2 font-semibold leading-6 text-slate-950 hover:text-slate-600"
                >LogIn</Link>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary-color font-bold">Contact</h3>
            <ul className="mt-5 text-black">
              <li>Via Limone, 12 - Chicago</li>
              <li>+00 00 9999 9999</li>
              <li>info@littlelemonrestaurant.us</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary-color font-bold">Social media</h3>
            <ul className="mt-5 text-black">
              <li><a href="https://www.instagram.com/" className="font-semibold hover:text-primary-color" target="_blank">Instagram</a></li>
              <a href="https://www.facebook.com/" className="font-semibold hover:text-primary-color" target="_blank"><li>Facebook</li></a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
