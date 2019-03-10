import * as React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { observable, action } from 'mobx';
import { inject } from 'mobx-react';
import { store } from '../../constants/store';
import { TokenStore } from '../../stores/tokenStore';
import { observer } from 'mobx-react/native';
import { ModalStore } from '../../stores/modalStore';
import { modal } from '../../constants/modal';

interface TokenType {
    symbol: string
    koreanName: string
    marketCode: string
    address: string
    abi?: string
    balance?: number
    isPicked?: boolean
}
  
interface NotBalanceTokenProps {
  tokenStore?: TokenStore
  modalStore?: ModalStore
  token: TokenType
}

@inject(store.TOKEN_STORE, store.MODAL_STORE)
@observer
export class NotBalanceToken extends React.Component<NotBalanceTokenProps> {  
  @observable private isPicked = false
  @action private pickOrDropToken = () => {
    this.props.token.isPicked ?
    this.props.tokenStore!.dropOffToken(this.props.token) :
    this.props.tokenStore!.pickUpToken(this.props.token)

    if (this.props.token.isPicked == undefined)
      this.props.token.isPicked = false

    this.props.token.isPicked = !this.props.token.isPicked

    this.isPicked = this.props.token.isPicked
  }
  @action private refresh = () => {
    this.isPicked = this.props.token.isPicked!
    this.props.modalStore!.hideModal(modal.IS_PICKED)
  }
  render() {
    { this.init() }
    if(this.props.modalStore!.visible[modal.IS_PICKED]) this.refresh()
    return (
      <TouchableRipple
        style={this.isPicked ? styles.pickedItem : styles.dropedItem}
        onPress={this.pickOrDropToken}
      >
        <View>
          <View style={styles.title}>
            <Text style={styles.nameFont}>
              {this.props.token.koreanName}
            </Text>
            <Text style={styles.symbolFont}>
              {this.props.token.symbol}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    );
  }

  @action init = () => {
    this.props.token.isPicked == undefined ? 
    this.isPicked = false :this.isPicked = this.props.token.isPicked
  }
}