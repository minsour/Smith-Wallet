// src/route
import { createSwitchNavigator } from "react-navigation";
import CreatePinCodeScreen from "../container/CreatePinCodeScreen";
import BackUpMnemonicScreen from "../container/BackUpMnemonicScreen";

export const CreateWalletRoute = createSwitchNavigator({
  CreatePinCode: CreatePinCodeScreen,
  BackUpMnemonic: BackUpMnemonicScreen
});