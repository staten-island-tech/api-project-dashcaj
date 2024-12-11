/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/main.js", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          'xs': '550px',
          'lg': '800px',
          '2xl': '2000px',
        },
      },
    },
    extend: {},

  plugins: [require("daisyui")],
};
