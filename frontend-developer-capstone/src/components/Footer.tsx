import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-300 h-3/4 py-16 px-5 sm:px-20 xl:px-72">
        <div className="grid grid-cols-4 gap-10">
          <div style={{ backgroundImage: "url('/restaurant.jpg')"}} className="h-80 bg-cover rounded-lg"></div>
          <div className="mt-10">
            <h3 className="text-primary-color font-bold">Doormat navigation</h3>
            <ul className="mt-5 text-black">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order online</li>
              <li>LogIn</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-primary-color font-bold">Contact</h3>
            <ul className="mt-5 text-black">
              <li>Address</li>
              <li>Phone number</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-primary-color font-bold">Social media</h3>
            <ul className="mt-5 text-black">
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
