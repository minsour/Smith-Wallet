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
          titleChoose="Enter a PIN Code"
          subtitleChoose="input 6 digits of pincode"
          storePin={(pin: string) => this.savePincode(pin)}
        />
      </View>
    );
  }

  navigateToMnemonicBackupPage = () => {
    this.props.navigation.navigate(route.BACKUP_MNEMONIC_SCREEN);
  };

  savePincode = async (pin: string) => {
    try {
      await AsyncStorage.setItem("@MyStore:pin", pin);
      console.log("stored pin:::" + pin);
    } catch (error) {
      console.log("Error occurs during saving pincode:::" + error);
    }
  };
}
