import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Home, Stock, Wallet } from "@src/screens";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { layout } from "@src/utils";
import { View } from "react-native";

const Tab = createBottomTabNavigator<any>();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0E537BFF",
        tabBarInactiveTintColor: "#B3B3B3",
        tabBarAllowFontScaling: true,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          position: "absolute",
          height: layout.heightPixel(80),
          paddingHorizontal: layout.pixelSizeHorizontal(50),
          backgroundColor: "transparent",
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={["#FFFFFFCF", "#ffffff"]}
            style={{
              height: layout.heightPixel(80),
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        ),
      }}
      initialRouteName="home"
    >
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={
                  focused && {
                    backgroundColor: "#93B6D93F",
                    paddingHorizontal: layout.pixelSizeHorizontal(17),
                    paddingVertical: layout.pixelSizeVertical(10),
                    borderRadius: layout.fontPixel(20),
                  }
                }
              >
                <Feather
                  name="search"
                  size={layout.fontPixel(25)}
                  color={color}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        name="stock"
        component={Stock}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={
                  focused && {
                    backgroundColor: "#93B6D93F",
                    paddingHorizontal: layout.pixelSizeHorizontal(17),
                    paddingVertical: layout.pixelSizeVertical(10),
                    borderRadius: layout.fontPixel(20),
                  }
                }
              >
                <FontAwesome
                  name="inbox"
                  size={layout.fontPixel(25)}
                  color={color}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        name="wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={
                  focused && {
                    backgroundColor: "#93B6D93F",
                    paddingHorizontal: layout.pixelSizeHorizontal(17),
                    paddingVertical: layout.pixelSizeVertical(10),
                    borderRadius: layout.fontPixel(20),
                  }
                }
              >
                <Ionicons
                  name="wallet-outline"
                  size={layout.fontPixel(25)}
                  color={color}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
