/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Actor: ["Actor", "Archivo"],
      Archivo:["Archivo", "sans-serif"]
    }
  },
  plugins: [],
}

