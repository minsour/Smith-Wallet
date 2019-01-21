import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "./Styles";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreenPage</Text>
      </View>
    );
  }
}
