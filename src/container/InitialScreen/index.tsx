import React from "react";
import { View, Image } from "react-native";
import { route } from "../../constants/route";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

const logoPath = require("../../../assets/logo.png");

export default class InitialScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={logoPath}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.createButton}
            mode="contained"
            onPress={this.navigateToInitial} //테스트용
          >
            지갑 생성
          </Button>
          <Button
            style={styles.importButton}
            mode="contained"
            onPress={this.navigateToInitial} //테스트용
          >
            니모닉 가져오기
          </Button>
        </View>
      </View>
    );
  }

  navigateToInitial = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN);
  };
}
