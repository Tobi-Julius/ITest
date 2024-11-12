import { View, Text } from "react-native";
import React from "react";
import { Lesson } from "@src/types/stocks";
import { styles } from "@src/screens/home/styles";

export const Stock = ({ item }) => {
  return (
    <View className="mr-7">
      <Text
        className={`${
          item.stockOption === "up" ? "color-green-700" : "color-red-700"
        }`}
        style={styles.stockText}
      >{`${item.stockName} ${item.stockOption === "up" ? "↑ " : "↓"} ${
        item.stockPercentage
      }%`}</Text>
    </View>
  );
};
