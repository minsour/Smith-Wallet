import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";

export class SplashScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>스플래시 스크린</Text>
        <Button
          style={styles.Button}
          mode="contained"
          onPress={this.navigateToAuthorizePin}
        >
          로딩 끝
        </Button>
      </View>
    );
  }

  navigateToAuthorizePin = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.INITIAL_SCREEN
    });
  };
}
