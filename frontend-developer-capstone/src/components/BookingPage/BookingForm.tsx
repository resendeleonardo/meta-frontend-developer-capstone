import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type BookingFormProps = {
  availableTimes: string[];
  onDateSelect: (selectedDate: string) => void;
  onSubmit: (formData: FormData) => void;
};

const BookingForm = ({
  availableTimes,
  onDateSelect,
  onSubmit,
}: BookingFormProps) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfDiners, setNumberOfDiners] = useState(2);
  const [occasion, setOccasion] = useState("");

  const occasionsList = ["Birthday", "Anniversary"];

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    onDateSelect(newDate);
  };
  const handleTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
  };
  const handleDiners = (e: React.ChangeEvent<HTMLInputElement>) => {
    const diners = e.target.value;
    setNumberOfDiners(Number(diners));
  };
  const handleOccasion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObject = {
      date,
      time,
      numberOfDiners,
      occasion,
    };
    const formData = new FormData();
    Object.entries(formDataObject).forEach(([key, value]) => {
      formData.append(key, String(value));
    });
    // Pass the form data to the parent component for submission
    onSubmit(formData);

    // Send data to server or anything else here...
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
                {availableTimes.map((time, index) => (
                  <option
                    key={index}
                    className="text-2xl p-1 bg-secondary-color text-black rounded-xl cursor-pointer hover:bg-gray-800 hover:text-white}"
                  >
                    {time}
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
              data-testid="confirmation-modal"
            ></div>
            <div className="fixed top-48 h-72 md:h-96 md:w-96 bg-white p-4 rounded-xl flex flex-col items-center justify-center">
              <CheckCircleIcon className="text-primary-color h-24 w-24 mb-10" />
              <h2 className="text-black">
                YOUR RESERVATION HAS BEEN CONFIRMED
              </h2>
              <p className="text-black">Check your email!</p>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default BookingForm;
