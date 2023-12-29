import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock onSubmit, onDateSelect and availableTimes
const mockOnSubmit = jest.fn();
const mockOnDateSelect = jest.fn();
const mockAvailableTimes = ["17:00", "19:00", "21:00"];

const initialProps = {
  availableTimes: mockAvailableTimes,
  onDateSelect: mockOnDateSelect,
  onSubmit: mockOnSubmit,
};

describe("BookingForm", () => {
  it("renders BookingForm component correctly", () => {
    render(<BookingForm {...initialProps} />);

    // Check if form is rendered correctly
    expect(screen.getByLabelText(/Reservation date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select a time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How many diners?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Book Table/i)).toBeInTheDocument();
  });

  // TODO: Test Form Submission
  // it("submits the form with valid data", () => {
  //   render(<BookingForm {...initialProps} />);

  //   // Fill in the form with valid data
  //   fireEvent.change(screen.getByLabelText(/Reservation date/i), {
  //     target: { value: "2024-01-01" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/Select a time/i), {
  //     target: { value: "17:00" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/How many diners?/i), {
  //     target: { value: "4" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/Occasion/i), {
  //     target: { value: "Birthday" },
  //   });

  //   // Submit the form
  //   fireEvent.click(screen.getByText(/Book Table/i));

  //   // Check if the onSubmit function is called with the correct data
  //   expect(mockOnSubmit).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       date: "2024-01-01",
  //       time: "17:00",
  //       numberOfDiners: 4,
  //       occasion: "Birthday",
  //     })
  //   );
  // });

  it("displays confirmation modal when 'Book Table' is clicked", () => {
    render(<BookingForm {...initialProps} />);

    // Click the 'Book Table' button
    fireEvent.click(screen.getByText(/Book Table/i));

    // Check if the confirmation modal is displayed
    expect(screen.getByText(/YOUR RESERVATION HAS BEEN CONFIRMED/i)).toBeInTheDocument();
    expect(screen.getByText(/Check your email!/i)).toBeInTheDocument();
  });

  it("closes the confirmation modal when clicked outside", () => {
    render(<BookingForm {...initialProps} />);

    // Click the 'Book Table' button to open the confirmation modal
    fireEvent.click(screen.getByText(/Book Table/i));

    // Click outside the modal to close it
    fireEvent.click(screen.getByTestId("confirmation-modal"));

    // Check if the confirmation modal is closed
    expect(screen.queryByText(/YOUR RESERVATION HAS BEEN CONFIRMED/i)).toBeNull();
    expect(screen.queryByText(/Check your email!/i)).toBeNull();
  });
});
