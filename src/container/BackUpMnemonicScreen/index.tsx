import React from "react";
import { View, AsyncStorage } from "react-native";
import { route } from "../../constants/route";
import {
  Button,
  Text,
  Dialog,
  Portal,
  Paragraph,
  Title,
  TextInput
} from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

const ethers = require("ethers");

export default class BackUpMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  render() {
    return (
      <View style={styles.container}>
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
            <Dialog.Title>Mnemonic Backup</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Before using wallet, please backup your mnemonic
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Title>Mnemonic Backup</Title>
        <Text>Please backup your Mnemonic before using the wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          value={this.state.myMnemonic}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={this.navigateToNextPage}
        >
          Done
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

  hideDialog = () => {
    this.setState({ visible: false });
    this.generateMnemonic();
  };

  generateMnemonic = async () => {
    try {
      const myMnemonic = ethers.Wallet.createRandom().mnemonic;
      await AsyncStorage.setItem("@MyStore:key", myMnemonic);
      this.getMnemonic();
    } catch (error) {
      console.log("Error occurs during saving data:::" + error);
    }
  };

  getMnemonic = async () => {
    try {
      const value = await AsyncStorage.getItem("@MyStore:key");
      if (value !== null) {
        this.setState({ myMnemonic: value });
      }
    } catch (error) {
      console.log("Error occurs during retriving data:::" + error);
    }
  };
}
