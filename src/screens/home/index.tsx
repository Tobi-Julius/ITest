import { View, Text, TextInput, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { AppImage, Stock, InvestmentCard, Popular } from "@src/components";
import { imageAddress, Option } from "./helper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { layout } from "@src/utils";
import { Foundation, FontAwesome } from "@expo/vector-icons";
import { ETFData, options, stockData, stockMarket } from "@src/mock/data";
import { Lesson } from "@src/types/stocks";
import { Item } from "./helper";

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState<Item>(options[0]);

  return (
    <View className="bg-white flex-1">
      <SafeAreaView>
        <View style={styles.backgroundTop} className="bg-blue-300" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-24"
        >
          <AppImage
            className={
              "border border-transparent border-solid w-12 h-12 mt-3 ml-5 rounded-full"
            }
            rounded={"full"}
            source={imageAddress}
          />
          <Text style={styles.headerText} className="ml-5 mt-8">
            Explore
          </Text>

          <View className="mx-5 mt-5 bg-gray-100 flex flex-row content-between items-center py-4 px-6 rounded-full">
            <FontAwesome
              name="search"
              size={layout.fontPixel(22)}
              color={"#2C2675DC"}
              style={styles.searchIcon}
            />
            <TextInput
              className="ml-3"
              style={styles.textInput}
              placeholder="Search..."
              cursorColor={"#2C2675DC"}
            />
          </View>
          <FlatList
            horizontal
            data={stockMarket as Lesson[]}
            renderItem={({ item, index, separator }) => <Stock item={item} />}
            contentContainerClassName="ml-5 mt-8"
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.subHeadingText} className="ml-5 mt-5">
            You're almost there
          </Text>
          <InvestmentCard />

          <View className="mx-5 mt-8 flex flex-row justify-between">
            <View className="flex flex-row">
              <Text className="color-black mr-3" style={styles.popularText}>
                Popular this week
              </Text>
              <Foundation
                name="info"
                size={layout.fontPixel(22)}
                color={"#245B9EFF"}
              />
            </View>
            <Text className="color-blue-900 mr-3" style={styles.viewText}>
              View all
            </Text>
          </View>
          <Option
            items={options}
            onPress={(value) => setSelectedItem(value)}
            selectedItem={selectedItem}
          />
          <Popular
            data={selectedItem.name === "Stocks" ? stockData : ETFData}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
