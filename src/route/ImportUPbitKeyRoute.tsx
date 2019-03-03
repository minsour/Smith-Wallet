import { createSwitchNavigator } from "react-navigation";
import { AuthorizePinCodeScreen } from '../container/AuthorizePinCodeScreen';
import { EnterUPbitKeyScreen } from '../container/EnterUPbitKeyScreen';

export const ImportUPbitKeyRoute = createSwitchNavigator({
  AuthorizePinCode: AuthorizePinCodeScreen,
  EnterUPbitKey: EnterUPbitKeyScreen
});
