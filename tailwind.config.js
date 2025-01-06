/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        blue: "#5fbca3",
        blue2: "#3b9b82",
        purple: "#c84faa",
        purple2: "#9e2a81",

      },
    },
  },
  plugins: [],
  darkMode: "class",
}

