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
        'custom-card': '24px 24px 48px 0px #00000040, 12px 8px 16px 0px #BCEFF1 inset, -12px -8px 16px 0px #80D3D7 inset',
      },
    },
  },
  plugins: [],
};

