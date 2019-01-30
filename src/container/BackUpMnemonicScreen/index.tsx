import React from "react";
import { View } from "react-native";

import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";

import { observer } from "mobx-react/native";
import { observable } from "mobx";

import styles from "./Styles";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { UserHeader } from "../../components/UserHeader";
import UserStyle from "../../components/UserHeader/Styles";
import { route } from "../../constants/route";

const ethers = require("ethers");

@observer
export class BackUpMnemonicScreen extends React.Component<
  NavigationScreenProps
> {
  @observable myMnemonic: string = "";

  componentDidMount() {
    this.createMnemonic();
  }

  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="Mnemonic" />
        <View style={UserStyle.userBody}>
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
              this.navigateToWallet();
            }}
          >
            Done
          </Button>
        </View>
      </View>
    );
  }

  private createMnemonic = () => {
    this.myMnemonic = ethers.Wallet.createRandom().mnemonic;
  };

  private saveMnemonic = (newMnemonic: string) => {
    AsyncStorageUtils.storeMnemonic(newMnemonic);
  };

  private navigateToWallet = () => {
    this.props.navigation.navigate(route.SUMMARY_SCREEN);
  };
}
