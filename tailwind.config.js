/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#8227E2",
        secondary: "#2F0A55",
        "light-gray": "#F7F7F7",
        "medium-gray": "#D9D9D9",
        "dark-gray": "#A6A6A6",
        "light-black": "#111",
        "light-white": "rgba(255,255,255,0.3)",
        "light-green": "rgba(105,200,149,0.1)",
        "light-red": "rgba(255,0,0,0.1)",
        "light-yellow": "rgba(255,242,0,0.1)",
      },
      boxShadow: {
        right: "4px 0 10px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(120deg, #6C53C7, #D2C8FA)",
        "gradient-green": "linear-gradient(120deg, #69C895, #B7F9DD)",
        "gradient-blue": "linear-gradient(120deg, #2878F4, #A2C7FB)",
        "gradient-yellow": "linear-gradient(120deg, #DBBA36, #EFE4AE)",
      },
    },
  },
  plugins: [],
};
