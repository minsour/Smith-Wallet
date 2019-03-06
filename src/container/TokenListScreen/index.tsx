import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { styles } from "./Styles";
import { route } from "../../constants/route";
import { Layout } from '../../layout/Layout';
import { ScrollView, View, RefreshControl } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Token } from '../../components/Token';
import { TokenStore } from '../../stores/tokenStore';
import { store } from '../../constants/store';
import { WalletStore } from '../../stores/walletStore';
import { observable, action } from 'mobx';

interface TokenListScreenProps {
  navigation: NavigationScreenProp<any, any>
  tokenStore?: TokenStore
  walletStore?: WalletStore
}

@inject(store.TOKEN_STORE, store.WALLET_STORE)
@observer
export class TokenListScreen extends React.Component<TokenListScreenProps> {
  @observable refreshing = false
  @action _onRefresh = () => {
    this.refreshing = true
    this.props.tokenStore!.updateBalanceInfo()
      .then(()=>{ this.refreshing = false })
  }
  render() {
    let tokenId: number = 0
    return (
      <View style={styles.container}>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
          {this.props.tokenStore!.selectedTokenList.map(token =>
            <Token
              key={`${tokenId++}`}
              token={token}
              selected={true}
            />
          )}
          </ScrollView>
      </View>
    );
  }

  private navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE)
  }

  private navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
        destination: route.SELECT_ADDRESS_SCREEN
    })
  }
}
