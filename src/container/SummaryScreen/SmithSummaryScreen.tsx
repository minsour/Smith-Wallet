import React from "react";
import { View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";
import { Layout } from '../../layout/Layout';
import { styles } from "./Styles";
import { TokenListScreen } from '../TokenListScreen';
import { EOAListScreen } from '../EOAListScreen';
import { inject, observer } from "mobx-react";
import { observable, action, computed } from 'mobx';
import { WalletStore } from '../../stores/walletStore';
import { store } from '../../constants/store';
import { walletTab } from '../../constants/walletTab';
import { TokenStore } from '../../stores/tokenStore';

interface SummaryScreenProps {
  navigation: NavigationScreenProp<any,any>
  walletStore?: WalletStore
  tokenStore?: TokenStore
}

@inject(store.WALLET_STORE, store.TOKEN_STORE)
@observer
export class SmithSummaryScreen extends React.Component<SummaryScreenProps> {
  @observable token = true;

  @action private renderToken = () => { this.token = true }
  @action private renderEOA = () => { this.token = false }

  @computed public get getBalance () {
    return this.props.walletStore!.currentWallet.totalBalance
  }
  render() {
    return (
      <Layout header={false}>
        <View style={styles.summary}>
          <Text style={styles.summaryFont}>Smith Wallet</Text>
          <View style={styles.balance}>
            <Text style={styles.balanceFont}>{this.getBalance}</Text>
            <Text style={styles.krwFont}>KRW</Text>
          </View>
        </View> 
        <View style={styles.list}>
          <View style={styles.listTab}>
            <TouchableRipple
              style={styles.tabButton}
              onPress={this.renderToken}
            >
              <Text style={this.token ? styles.selectedFont : styles.unselectedFont}>
              토 큰
              </Text>
            </TouchableRipple>
            <TouchableRipple
              style={styles.tabButton}
              onPress={this.renderEOA}
            >
              <Text style={this.token ? styles.unselectedFont : styles.selectedFont}>
              계 좌
              </Text>
            </TouchableRipple>
          </View>
          <View style={styles.listBody}>
            { this.token ?
              <TokenListScreen navigation={this.props.navigation} /> :
              <EOAListScreen navigation={this.props.navigation} />
            }
          </View>
        </View>
      </Layout>
    );
  }
}
