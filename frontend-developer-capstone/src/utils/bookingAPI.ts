// bookingAPI.ts --- Fake generated Data

export const fetchAPI = async (date: string): Promise<string[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate getting today's date and time
  const now = new Date();
  const todayDate = now.toISOString().split("T")[0]; // Format as "YYYY-MM-DD"
  const currentHour = now.getHours();

  // Check if the requested date is before today
  if (date < todayDate) {
    // Return an empty array for days before today
    return [];
  }

  // Check if the requested date is today
  if (date === todayDate) {
    // Adjust available times based on the current hour
    const startTime = currentHour < 17 ? 17 : currentHour + 1;
    const endTime = 23;
    const numberOfTimes = Math.max(0, endTime - startTime + 1);

    const availableTimes = Array.from({ length: numberOfTimes }, (_, index) => {
      const hour = String(index + startTime).padStart(2, "0");
      return `${hour}:00`;
    });

    return availableTimes;
  }

  // For tomorrow and beyond, generate random available times between 17:00 and 23:00
  const startTime = 17;
  const endTime = 23;
  const numberOfTimes = Math.min(
    Math.floor(Math.random() * (endTime - startTime + 1)) + startTime,
    endTime - startTime + 1
  );

  const availableTimes = Array.from({ length: numberOfTimes }, (_, index) => {
    const hour = String(index + startTime).padStart(2, "0");
    return `${hour}:00`;
  });

  return availableTimes;
};

export const submitAPI = async (formData: FormData): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate a successful submission (you can replace this with your actual logic)
  const isSubmissionSuccessful = Math.random() < 0.8; // 80% success rate
  return isSubmissionSuccessful;
};
