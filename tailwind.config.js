/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#F2F0EF",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
