/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        primary: "30px"
      },
      padding: {
        "primary-side": "15px"
      }
      , colors: {
        primary: "#F16B3D",
        secondary: "#F16B3D"
      }
    },
  },
  plugins: [],
}

