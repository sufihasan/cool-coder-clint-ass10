/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        dancingScript: '"Dancing Script", cursive',
      }
    },
  },
  daisyui: {
    darkTheme: "light",
  },
  plugins: [require("daisyui")],

}

