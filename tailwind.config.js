/** @type {import('tailwindcss').Config} */

const twColors = require("tailwindcss/colors");

const colors = {
   blue: twColors.blue[500],
   blue400: twColors.blue[400],
   blue300: twColors.blue[300],
   blue200: twColors.blue[200],
   gray: twColors.gray[400],
   gray700: twColors.gray[700],
   gray500: twColors.gray[500],
   gray300: twColors.gray[300],
   gray100: twColors.gray[100],
   green500: twColors.green[500],
   black: "#000",
   white: twColors.white,
   transparent: twColors.transparent,
};

module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      colors,
      extend: {
         keyframes: {
            animationOpacity: {
               from: { opacity: 0.2 },
               to: { opacity: 1 },
            },
            scaleIn: {
               "0%": {
                  opacity: 0,
                  transform: "scale(0.8)",
               },
               "50%": {
                  opacity: 0.3,
                  transform: "scale(0.9)",
               },
               "100%": {
                  opacity: 1,
                  transform: "scale(1)",
               },
            },
         },
         animation: {
            opacity: "animationOpacity .5s ease-in-out",
            scaleIn: "scaleIn .4s ease-in-out",
         },
      },
   },
   plugins: [require("daisyui")],
};
