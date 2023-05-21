/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        image: "calc(100% - 500px)",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(320px, 1fr))",
      },
    },
  },
  plugins: [],
};
