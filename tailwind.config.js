/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#dd4e1e",
      secondary: "#3b444b",
      accent: "#e5703d",
      dark: "#080808",
      light: "#f0ece1",
    },

    extend: {
      colors: {
        transparent: "#00000000",
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
      fontFamily: {
        sans: ["Standard", "Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        ...defaultTheme.screens,
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
