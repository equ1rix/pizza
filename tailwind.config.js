/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fe5e1f",
        secondMain: "#ff8757",
        customizationBG: "#f3f3f3",
        text: "#ffe3d4",
        mainText: "#ffc4a9",
      },
    },
  },
  plugins: [],
};
