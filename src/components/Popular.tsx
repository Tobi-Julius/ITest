import { View, Text } from "react-native";
import React from "react";
import { AppImage } from "./AppImage";
import { layout } from "@src/utils";
import { styles } from "@src/screens/home/styles";

export const Popular = ({ data }) => {
  return (
    <View className="mt-8 mx-5">
      {data.map((item: any) => (
        <View
          key={item.id}
          className="flex flex-row justify-between items-center mt-3"
        >
          <View className="flex flex-row items-center">
            <AppImage
              rounded={"sm"}
              source={item.imageUrl}
              className={
                "border border-transparent border-solid w-16 h-16 mt-3 ml-5 rounded-full"
              }
            />
            <View className="ml-3">
              <Text style={styles.stockText}>{item.stockName}</Text>
              <Text style={styles.abbrvext}>{item.Abbrv}</Text>
            </View>
          </View>

          <View
            className={`${
              item.stockOption === "up" ? "bg-green-700" : "bg-red-700"
            } px-2 py-1 rounded-full`}
          >
            <Text className={"color-white"} style={styles.stockText}>{`${
              item.stockOption === "up" ? "↑ " : "↓"
            } ${item.stockPercentage}%`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
