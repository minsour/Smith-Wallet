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
import { inject } from 'mobx-react';
//import { Loading } from '../../layout/Loading';
import { getNewWalletMnemonic, getBalanceOfERC20Token, transferERC20Token } from '../../apis/ethers'
import { WalletStore } from '../../stores/walletStore';
import { store } from '../../constants/store';
import { getBalanceOfETH } from '../../apis/etherscan';
import { walletTab } from '../../constants/walletTab';
import { ModalStore } from '../../stores/modalStore';
import { modal } from '../../constants/modal';
import { Loading } from '../../layout/Loading';

const ethers = require("ethers");

interface BackUpMnemonicScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore?: WalletStore
  modalStore?: ModalStore
}

@inject(store.WALLET_STORE, store.MODAL_STORE)
@observer
export class BackUpMnemonicScreen extends React.Component<
  BackUpMnemonicScreenProps
  > {
  componentDidMount() {
    this.setWallet()
  }
  render() {
    if (this.props.modalStore!.visible[modal.LOADING]) {
      return (
        <Loading>지갑 생성하는 중</Loading>
      )
    }
    return (
      <Layout header={true} headerTitle="Mnemonic 백업">
        <Title>Mnemonic Backup</Title>
        <Text>Please backup your Mnemonic before using the wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          value={this.props.walletStore!.Mnemonic}
        />

        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            this.navigateToWallet();
          }}
        >
          next
        </Button>
      </Layout>
    );
  }

  private navigateToWallet = () => {
    this.props.navigation.navigate(route.MAIN_SCREEN);
  };
  
  private setWallet = () => {
    console.log('setMnemonic')
    this.props.walletStore!.setMnemonic(getNewWalletMnemonic())
    this.props.walletStore!.addSmith(0)
    this.props.walletStore!.setWallet(0)
    console.log(this.props.walletStore!.walletStorage)
    AsyncStorageUtils.storeWalletStorage(this.props.walletStore!.walletStorage)
  }
}
