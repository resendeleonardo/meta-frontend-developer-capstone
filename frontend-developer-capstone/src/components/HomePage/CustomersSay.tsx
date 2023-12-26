import React from "react";
import ReviewCard from "./ReviewCard";
import userMale1 from "../../assets/john-doe1.jpg";
import userFemale1 from "../../assets/jane-doe1.jpg";
const CustomersSay = () => {
  return (
    <>
    <div className="bg-gray-300 h-3/4 py-16 px-5 sm:px-20 2xl:px-72">
      <div className="flex items-center justify-center">
        <h2 className="text-black text-3xl font-semibold">Testimonials</h2>
      </div>
      <div className="grid lg:grid-cols-4 mt-12 gap-5">
        {/* Review Cards */}
        <ReviewCard rating="★★★★★" userPhoto={userMale1} userName="John Doe" review="The best restaurant!" />
        <ReviewCard rating="★★★☆☆" userPhoto={userFemale1} userName="Jane Doe" review="The best restaurant!" />
        <ReviewCard rating="★★★★★" userPhoto={userMale1} userName="John Doe" review="The best restaurant!" />
        <ReviewCard rating="★★★★☆" userPhoto={userFemale1} userName="Jane Doe" review="The best restaurant!" />
      </div>
    </div>
    </>
  );
};

export default CustomersSay;
