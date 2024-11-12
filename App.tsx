import { StatusBar } from "expo-status-bar";
import "./global.css";
import { useFontsHelper } from "@src/hooks/useFontsHelper";
import { Root } from "@src/navigation/Root";
import { Text } from "react-native";

export default function App() {
  const { isFontReady } = useFontsHelper();
  return isFontReady ? (
    <>
      <Root />
      <StatusBar style="dark" />
    </>
  ) : null;
}
