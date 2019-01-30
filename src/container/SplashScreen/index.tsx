import React from "react";
import { View, Image } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import styles from "./Styles";

const SPLASH_VISIABLE_TIME: number = 3 * 1000;

export class SplashScreen extends React.Component<NavigationScreenProps> {
  componentDidMount() {
    setTimeout(this.navigateToAuthorizePin, SPLASH_VISIABLE_TIME);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.splashImage}
          source={require("../../../assets/newbieWalletSplash.png")}
        />
      </View>
    );
  }

  private navigateToAuthorizePin = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.INITIAL_SCREEN
    });
  };
}
