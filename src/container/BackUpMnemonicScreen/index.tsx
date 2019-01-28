import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

export default class BackUpMnemScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is BackUp Mnem Screen</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.navigateToWallet}
        >
          월렛으로
        </Button>
      </View>
    );
  }

  navigateToWallet = () => {
    this.props.navigation.navigate(route.SUMMARY_SCREEN);
  };
}
