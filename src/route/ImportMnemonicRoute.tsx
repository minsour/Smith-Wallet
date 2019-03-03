// src/route
import { createSwitchNavigator } from "react-navigation";
import { EnterMnemonicScreen } from "../container/EnterMnemonicScreen";
import { AuthorizePinCodeScreen } from '../container/AuthorizePinCodeScreen';

export const ImportMnemonicRoute = createSwitchNavigator({
  AuthorizePinCode: AuthorizePinCodeScreen,
  EnterMnemonic: EnterMnemonicScreen
});
