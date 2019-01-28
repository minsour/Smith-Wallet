import React from "react";
import { View, Image } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import styles from "./Styles";

export default class SplashScreen extends React.Component<
  NavigationScreenProps
> {
  componentDidMount() {
    setTimeout(this.navigateToCreatePincodePage, 3 * 1000);
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
