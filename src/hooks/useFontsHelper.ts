import { useCallback, useEffect, useState } from "react";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export const useFontsHelper = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const subscribe = async () => {
    SplashScreen.preventAutoHideAsync();

    try {
      await Font.loadAsync({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });
    } catch (error) {
      console.warn(error);
    } finally {
      Font.isLoaded ? setIsFontReady(true) : setIsFontReady(false);
    }
  };
  useEffect(() => {
    subscribe();
  });

  const unSubscribe = async () => {
    isFontReady === true ? SplashScreen.hideAsync() : subscribe();
  };

  useEffect(() => {
    unSubscribe();
  });

  return { isFontReady };
};
