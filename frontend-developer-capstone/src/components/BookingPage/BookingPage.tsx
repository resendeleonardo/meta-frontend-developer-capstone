import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Reservation from "./Reservation";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="h-[72px]"></div>
      <Reservation />
      <Footer />
    </>
  );
};

export default BookingPage;
