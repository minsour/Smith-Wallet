import React from "react";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import { styles } from "./Styles";
import { AsyncStorageUtils } from "../../utils/asyncStorageUtils";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import 'ethers/dist/shims.js';  // 안드로이드 니모닉 생성 시 발생하는 오류 해결(String.prototype.normalize 사용)
import { WalletStore } from '../../stores/walletStore';
import { inject } from 'mobx-react';
import { Loading } from '../../layout/Loading';

const ethers = require("ethers");

interface BackUpMnemonicScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore: WalletStore
}

@inject("walletStore")
@observer
export class BackUpMnemonicScreen extends React.Component<
  BackUpMnemonicScreenProps
> {
  @observable myMnemonic: string = "";

  componentDidMount() {
    this.createMnemonic();
  }

  render() {
    if(!this.myMnemonic) {
      // 제대로 작동 안하는 중 !!
      return <Loading>지갑 생성중</Loading>
    }
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
            this.setWallet();
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
  
  private setWallet = async () => {
    await this.setMnemonic();
    const { walletStore } = this.props;
    const path = "m/44'/60'/0/0";
    walletStore.setWallet(ethers.Wallet.fromMnemonic(walletStore.getMnemonic, path));
  };

  private setMnemonic = async () => {
    const { walletStore } = this.props;
    await AsyncStorageUtils.loadMnemonic()
    .then( res => walletStore.setMnemonic(res) );
  };
}
