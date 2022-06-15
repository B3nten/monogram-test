/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,svg}"],
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
      },
      animation: {
        blob: "blob 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1, 1)",
          },
          "33%": {
            transform: "scale(1.04, 1.07)",
          },
          "66%": {
            transform: "scale(0.94, .98)",
          },
          "100%": {
            transform: "scale(1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
