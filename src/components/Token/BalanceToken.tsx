import * as React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { store } from '../../constants/store';
import { ModalStore } from '../../stores/modalStore';
import { modal } from '../../constants/modal';
import { TokenStore } from '../../stores/tokenStore';
import { NavigationScreenProp } from 'react-navigation';
import { route } from '../../constants/route';

interface TokenType {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: string
}

interface BalanceTokenProps {
  name: string
  symbol: string
  balance: number
  modalStore?: ModalStore
  tokenStore?: TokenStore
  token: TokenType
  navigation: NavigationScreenProp<any,any>
}

@inject(store.MODAL_STORE, store.TOKEN_STORE)
@observer
export class BalanceToken extends React.Component<BalanceTokenProps> {
  render() {
    return (
      <TouchableRipple style={styles.dropedItem} onPress={() => this.clickToken(this.props.token)}>
        <View style={styles.balanceToken}>
          <View style={styles.right}>
            <Text style={styles.nameFont}>
              {this.props.name}
            </Text>
            <Text style={styles.balance}>
              {this.props.balance} {this.props.symbol}
            </Text>
          </View>
          <View style={styles.left}>
            <TouchableRipple onPress={() => this.showTxModal(this.props.token)}>
              <Text>
                송금
              </Text>
            </TouchableRipple>
          </View>
        </View>
      </TouchableRipple>
    )
  }
  
  private clickToken = (clickedToken: any) => {
    this.props.tokenStore!.clickToken(clickedToken)
    console.log(this.props.tokenStore!.clickedToken) // 테스트용
    this.props.modalStore!.showModal(modal.CLICK_TOKEN)
  }

  private showTxModal = (clickedToken: any) => {
    this.props.tokenStore!.clickToken(clickedToken)
    console.log(this.props.tokenStore!.clickedToken) // 테스트용
    this.props.modalStore!.showModal(modal.TX_MODAL)
  }
}