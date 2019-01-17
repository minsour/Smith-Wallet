import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../../styles/style";

export default class SplashScreenPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreenPage</Text>
      </View>
    );
  }
}
