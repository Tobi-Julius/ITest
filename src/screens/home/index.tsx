import { View, TextInput, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import {
  AppImage,
  Stock,
  InvestmentCard,
  Popular,
  Button,
  Text,
} from "@src/components";
import { imageAddress, Option } from "./helper";
import { SafeAreaView } from "react-native-safe-area-context";
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
        <View
          style={{
            backgroundColor: "#F3F7FB7C",
            width: layout.widthPixel(400),
            height: layout.heightPixel(400),
            borderRadius: layout.fontPixel(200),
            position: "absolute",
            left: -layout.pixelSizeHorizontal(200),
            top: -layout.pixelSizeVertical(140),
            borderColor: "#EEF0F214",
          }}
          className="bg-blue-300"
        />
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
          <Text
            className="ml-5 mt-8 font-montserratBold text-4xl leading-relaxed tracking-widest"
            text={"Explore"}
          />

          <View className="mx-5 mt-5 bg-gray-100 flex flex-row content-between items-center py-4 px-6 rounded-full">
            <FontAwesome
              name="search"
              size={layout.fontPixel(22)}
              color={"#2C2675DC"}
              style={{ width: "10%" }}
            />
            <TextInput
              className="ml-3 font-montserratRegular text-2xl tracking-normal w-max"
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

          <Text
            className="ml-5 mt-5 font-montserratSemiBold text-2xl leading-relaxed -tracking-widest"
            text={"You're almost there"}
          />

          <InvestmentCard />

          <View className="mx-5 mt-8 flex flex-row justify-between">
            <View className="flex flex-row">
              <Text
                className="color-black mr-3 font-montserratSemiBold text-2xl"
                text="Popular this week"
              />
              <Foundation
                name="info"
                size={layout.fontPixel(22)}
                color={"#245B9EFF"}
              />
            </View>
            <Text
              className="color-blue-900 mr-3 font-montserratMedium text-base"
              text="View all"
            />
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
