import React from "react";
import { Image } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { route } from "../../constants/route";
import { styles } from "./Styles";
import { Layout } from '../../layout/Layout';

const SPLASH_VISIABLE_TIME: number = 3 * 1000;

export class SplashScreen extends React.Component<NavigationScreenProps> {
  componentDidMount() {
    setTimeout(this.navigateToAuthorizePin, SPLASH_VISIABLE_TIME);
  }

  render() {
    return (
      <Layout header={false}>
        <Image
          style={styles.splashImage}
          source={require("../../../assets/newbieWalletSplash.png")}
        />
      </Layout>
    );
  }

  private navigateToAuthorizePin = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.INITIAL_SCREEN,
      first: true
    });
  };
}
