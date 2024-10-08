/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      colors:{
        mb: "#1976d2",
        mbg: "#efefef",
        snow: "snow",
      },
    },
  },
  plugins: [],
}