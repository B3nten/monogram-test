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
      colors: {
        'brand-gray': "#757575",
        'brand-bg': "#151515",
      },
      dropShadow: {
        'circle': [
          '0 0 20px #53FB2A40',
          '0 0 42px #E9E11F',
          '0 0 12px #53FB2A'
        ],
      }
    },
  },
  plugins: [],
};
