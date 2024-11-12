// import { Dimensions } from "react-native"

// export function getDeviceSize(){
// //     const { width } = Dimensions.get('window');
// // const TAB_WIDTH = (width - 40 * 2) / 4;
//     const width = Dimensions.get("window")
// }

import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
// const { height } = Dimensions.get("window");

// Based on iPhone 11 scale
const widthBaseScale = width / 375;
const heightBaseScale = height / 812;

export function normalize(size: number, based: "width" | "height" = "width") {
  // const newSize = size * scale;
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, "width");
};

//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, "height");
};

//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};

//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

const fontSize = {
  h1: normalize(24),
  h2: normalize(20),
  h3: normalize(17),
  h4: normalize(16),
  h5: normalize(14),
  h6: normalize(12),
};
export default {
  width,
  height,
  size: {
    h1: fontSize.h1,
    h2: fontSize.h2,
    h3: fontSize.h3,
    h4: fontSize.h4,
    h5: fontSize.h5,
    h6: fontSize.h6,
  },
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  heightPixel,
  widthPixel,
  isSmallDevice: width <= 375,
  isShortDevice: height <= 650,
  isTabletWidth: width >= 800,
  isTabletHeight: height >= 940,
};
