// src/route
import { createSwitchNavigator } from "react-navigation";
import { SplashScreen } from "../container/SplashScreen";
import { LoginRoute } from "./LoginRoute";
import { AuthorizePinCodeScreen } from "../container/AuthorizePinCodeScreen";
import { MainScreen } from '../container/MainScreen';

export const RootRoute = createSwitchNavigator({
  Splash: SplashScreen,
  AuthorizePinCode: AuthorizePinCodeScreen,
  Login: LoginRoute,
  Main: MainScreen
});