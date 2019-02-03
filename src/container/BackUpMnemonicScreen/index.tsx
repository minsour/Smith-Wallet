import React from "react";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import { styles } from "./Styles";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import 'ethers/dist/shims.js';  // 안드로이드 니모닉 생성 시 발생하는 오류 해결(String.prototype.normalize 사용)

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
      <Layout header={true} headerTitle="Mnemonic 백업">
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
      </Layout>
    );
  }

  private createMnemonic = () => {
    this.myMnemonic = ethers.Wallet.createRandom().mnemonic;
  };

  private saveMnemonic = (newMnemonic: string) => {
    AsyncStorageUtils.storeMnemonic(newMnemonic);
  };

  private navigateToWallet = () => {
    this.props.navigation.navigate(route.MAIN_SCREEN);
  };
}
