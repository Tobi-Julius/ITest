import { View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { layout } from "@src/utils";
import { Button } from "./Primary/Button";
import { Text } from "./Primary/Text";

export const InvestmentCard = () => {
  return (
    <View className="bg-slate-50 py-6 pb-8 mx-5 mt-3 px-4 rounded-2xl">
      <View>
        <View className="flex flex-row items-center">
          <MaterialIcons
            color={"#15803d"}
            name="check-circle"
            size={layout.fontPixel(18)}
          />
          <Text
            className="color-green-700 ml-3 font-montserratSemiBold text-base"
            text="Start signing up"
          />
        </View>
        <View
          style={{
            borderLeftWidth: layout.fontPixel(1.5),
            borderColor: "#15803d",
            height: layout.heightPixel(30),
            marginLeft: layout.fontPixel(8),
          }}
        />
      </View>
      <View>
        <View className="flex flex-row items-center">
          <MaterialIcons
            color={"#15803d"}
            name="check-circle"
            size={layout.fontPixel(18)}
          />
          <Text
            className="color-green-700 ml-3 font-montserratSemiBold text-base"
            text=" Finish setting up your account"
          />
        </View>
        <View
          style={{
            borderLeftWidth: layout.fontPixel(1.5),
            borderColor: "#15803d",
            height: layout.heightPixel(30),
            marginLeft: layout.fontPixel(8),
          }}
        />
      </View>

      <View>
        <View className="flex flex-row items-center">
          <AntDesign
            color={"#245B9EFF"}
            name="clockcircle"
            size={layout.fontPixel(17)}
          />
          <Text
            className="color-black ml-3 font-montserratSemiBold text-base"
            text={"Add money to start investing"}
          />
        </View>
        <View className="flex flex-row items-start">
          <View
            style={{
              borderLeftWidth: layout.fontPixel(1.5),
              borderColor: "#CECDCDB3",
              height: layout.heightPixel(70),
              marginLeft: layout.fontPixel(8),
            }}
          />
          <Button
            onPress={() => {}}
            title="Add money     →"
            buttonStyle="ml-8 bg-blue-800 px-6 py-3 color-slate-50 mt-3 rounded-full"
            textStyle="color-white font-montserratSemiBold text-base"
            intent="primary"
            size="large"
          />
        </View>
      </View>
      <View className="flex flex-row items-center">
        <AntDesign
          color={"#CECDCDB3"}
          name="clockcircle"
          size={layout.fontPixel(17)}
        />
        <Text
          className="color-gray-300 ml-3 font-montserratSemiBold text-base"
          text={"Make your first investment"}
        />
      </View>
    </View>
  );
};
