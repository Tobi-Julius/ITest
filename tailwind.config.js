import { platformSelect } from "nativewind/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/components/*{js,jsx,ts,tsx}",
    "./src/screens/**/*{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        example: ["Montserrat"],
        system: platformSelect({
          ios: "Montserrat",
          android: "Montserrat",
          default: "Montserrat",
        }),
      },
    },
  },
  plugins: [],
};