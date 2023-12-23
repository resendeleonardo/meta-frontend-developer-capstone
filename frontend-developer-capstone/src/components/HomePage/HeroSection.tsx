import React from "react";
import restaurantfood from "../../assets/restauranfood.jpg";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  return (
    <>
      <div className="h-[72px]"></div>
      <section>
        <div className="flex flex-row pt-6 px-5 sm:px-20 2xl:px-72 bg-primary-color h-96">
          <div className="flex flex-col w-auto md:w-1/2 gap-2 mt-4 md:mt-8">
            <h1 className="text-secondary-color text-5xl">Little Lemon</h1>
            <h2 className="text-2xl">Chicago</h2>
            <p className="mt-3 mb-2 w-2/4">
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
            </p>
            <CallToAction to='/booking' text='Reserve a Table' />
          </div>
          <div className="flex flex-col w-1/2 hidden md:block">
            <div className="flex flex-col items-end">
                <img src={restaurantfood} alt="" className="rounded-md h-96 w-72" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
