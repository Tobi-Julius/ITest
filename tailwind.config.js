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
        montserratRegular: ["Montserrat_400Regular"],
        montserratMedium: ["Montserrat_500Medium"],
        montserratSemiBold: ["Montserrat_600SemiBold"],
        montserratBold: ["Montserrat_700Bold"],
      },
    },
  },
  plugins: [],
};

// fontFamily: {
//   "montserrat-regular": platformSelect({
//     android: "Montserrat_400Regular",
//     ios: "Montserrat_Regular",
//   }),
//   "montserrat-medium": platformSelect({
//     android: "Montserrat_500Medium",
//     ios: "Montserrat_Medium",
//   }),
//   "montserrat-semibold": platformSelect({
//     android: "Montserrat_600SemiBold",
//     ios: "Montserrat_SemiBold",
//   }),
//   "montserrat-bold": platformSelect({
//     android: "Montserrat_700Bold",
//     ios: "Montserrat_Bold",
//   }),
// },
