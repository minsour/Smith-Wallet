import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { AuthorizePinCodeScreen } from "../container/AuthorizePinCodeScreen";
import { BackUpOrDeleteRoute } from "./BackUpOrDeleteRoute";
import { SettingScreen } from "../container/SettingScreen";
import { ManagingScreen } from "../container/ManagingScreen";

const ManageWalletRoute = createSwitchNavigator({
  AuthorizePinCode: AuthorizePinCodeScreen,
  BackUpOrDelete: BackUpOrDeleteRoute,
  Setting: SettingScreen
});

export const ManageAppRoute = createStackNavigator(
  {
    Managing: ManagingScreen,
    ManageWallet: ManageWalletRoute
  },
  {
    headerMode: "none"
  }
);
