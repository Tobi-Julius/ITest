import { layout } from "@src/utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.fontPixel(30),
    lineHeight: layout.fontPixel(28),
    letterSpacing: layout.fontPixel(2),
  },
  searchIcon: {
    width: "10%",
  },
  textInput: {
    width: "90%",
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.fontPixel(17),
  },
  stockText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.fontPixel(12),
    letterSpacing: layout.fontPixel(0.5),
  },
  subHeadingText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.fontPixel(18),
    lineHeight: layout.fontPixel(28),
    letterSpacing: layout.fontPixel(0.5),
  },
  cardText: {
    fontSize: layout.fontPixel(12),
    lineHeight: layout.fontPixel(28),
    letterSpacing: layout.fontPixel(0.5),
    fontFamily: "Montserrat_600SemiBold",
  },
  abbrvext: {
    fontSize: layout.fontPixel(10),
    lineHeight: layout.fontPixel(28),
    fontFamily: "Montserrat_400Regular",
  },
  line: {
    borderLeftWidth: layout.fontPixel(1.5),
    borderColor: "#15803d",
    height: layout.heightPixel(30),
    marginLeft: layout.fontPixel(8),
  },
  lineAdd: {
    borderLeftWidth: layout.fontPixel(1.5),
    borderColor: "#CECDCDB3",
    height: layout.heightPixel(70),
    marginLeft: layout.fontPixel(8),
  },
  checkIcon: {
    color: "#15803d",
  },
  clockIcon: {
    color: "#245B9EFF",
  },
  clockIconUnavailable: {
    color: "#CECDCDB3",
  },
  btnText: {
    fontSize: layout.fontPixel(12),
    letterSpacing: layout.fontPixel(0.5),
    fontFamily: "Montserrat_600SemiBold",
  },
  popularText: {
    fontSize: layout.fontPixel(16),
    fontFamily: "Montserrat_600SemiBold",
  },
  viewText: {
    fontSize: layout.fontPixel(12),
    fontFamily: "Montserrat_600SemiBold",
  },
  options: {
    fontSize: layout.fontPixel(15),
    letterSpacing: layout.fontPixel(0.5),
    fontFamily: "Montserrat_600SemiBold",
  },
  backgroundTop: {
    backgroundColor: "#F3F7FB7C",
    width: layout.widthPixel(400),
    height: layout.heightPixel(400),
    borderRadius: layout.fontPixel(200),
    position: "absolute",
    left: -layout.pixelSizeHorizontal(200),
    top: -layout.pixelSizeVertical(140),
    borderColor: "#EEF0F214",
  },
});
