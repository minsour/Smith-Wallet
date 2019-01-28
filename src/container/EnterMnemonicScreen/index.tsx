import React from "react";
import { View, AsyncStorage } from "react-native";
import { route } from "../../constants/route";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

export default class EnterMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <View style={styles.container}>
        <Title>Mnemonic Recovery</Title>
        <Text>Please enter ther correct Mnemonic of your wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          onChangeText={value => this.saveMnemonic(value)}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={this.navigateToNextPage}
        >
          Recover Wallet
        </Button>
      </View>
    );
  }

  state = {
    visible: true,
    myMnemonic: ""
  };

  navigateToNextPage = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN);
  };

  saveMnemonic = async (value: any) => {
    try {
      await AsyncStorage.setItem("@MyStore:key", value);
    } catch (error) {
      console.log("Error occurs during saving data:::" + error);
    }
  };
}
