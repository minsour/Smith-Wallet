// src/route
import { createSwitchNavigator } from "react-navigation";
import { SplashScreen } from "../container/SplashScreen";
import { LoginRoute } from "./LoginRoute";
import { AuthorizePinCodeScreen } from "../container/AuthorizePinCodeScreen";
import { WalletRoute } from "./WalletRoute";

export const RootRoute = createSwitchNavigator({
  Splash: SplashScreen,
  AuthorizePinCode: AuthorizePinCodeScreen,
  Login: LoginRoute,
  Wallet: WalletRoute
});
