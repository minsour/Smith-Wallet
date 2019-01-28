import React from "react";
import { View, AsyncStorage } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import styles from "./Styles";
import PINCode from "@haskkor/react-native-pincode";

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

class AsyncStorageUtils {
  static storePin = async (pin: string) => {
    try {
      await AsyncStorage.setItem("@MyStore:pin", pin);
      console.log("stored pin:::" + pin);
    } catch (error) {
      console.log("Error occurs during saving pincode:::" + error);
    }
  };
}
