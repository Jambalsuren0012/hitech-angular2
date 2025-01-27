/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        spinslow: "spin 3s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        titillium: ["Titillium Web", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }), // Ensure scrollbar plugin works properly
  ],
};
