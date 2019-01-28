import React from "react";
import { View, Image } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import styles from "./Styles";

const SPLASH_VISIABLE_TIME: number = 3 * 1000;

export default class SplashScreen extends React.Component<
  NavigationScreenProps
> {
  visiableTime = 3 * 1000;
  componentDidMount() {
    setTimeout(this.navigateToCreatePincodePage, SPLASH_VISIABLE_TIME);
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

  navigateToCreatePincodePage = () => {
    this.props.navigation.navigate(route.INITIAL_SCREEN);
  };
}
