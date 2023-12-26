import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="h-[72px]"></div>
      <BookingForm />
      <Footer />
    </>
  );
};

export default BookingPage;
