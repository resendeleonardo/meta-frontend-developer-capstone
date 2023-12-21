/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#495E57',
        'secondary-color': '#F4CE14',
      },
    },
  },
  plugins: [],
};
