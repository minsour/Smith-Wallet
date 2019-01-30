import { createSwitchNavigator } from "react-navigation";
import { BackUpMnemonicScreen } from "../container/BackUpMnemonicScreen";
import { BackUpQRScreen } from "../container/BackUpQRScreen";
import { DeleteWalletScreen } from "../container/DeleteWalletScreen";

export const BackUpOrDeleteRoute = createSwitchNavigator({
  BackUpMnemonic: BackUpMnemonicScreen,
  BackUpQRCode: BackUpQRScreen,
  DeleteWallet: DeleteWalletScreen
});
