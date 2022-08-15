/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['"Miller Banner"', 'serif'],
      sans: ['"Helvetica Neue"', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#b69f58"
      }
    },
  },
  plugins: [],
}
