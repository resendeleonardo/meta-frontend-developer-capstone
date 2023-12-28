import React, { useState } from "react";
// import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BookingForm = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [numberOfDiners, setNumberOfDiners] = useState(2);
  // const [errorMessage, setErrorMessage] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");

  const availableTimes = ["18:00", "19:00", "20:00", "21:00"];
  const occasionsList = ["Birthday", "Anniversary"];

  // Handle Date
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
  };
  // Handle Time
  const handleTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
  };
  // Handle Number of Diners
  const handleDiners = (e: React.ChangeEvent<HTMLInputElement>) => {
    const diners = e.target.value;
    setNumberOfDiners(Number(diners));
  };
  // Handle Occasion
  const handleOccasion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      numberOfDiners,
      time,
      date,
      occasion,
    });
    // Send data to server...
  };

  return (
    <>
      <section className="h-[650px] bg-primary-color pt-12 md:pt-5 px-5 sm:px-20 2xl:px-72 md:flex md:flex-col md:items-center">
        <div className="md:border md:p-4 md:rounded-2xl md:w-96">
          <div>
            <h2 className="text-3xl mb-5">Reserve a Table</h2>
          </div>
          {/* Booking Form */}
          <form onSubmit={handleSubmit}>
            <div className="mt-5 flex flex-col items-start gap-5">
              <label htmlFor="date">Reservation date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleDate}
                className="p-2 rounded-xl cursor-pointer"
                required={true}
              />
            </div>

            <div className="mt-5 flex flex-col items-start gap-5">
              <label htmlFor="time">Select a time</label>
              <select
                name="time"
                id="time"
                value={time}
                onChange={handleTime}
                className="p-2 rounded-xl cursor-pointer"
                required={true}
              >
                <option hidden>Select a time</option>
                {availableTimes.map((item) => (
                  <option
                    key={item}
                    className="text-2xl p-1 bg-secondary-color text-black rounded-xl cursor-pointer hover:bg-gray-800 hover:text-white}"
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex flex-col items-start gap-5">
              <label htmlFor="diners">How many diners?</label>
              <input
                type="number"
                name="diners"
                id="diners"
                value={numberOfDiners}
                min={2}
                max={10}
                onChange={handleDiners}
                className="p-2 rounded-xl cursor-pointer"
                required={true}
              />
            </div>

            <div className="mt-5 flex flex-col items-start gap-5">
              <label htmlFor="occasion">Occasion</label>
              <select
                name="occasion"
                id="occasion"
                value={occasion}
                onChange={handleOccasion}
                className="p-2 rounded-xl cursor-pointer"
                required={true}
              >
                <option hidden>Select an occasion</option>
                {occasionsList.map((item) => (
                  <option
                    key={item}
                    className="text-2xl p-1 bg-secondary-color text-black rounded-xl cursor-pointer hover:bg-gray-800 hover:text-white}"
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-10 flex flex-row items-end md:justify-center">
              <button
                onClick={() => setIsConfirm(!isConfirm)}
                className="bg-secondary-color p-3 text-black rounded-xl flex items-center hover:bg-gray-800 hover:text-white"
              >
                Book Table
              </button>
            </div>
          </form>
        </div>

        {/* Confirmation Modal */}
        {isConfirm && (
          <>
            <div
              className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 flex flex-col items-center justify-center"
              onClick={() => setIsConfirm(!isConfirm)}
            ></div>
            <div className="fixed top-48 h-72 md:h-96 md:w-96 bg-white p-4 rounded-xl flex flex-col items-center justify-center">
              {!confirmed ? (
                <>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-black font-semibold text-2xl mb-5">
                      Confirm your booking
                    </h2>
                    <div>
                      <label htmlFor="name" className="text-black">
                        Name{" "}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="rounded-xl p-2"
                        autoComplete="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-black">
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="rounded-xl p-2"
                        autoComplete="true"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="mt-10">
                      <button
                        className="bg-secondary-color p-3 text-black rounded-xl flex items-center hover:bg-gray-800 hover:text-white"
                        onClick={() => setIsConfirm(!isConfirm)}
                      >
                        Edit Booking
                      </button>
                    </div>
                    <div className="mt-10">
                      <button
                        className="bg-secondary-color p-3 text-black rounded-xl flex items-center hover:bg-gray-800 hover:text-white"
                        onClick={() => setConfirmed(!confirmed)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <CheckCircleIcon className="text-primary-color h-24 w-24 mb-10" />
                  <h2 className="text-black">
                    YOUR RESERVATION HAS BEEN CONFIRMED
                  </h2>
                  <p className="text-black">Check your email!</p>
                </>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default BookingForm;
