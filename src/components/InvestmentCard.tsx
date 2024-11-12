import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { styles } from "@src/screens/home/styles";
import { layout } from "@src/utils";

export const InvestmentCard = () => {
  return (
    <View className="bg-slate-50 py-6 pb-8 mx-5 mt-3 px-4 rounded-2xl">
      <View>
        <View className="flex flex-row items-center">
          <MaterialIcons
            style={styles.checkIcon}
            name="check-circle"
            size={layout.fontPixel(18)}
          />
          <Text style={styles.cardText} className="color-green-700 ml-3">
            Start signing up
          </Text>
        </View>
        <View style={styles.line} />
      </View>
      <View>
        <View className="flex flex-row items-center">
          <MaterialIcons
            style={styles.checkIcon}
            name="check-circle"
            size={layout.fontPixel(18)}
          />
          <Text style={styles.cardText} className="color-green-700 ml-3">
            Finish setting up your account
          </Text>
        </View>
        <View style={styles.line} />
      </View>

      <View>
        <View className="flex flex-row items-center">
          <AntDesign
            style={styles.clockIcon}
            name="clockcircle"
            size={layout.fontPixel(17)}
          />
          <Text style={styles.cardText} className="color-black ml-3">
            Add money to start investing
          </Text>
        </View>
        <View className="flex flex-row items-start">
          <View style={styles.lineAdd} />
          <TouchableOpacity
            activeOpacity={0.8}
            className="ml-8 bg-blue-800 px-6 py-3 color-slate-50 mt-3 rounded-full"
          >
            <Text style={styles.btnText} className="color-slate-50">
              Add money {"  "}→
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-center">
        <AntDesign
          style={styles.clockIconUnavailable}
          name="clockcircle"
          size={layout.fontPixel(17)}
        />
        <Text style={styles.cardText} className="color-gray-500 ml-3">
          Make your first investment
        </Text>
      </View>
    </View>
  );
};
