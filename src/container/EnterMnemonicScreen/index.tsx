import React from "react";
import { route } from "../../constants/route";
import { Button, Text, Title, TextInput } from "react-native-paper";
import { NavigationScreenProp, NavigationActions, StackActions } from "react-navigation";
import { styles } from "./Styles";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
import { Layout } from '../../layout/Layout';
import { inject } from 'mobx-react';
import { store } from '../../constants/store';
import { WalletStore } from '../../stores/walletStore';
import { walletTab } from '../../constants/walletTab';
import { getBalanceOfETH } from '../../apis/etherscan';
import { ethers } from 'ethers';

interface EnterMnemonicScreenProps {
  navigation: NavigationScreenProp<any, any>
  walletStore: WalletStore
}

@inject(store.WALLET_STORE)
@observer
export class EnterMnemonicScreen extends React.Component<
  EnterMnemonicScreenProps
> {
  @observable myMnemonic: string = "";

  render() {
    return (
      <Layout header={true} headerTitle="Mnemonic 입력" headerNavigation={this.props.navigation}>
        <Title>Mnemonic Recovery</Title>
        <Text>Please enter ther correct Mnemonic of your wallet</Text>
        <TextInput
          style={styles.mnemonicContainer}
          mode={"outlined"}
          multiline={true}
          onChangeText={newMnemonic => this.enteredMnemonic(newMnemonic)}
        />
        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            this.navigateToNextPage()
          }}
        >
          Recover Wallet
        </Button>
      </Layout>
    );
  }

  private enteredMnemonic = (newMnemonic: string) => {
    this.myMnemonic = newMnemonic;
  };

  private setWallet = async (newMnemonic: string) => {
    console.log('setMnemonic')
    await this.props.walletStore!.setMnemonic(newMnemonic)
    await this.props.walletStore!.addSmith(0)
    await this.props.walletStore.setWallet(0)
  }

  private navigateToNextPage = async () => {
    await this.setWallet(this.myMnemonic)
    console.log(this.props.walletStore!.currentWallet.wallet!.address)
    getBalanceOfETH(this.props.walletStore!.currentWallet.wallet!.address)
    .then(responseJson => {
      console.log(ethers.utils.formatEther(responseJson.result))
  })
    this.props.navigation.navigate(route.MAIN_SCREEN);
  };
}
