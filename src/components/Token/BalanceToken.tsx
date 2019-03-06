import * as React from "react";
import { Text, TouchableRipple, Button } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { store } from '../../constants/store';
import { ModalStore } from '../../stores/modalStore';
import { modal } from '../../constants/modal';
import { TokenStore } from '../../stores/tokenStore';
import { WalletStore } from '../../stores/walletStore';
import { getERC20TokenHistory } from '../../apis/EtherscanAPI';
import { walletTab } from '../../constants/walletTab';

interface TokenType {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: number
  krwBalance?: number
}

interface BalanceTokenProps {
  modalStore?: ModalStore
  tokenStore?: TokenStore
  walletStore?: WalletStore
  token: TokenType
}

@inject(store.MODAL_STORE, store.TOKEN_STORE, store.WALLET_STORE)
@observer
export class BalanceToken extends React.Component<BalanceTokenProps> {
  render() {
    return (
      <TouchableRipple style={styles.selectedItem} onPress={() => this.clickToken(this.props.token)}>
        <View style={styles.balanceToken}>
          <View style={styles.right}>
            <Text style={styles.nameFont}>
              {this.props.token.koreanName}
            </Text>
            <Text style={styles.balance}>
              {this.props.token.balance} {this.props.token.symbol}
            </Text>
            <Text style={styles.balance}>
              {this.props.token.krwBalance} KRW
            </Text>
          </View>
          <View style={styles.left}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => this.showTxModal(this.props.token)} //테스트용
            >
              송금
            </Button>
          </View>
        </View>
      </TouchableRipple>
    )
  }
  
  private clickToken = async (clickedToken: any) => {
    await this.props.tokenStore!.clickToken(clickedToken)
    console.log(this.props.tokenStore!.clickedToken) // 테스트용
    this.props.modalStore!.showModal(modal.CLICK_TOKEN)
  }

  private showTxModal = async (clickedToken: any) => {
    await this.props.tokenStore!.clickToken(clickedToken)
    console.log(this.props.tokenStore!.clickedToken) // 테스트용
    this.props.modalStore!.showModal(modal.TX_MODAL)
  }
}