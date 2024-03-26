/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1D50A2",
        secondary: "#1976D2",
        positive: "#26A69A",
        negative: "#C10015",
      },
    },
  },
  plugins: [],
};
