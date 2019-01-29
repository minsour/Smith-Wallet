import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import AsyncStorageUtils from "./asyncStorageUtils";
const ethers = require("ethers");

@observer
export default class BackUpMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  @observable myMnemonic: string = "";

  componentDidMount() {
    this.createMnemonic();
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>Mnemonic Backup</Title>
        <Text>Please backup your Mnemonic before using the wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          value={this.myMnemonic}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            this.saveMnemonic(this.myMnemonic);
            this.navigateToNextPage();
          }}
        >
          Done
        </Button>
      </View>
    );
  }

  createMnemonic = () => {
    this.myMnemonic = ethers.Wallet.createRandom().mnemonic;
  };

  saveMnemonic = (newMnemonic: string) => {
    AsyncStorageUtils.storeMnemonic(newMnemonic);
  };

  navigateToNextPage = () => {
    this.props.navigation.navigate(route.SPLASH_SCREEN);
  };
}
