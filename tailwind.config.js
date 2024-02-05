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
        "mixed": "rgba(212, 52, 254, 0.12)",
        "mixed-extra": "rgba(144, 58, 255, 0.12)",
        "mixed-partner": "rgba(255, 255, 255, 0.01)",
        "mixed-privacy": "rgba(255, 255, 255, 0.75)",
        "mixed-contact": "rgba(255, 255, 255, 0.03)",
        "border": "#903AFF",
        "footer": "#100B20",
        "span": "#D434FE",
        "extra": "#FF26B9",
        "prize": "#903AFF",
      },
      backgroundImage: () => ({
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        unicaone: ['Unica One', "cursive"],
      },
    },
  },
  plugins: [],
}