import { createSwitchNavigator } from 'react-navigation';
import { ManageMnemonicScreen } from '../container/ManageMnemonicScreen';
import { BackUpQRScreen } from '../container/BackUpQRScreen';
import { DeleteWalletScreen } from '../container/DeleteWalletScreen';

export const BackUpOrDeleteRoute = createSwitchNavigator({
  // BackUpMnemonic: BackUpMnemonicScreen,
  ManageMnemonic: ManageMnemonicScreen,
  BackUpQRCode: BackUpQRScreen,
  DeleteWallet: DeleteWalletScreen,
});
