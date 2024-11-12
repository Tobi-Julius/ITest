import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTab } from "./BottomTab";

const Stack = createStackNavigator<any>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="bottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
