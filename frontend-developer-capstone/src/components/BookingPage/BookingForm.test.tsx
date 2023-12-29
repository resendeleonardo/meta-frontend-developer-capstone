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

// Data to Fill in when needed
type FormData = {
  [label: string]: string;
}
const formData: FormData = {
  'Reservation date': '2024-01-01',
  'Select a time': '19:00',
  'How many diners?': '4',
  'Occasion': 'Birthday',
};
const fillInFormFields = (formData: FormData) => {
  Object.entries(formData).forEach(([label, value]) => {
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  });
};

describe("BookingForm", () => {
  // Test if form is rendered correctly
  it("renders BookingForm component correctly", () => {
    render(<BookingForm {...initialProps} />);

    expect(screen.getByLabelText(/Reservation date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select a time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How many diners?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Book Table/i)).toBeInTheDocument();
  });

  // Test for validations in the BookingForm
  it('display validation errors and prevent submission if form fields are empty', () => {
    render(<BookingForm {...initialProps} />);

    // Submit the form without filling in any fields
    fireEvent.click(screen.getByText('Book Table'));

    // Check if the error messages are displayed for each field in the BookingForm
    expect(screen.getByText('Please select a date.')).toBeInTheDocument();
    expect(screen.getByText('Please select a time.')).toBeInTheDocument();
    // expect(getByText('Please enter the number of diners.')).toBeInTheDocument(); // as the initial state is set there are no error messages
    expect(screen.getByText('Please select an occasion.')).toBeInTheDocument();

    // Ensure that the onSubmit function is not called
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  // Test BookingForm Submission
  it('submit the form when all fields are filled in', () => {
    render(<BookingForm {...initialProps} />);

    // Fill in the form fields with defined values
    fillInFormFields(formData);

    // Submit the form
    fireEvent.click(screen.getByText('Book Table'));

    // Validate that onSubmit function is called with the correct data
    expect(mockOnSubmit).toHaveBeenCalledWith(expect.any(FormData));
  });

  // Test if the confirmation modal is displayed
  it("displays confirmation modal when 'Book Table' button is clicked", () => {
    render(<BookingForm {...initialProps} />);

    // Fill in the form fields with defined values
    fillInFormFields(formData);

    // Click the 'Book Table' button
    fireEvent.click(screen.getByText(/Book Table/i));

    // Check if the confirmation modal is displayed
    expect(screen.getByText(/YOUR RESERVATION HAS BEEN CONFIRMED/i)).toBeInTheDocument();
    expect(screen.getByText(/Check your email!/i)).toBeInTheDocument();
  });

  // Test if we are able to close the confirmation modal
  it("closes the confirmation modal when clicked outside", () => {
    render(<BookingForm {...initialProps} />);

    // Fill in the form fields with defined values
    fillInFormFields(formData);

    // Click the 'Book Table' button to open the confirmation modal
    fireEvent.click(screen.getByText(/Book Table/i));

    // Click outside the modal to close it
    fireEvent.click(screen.getByTestId("confirmation-modal"));

    // Check if the confirmation modal is closed
    expect(screen.queryByText(/YOUR RESERVATION HAS BEEN CONFIRMED/i)).toBeNull();
    expect(screen.queryByText(/Check your email!/i)).toBeNull();
  });
});
