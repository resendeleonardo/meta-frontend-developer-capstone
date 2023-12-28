import React, { useEffect, useReducer } from "react";
import Header from "../Header";
import Footer from "../Footer";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../utils/bookingAPI";

// Define the state and action types
interface State {
  availableTimes: string[];
}

type Action =
  | { type: "INITIALIZE_TIMES"; times: string[] }
  | { type: "UPDATE_TIMES"; times: string[] };

// Reducer function to handle state transitions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
    case "UPDATE_TIMES":
      return {
        ...state,
        availableTimes: action.times,
      };
    default:
      return state;
  }
};

const BookingPage = () => {

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    availableTimes: [],
  });

  const handleDateSelection = async (selectedDate: string) => {
    try {
      const times = await fetchAPI(selectedDate);
      dispatch({ type: "UPDATE_TIMES", times });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      // Handle the form submission logic here
      console.log("Form submitted from BookingPage:", {
        selectedDate: formData.get("date"),
        selectedTime: formData.get("time"),
        selectedNumberOfDiners: Number(formData.get("numberOfDiners")),
        selectedOccasion: formData.get("occasion"),
        // Add other form data if needed
      });

      // Simulate a successful submission
      const isSubmissionSuccessful = await submitAPI(formData);

      if (isSubmissionSuccessful) {
        // Handle successful submission, e.g., show a success message
        console.log("Form submitted successfully!");
      } else {
        // Handle submission failure, e.g., show an error message
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  // Initialize available times when the component mounts
  useEffect(() => {
    const initializeTimes = async () => {
      try {
        // You can provide a default date or fetch it from somewhere else
        const defaultDate = "2023-01-01";
        const times = await fetchAPI(defaultDate);
        dispatch({ type: "INITIALIZE_TIMES", times });
      } catch (error) {
        console.error("Error initializing available times:", error);
      }
    };

    initializeTimes();
  }, []);

  return (
    <>
      <Header />
      <div className="h-[72px]"></div> {/* <--- move to navbar */}
      <BookingForm 
        availableTimes={state.availableTimes}
        onDateSelect={handleDateSelection}
        onSubmit={handleSubmit} 
      />
      <Footer />
    </>
  );
};

export default BookingPage;
