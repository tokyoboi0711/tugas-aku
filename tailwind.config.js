/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,.js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
      },
      boxShadow: {
        inner: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

