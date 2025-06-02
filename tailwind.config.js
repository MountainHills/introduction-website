/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#F2F0EF",
        darkerWhite: "#E0DEDC",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
