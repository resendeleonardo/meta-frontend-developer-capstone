import React, { useState } from "react";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
// import CallToAction from "../HomePage/CallToAction";
import ConfirmBooking from "./ConfirmBooking";

const BookingForm = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [numberOfDiners, setNumberOfDiners] = useState(2);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const times = ["18:00", "19:00", "20:00", "21:00"];

  // Occasions
  const occasions = ["Birthday", "Anniversary"];

  // Handle Number of Diners
  const handleMinusClick = () => {
    if (numberOfDiners > 2) {
      setNumberOfDiners((prev) => prev - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("The minimum number of diners is 2.");
    }
  };
  const handlePlusClick = () => {
    if (numberOfDiners < 10) {
      setNumberOfDiners((prev) => prev + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("The maximum number of diners is 10.");
    }
  };

  // Handle Date
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

  // Handle Occasion
  const handleOccasion = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOccasion = event.target.value;
    setOccasion(selectedOccasion);
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      numberOfDiners,
      selectedTime,
      selectedDate,
      occasion,
    });
    // Send data to server...
  };

  return (
    <>
    <div className="h-[650px] bg-primary-color pt-12 md:pt-0 px-5 sm:px-20 2xl:px-72 md:flex md:flex-col md:items-center md:justify-center">
      <form onSubmit={handleSubmit}>
        {/* Example -- Will be changed later!! */}
          {!isConfirm ? (
            <>
              <div>
                <h2 className="text-3xl mb-5">Reserve a Table</h2>
              </div>
              <h2 className="text-base">How many diners?</h2>
              <div className="flex flex-row gap-5 mt-4">
                <p className="text-2xl leading-5 w-28">
                  {numberOfDiners} people
                </p>
                <div className="flex flex-row gap-2">
                  <MinusCircleIcon
                    className="h-6 w-6 cursor-pointer mt-auto hover:text-gray-800"
                    onClick={handleMinusClick}
                  />
                  <PlusCircleIcon
                    className="h-6 w-6 cursor-pointer mt-auto hover:text-gray-800"
                    onClick={handlePlusClick}
                  />
                </div>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <div className="mt-10">
                <h2 className="text-base md:flex md:flex-col md:items-center md:justify-center">
                  Select a Time
                </h2>
                <div className="flex flex-row mt-4 gap-5">
                  {times.map((item) => (
                    <p
                      key={item}
                      className={`text-2xl p-1 bg-secondary-color text-black rounded-xl cursor-pointer hover:bg-gray-800 hover:text-white ${
                        selectedTime === item ? "bg-gray-800 text-white" : ""
                      }`}
                      onClick={() => setSelectedTime(item)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-base md:flex md:flex-col md:items-center md:justify-center">
                  Reservation Date
                </h2>
                <div className="flex flex-row mt-4 gap-5">
                  {/* <p className="text-2xl">{selectedDate || "Select date"}</p> */}
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="p-2 rounded-xl cursor-pointer"
                  />
                  {/* <p className="text-2xl">Fri, 29 Dec</p>
            <p className="text-secondary-color text-base font-semibold cursor-pointer leading-9">
              PICK DATE
            </p> */}
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-base md:flex md:flex-col md:items-center md:justify-center">
                  Occasion
                </h2>
                <div className="mt-4">
                  <select
                    className="p-2 rounded-xl cursor-pointer"
                    value={occasion}
                    onChange={handleOccasion}
                  >
                    {occasions.map((occasion) => (
                      <option key={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => setIsConfirm(!isConfirm)}
                  className="bg-secondary-color p-3 text-black rounded-xl flex items-center hover:bg-gray-800 hover:text-white"
                >
                  Book Table
                </button>
              </div>
              {/* <div className="mt-10">
            <CallToAction to="/" text="Book Table" />
                    </div> */}
            </>
          ) : (
            <>
                <div className="flex flex-col items-center justify-center">
              <ConfirmBooking />
              <div className="flex flex-row gap-4">
                <button
                    className="bg-secondary-color p-3 text-black rounded-xl flex items-center hover:bg-gray-800 hover:text-white"
                    onClick={() => setIsConfirm(!isConfirm)} 
                >
                    Back
                </button>
              <button
                type="submit"
                onClick={() => setConfirmed(!confirmed)}
                className="bg-secondary-color p-3 text-black rounded-xl flex items-center hover:bg-gray-800 hover:text-white"
              >
                Confirm
              </button>
              </div>
                </div>
            </>
          )}
      </form>
      {confirmed && (
        <>
            <div
                className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 flex flex-col items-center justify-center"
              ></div>
            <div className="fixed top-48 h-72 md:h-96 md:w-96 bg-white p-4 rounded-xl flex flex-col items-center justify-center">
                    <CheckCircleIcon className="text-primary-color h-24 w-24 mb-10" />
                    <h2 className="text-black">YOUR RESERVATION HAS BEEN CONFIRMED</h2>
                    <p className="text-black">Check your email!</p>
            </div>
        </>
      )}
    </div>
    </>
  );
};

export default BookingForm;
