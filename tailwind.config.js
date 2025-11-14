/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // ---- ANIMATIONS ----
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        floatX: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0px)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },

      animation: {
        spinslow: "spin 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        floatx: "floatX 8s ease-in-out infinite",
        "bounce-soft": "bounceSoft 4s ease-in-out infinite",
      },

      // ---- FONTS ----
      fontFamily: {
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        titillium: ["Titillium Web", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        sansserif: ["Noto Sans Mongolian", "sans-serif"],
        sans: ['"NotoSansCyr"', "Inter", "system-ui", "sans-serif"],
        serif: ['"PTSerifCyr"', "Georgia", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
