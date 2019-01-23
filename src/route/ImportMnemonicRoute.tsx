// src/route
import { createStackNavigator } from "react-navigation";

import MnemonicBackUpScreen from "../container/MnemonicBackUpScreen";
import SplashScreen from "../container/SplashScreen";

const CreateWalletRoute = createStackNavigator({
  MnemonicBackUp: MnemonicBackUpScreen, //페이지 이동 테스트용
  Splash: SplashScreen, //페이지 이동 테스트용
});

export default CreateWalletRoute;