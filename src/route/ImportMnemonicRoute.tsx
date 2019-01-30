// src/route
import { createSwitchNavigator } from "react-navigation";
import { CreatePinCodeScreen } from "../container/CreatePinCodeScreen";
import { EnterMnemonicScreen } from "../container/EnterMnemonicScreen";
import { BackUpMnemonicScreen } from "../container/BackUpMnemonicScreen";

export const ImportMnemonicRoute = createSwitchNavigator({
  CreatePinCode: CreatePinCodeScreen,
  EnterMnemonic: EnterMnemonicScreen,
  BackUpMnemonic: BackUpMnemonicScreen
});
