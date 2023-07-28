/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        red: colors.red,
        blue: colors.blue,
        green: colors.green,
        zinc: colors.zinc,
      },
      screens: {
        ...defaultTheme.screens,
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
