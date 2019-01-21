import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

export default class MnemonicBackUpScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Mnemonic Backup Page</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.navigateToSplash}
        >
          Next
        </Button>
      </View>
    );
  }

  navigateToSplash = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN);
  };
}
