import * as React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { observable, action } from 'mobx';
import { inject } from 'mobx-react';
import { store } from '../../constants/store';
import { TokenStore } from '../../stores/tokenStore';
import { observer } from 'mobx-react/native';

interface TokenType {
    symbol: string
    koreanName: string
    marketCode: string
    address: string
    abi?: string
    balance?: number
}
  
interface NotBalanceTokenProps {
  tokenStore?: TokenStore
  token: TokenType
}

@inject(store.TOKEN_STORE)
@observer
export class NotBalanceToken extends React.Component<NotBalanceTokenProps> {
  @observable private isPicked = false
  
  @action private pickOrDropToken = () => {
    this.isPicked ?
    this.props.tokenStore!.dropOffToken(this.props.token) :
    this.props.tokenStore!.pickUpToken(this.props.token)
    this.isPicked = !this.isPicked
  }
  render() {
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
}
