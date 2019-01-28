import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

export default class CreatePinCodeScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Create PinCode Screen Page</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.navigateToDestination}
        >
          Pin 생성
        </Button>
      </View>
    );
  }

  navigateToDestination = () => {
    this.props.navigation.navigate(this.props.navigation.getParam("destination"));
  };
}
