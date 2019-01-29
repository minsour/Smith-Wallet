import React from "react";
import { View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import styles from "./Styles";
import PINCode from "@haskkor/react-native-pincode";
import AsyncStorageUtils from "./asyncStorageUtils";

export default class CreatePinCodeScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <View style={styles.container}>
        <PINCode
          finishProcess={this.navigateToMnemonicBackupPage}
          status={"choose"}
          passwordLength={6}
          titleChoose="Enter a PIN code"
          subtitleChoose="Input 6 digits of pincode"
          storePin={AsyncStorageUtils.storePin}
        />
      </View>
    );
  }

  navigateToMnemonicBackupPage = () => {
    this.props.navigation.navigate(route.BACKUP_MNEMONIC_SCREEN);
  };
}
