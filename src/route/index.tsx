// src/route
import { createStackNavigator } from "react-navigation";

import MnemonicBackUpScreen from "../container/MnemonicBackUpPage";
import SplashScreen from "../container/SplashScreenPage";

export const CreateAccountStack = createStackNavigator({
  MnemonicBackUp: MnemonicBackUpScreen,
  Splash: SplashScreen, //페이지 이동 테스트용
});

export const RootRoute = createStackNavigator(
  {
    Splash: SplashScreen
  },
  {
    headerMode: "none"
  }
);
