// src/route
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import CreateWalletRoute from './CreateWalletRoute';
import ImportMnemonicRoute from '../route/ImportMnemonicRoute';
import InitialScreen from '../container/InitialScreen';

const CreateOrImportSwitch = createSwitchNavigator ({
  CreateWallet: CreateWalletRoute,
  ImportMnemonic: ImportMnemonicRoute
})

const LoginRoute = createStackNavigator({
    Initial: InitialScreen,
    CreateOrImport: CreateOrImportSwitch  // CreateScreen 또는 ImportScreen 으로 이동
  },
  {
    headerMode: "none"
  }
);

export default LoginRoute;