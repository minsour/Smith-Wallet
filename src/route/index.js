// src/route
import React from "react";
import { createStackNavigator } from "react-navigation";

import MnemonicBackUpPage from "../container/MnemonicBackUpPage";
import SplashScreenPage from "../container/SplashScreenPage";

export const CreateAccountStack = createStackNavigator({
  MnemonicBackUp: MnemonicBackUpPage,
  SplashScreen: SplashScreenPage //페이지 이동 테스트용
});

export const RootRoute = createStackNavigator(
  {
    SplashScreen: SplashScreenPage
  },
  {
    headerMode: "none"
  }
);
