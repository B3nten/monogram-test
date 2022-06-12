/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter'],
      },
      screens: {
        '2xl': '1512px',
        // container size
      },
    },
  },
  plugins: [],
};
