import React from "react";
import { View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import PINCode from "@haskkor/react-native-pincode";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";

export class CreatePinCodeScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="비밀번호 생성" />
        <View style={UserStyle.userBody}>
          <PINCode
            finishProcess={this.navigateToDestination}
            status={"choose"}
            passwordLength={6}
            titleChoose="Enter a PIN code"
            subtitleChoose="Input 6 digits of pincode"
            storePin={AsyncStorageUtils.storePin}
          />
        </View>
      </View>
    );
  }

  private navigateToDestination = () => {
    this.props.navigation.navigate(
      this.props.navigation.getParam("destination")
    );
  };
}
