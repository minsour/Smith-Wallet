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

const ethers = require("ethers");

interface BackUpMnemonicScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore?: WalletStore
}

@inject(store.WALLET_STORE)
@observer
export class BackUpMnemonicScreen extends React.Component<
  BackUpMnemonicScreenProps
> {
  @observable myMnemonic: string = "";

  componentDidMount() {
    this.createMnemonic();
    this.setWallet(this.myMnemonic)
  }

  render() {
    // if(!this.myMnemonic) {
    //   // 제대로 작동 안하는 중 !!
    //   return <Loading>지갑 생성중</Loading>
    // }
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
          this.balanceOf()
          }}
        >
        balancOf
        </Button>

        <Button
          style={styles.createButton}
          mode="contained"
          onPress={() => {
            this.transfer()
          }}
        >
        transfer
        </Button>
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

  private balanceOf = () => {
    getBalanceOfETH(this.props.walletStore!.walletList.get(walletTab.Smith)!.wallet!.privateKey
    )
    .then((tx:any)=>{console.log(tx.toString())})
    .catch((tx:any)=>{console.log(tx)});
  }

  private transfer = () => {
    transferERC20Token(this.props.walletStore!.walletList.get(walletTab.Smith)!.wallet!.privateKey,
     "0xc382E6FB34609d656e1196a0cab6D463d8Ae8a34",
      "0xDc27C2b26EDbfb7Eb223589D4997dDA997DA8D1e",
       1)
    .then((tx:any)=>{console.log(tx)})
    .catch((tx:any)=>{console.log(tx)});
  }

  private createMnemonic = () => {
    console.log('createMnemonic')
    this.myMnemonic = getNewWalletMnemonic();
    console.log(this.myMnemonic);
  };

  private navigateToWallet = () => {
    this.props.navigation.navigate(route.MAIN_SCREEN);
  };

  private setWallet = async (newMnemonic: string) => {
    console.log('setMnemonic')
    await this.props.walletStore!.setMnemonic(newMnemonic)
    await this.props.walletStore!.addSmith(0)
  }
}
