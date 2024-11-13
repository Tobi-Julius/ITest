import { View, Text } from "react-native";
import React from "react";
import { Lesson } from "@src/types/stocks";

export const Stock = ({ item }) => {
  return (
    <View className="mr-7">
      <Text
        className={`${
          item.stockOption === "up" ? "color-green-700" : "color-red-700"
        } font-montserratSemiBold text-base leading-relaxed -tracking-widest`}
      >{`${item.stockName} ${item.stockOption === "up" ? "↑ " : "↓"} ${
        item.stockPercentage
      }%`}</Text>
    </View>
  );
};
className = "ml-5 mt-5 ";
