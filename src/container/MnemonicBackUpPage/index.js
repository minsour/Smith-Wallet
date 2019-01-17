import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { route } from "../../constants/route";
import { Button as ButtonFromPaper } from "react-native-paper";

export default class MnemonicBackUpPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is Mnemonic Backup Page</Text>
        <Button
          title="Back Up Mnemonic"
          onPress={() => this.props.navigation.navigate(route.SPLASH_PAGE)}
        />
        <ButtonFromPaper
          icon="add-a-photo"
          mode="contained"
          onPress={() => this.props.navigation.navigate(route.SPLASH_PAGE)}
        >
          Press me
        </ButtonFromPaper>
      </View>
    );
  }
}
