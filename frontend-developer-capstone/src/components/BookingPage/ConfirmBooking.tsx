import React from "react";

const ConfirmBooking = () => {
  return (
    <>
      <div className="mt-20 bg-primary-color py-5 px-20">
        <h2 className="mb-5 text-2xl">Booking confirmation</h2>
        <div>
          <p className="mb-2">Place your email bellow</p>
          <input type="email" placeholder="Email" className="p-1 rounded-xl" required />
        </div>
      </div>
    </>
  );
};

export default ConfirmBooking;
