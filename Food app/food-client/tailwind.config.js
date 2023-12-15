/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "rgb(51, 217, 178)",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "rgb(30, 39, 46)"
      }
    },
  },
  plugins: [require("daisyui")],
}

