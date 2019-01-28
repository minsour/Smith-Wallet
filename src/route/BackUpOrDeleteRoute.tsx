import { createSwitchNavigator } from "react-navigation";
import BackUpMnemScreen from '../container/BackUpMnemonicScreen';
import { BackUpQRScreen } from '../container/BackUpQRScreen';
import { DeleteWalletScreen } from '../container/DeleteWalletScreen';

export const BackUpOrDeleteRoute = createSwitchNavigator ({
    BackUpMnemonic: BackUpMnemScreen,
    BackUpQRCode: BackUpQRScreen,
    DeleteWallet: DeleteWalletScreen
});