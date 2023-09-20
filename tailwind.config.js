/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#150E28",
        "primary-300": "#903AFF",
        "secondary-100": "#D434FE",
        "mixed": "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      backgroundImage: () => ({
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        opensans: ["Open Sans', sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}