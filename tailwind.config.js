/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

