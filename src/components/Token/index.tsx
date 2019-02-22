import * as React from "react";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "./Styles";
import { View } from 'react-native';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react/native';
import { NotBalanceToken } from './NotBalanceToken';
import { BalanceToken } from './BalanceToken';
import { TokenStore } from '../../stores/tokenStore';
import { store } from '../../constants/store';

interface TokenType {
  symbol: string
  koreanName: string
  marketCode: string
  address: string
  abi?: string
  balance?: number
}

interface TokenProps {
  balance?: number
  name: string
  symbol: string
  address: string
  token: TokenType
  tokenStore?: TokenStore
}

@inject(store.TOKEN_STORE)
@observer
export class Token extends React.Component<TokenProps> {
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
        { this.props.balance ? 
          // SummaryScreen에 rendering
          <BalanceToken
            balance={this.props.balance}
            name={this.props.name}
            symbol={this.props.symbol}
          /> :
          // AddTokenScreen에 rendering
          <NotBalanceToken
            name={this.props.name}
            symbol={this.props.symbol}
            address={this.props.address}
          />
        } 
      </TouchableRipple>
    );
  }
}
