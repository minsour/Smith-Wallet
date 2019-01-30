// src/route
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { SelectAddressScreen } from "../container/SeletAddressScreen";
import { TokenSendScreen } from "../container/TokenSendScreen";
import { AuthorizePinCodeScreen } from "../container/AuthorizePinCodeScreen";

const SendRoute = createStackNavigator(
  {
    SelectAddress: SelectAddressScreen,
    TokenSend: TokenSendScreen
  },
  {
    headerMode: "none"
  }
);

export const TxSendRoute = createSwitchNavigator({
  AuthorizePinCode: AuthorizePinCodeScreen,
  Send: SendRoute
});
