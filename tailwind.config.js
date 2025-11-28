/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // if App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/lightswind/dist/**/*.{js,ts,jsx,tsx}", // 👈 important
  ],
  theme: {
    extend: {},
  },
  
  plugins: [require("lightswind/plugin")],
};

