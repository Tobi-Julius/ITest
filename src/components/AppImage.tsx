import { View, Text, Image } from "react-native";
import React from "react";
// import {  } from "expo-image";
import { layout } from "@src/utils";

export const AppImage = ({ source, rounded, className }) => {
  return (
    <View className={className}>
      <Image
        source={{ uri: source }}
        contentPosition={"center"}
        contentFit="cover"
        cachePolicy={"memory-disk"}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: rounded === "full" ? 100 / 2 : layout.fontPixel(8),
        }}
      />
    </View>
  );
};
