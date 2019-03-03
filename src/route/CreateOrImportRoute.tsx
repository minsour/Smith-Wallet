import { createSwitchNavigator } from "react-navigation";
import { CreateWalletRoute } from './CreateWalletRoute';
import { ImportMnemonicRoute } from '../route/ImportMnemonicRoute';

export const CreateOrImportRoute = createSwitchNavigator ({
    CreateWallet: CreateWalletRoute
});