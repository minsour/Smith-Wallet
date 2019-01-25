// src/route
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import MnemonicBackUpScreen from "../container/MnemonicBackUpScreen";
import SplashScreen from "../container/SplashScreen";
import LoginRoute from "./LoginRoute";

export const CreateAccountStack = createStackNavigator({
  MnemonicBackUp: MnemonicBackUpScreen,
  Splash: SplashScreen, //페이지 이동 테스트용
});

export const RootRoute = createSwitchNavigator(
  {
    Login: LoginRoute
  }
);
