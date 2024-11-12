export const imageAddress = "https://i.sstatic.net/ro5mY.jpg?s=256";

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface Item {
  label: string;
  name: string;
}

type Props = {
  items: Item[];
  selectedItem: Item;
  onPress: (selectedNav: Item) => void;
};

export const Option = ({ items, selectedItem, onPress }: Props) => {
  const handleClick = (item: Item) => {
    onPress(item);
  };

  return (
    <View className="bg-blue-50 w-auto py-1 mx-5 mt-5 px-1 flex flex-row justify-between rounded-full">
      {items.map((item) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.name}
          onPress={() => handleClick(item)}
          className={`${
            item.name === selectedItem.name ? "bg-white" : "bg-transparent"
          } w-1/2 items-center content-center rounded-full py-2`}
        >
          <Text style={styles.options}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
