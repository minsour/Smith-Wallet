import React from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { styles } from './Styles';
import { transferEthereum, getAccountInfo } from '../../apis/ethers';
import { inject, observer } from 'mobx-react';
import { store } from '../../constants/store';
import { WalletStore } from '../../stores/walletStore';
import { observable, action } from 'mobx';
import { TokenStore } from '../../stores/tokenStore';
import { ethers } from 'ethers';

interface TokenSendScreenProps {
  navigation: NavigationScreenProp<any, any>
  walletStore?: WalletStore
  tokenStore?: TokenStore
}

@inject(store.WALLET_STORE, store.TOKEN_STORE)
@observer
export class TokenSendScreen extends React.Component<TokenSendScreenProps> {
  @observable amount = ''
  @observable account = ''
  title = this.props.tokenStore!.clickedToken.koreanName + ' 보내기'
  render() {
    return (
      <Layout
        header={true}
        headerTitle={this.title}
        headerNavigation={this.props.navigation}
      >
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.accountInput}
                label="받는 주소"
                value={this.account}
                underlineColor="#030066"
                onChangeText={account => this.changeAccount(account)}
              />
            </View>
            <View>
              <TextInput
                style={styles.amountInput}
                label="송금 수량"
                value={this.amount}
                underlineColor="#030066"
                onChangeText={amount => this.changeAmount(amount)}
              />
            </View>
          </View>
          <View style={styles.subscription}>
            <View style={styles.total}>
              <Text style={styles.totalText}>총액</Text>
              <Text style={styles.totalNumber}>{this.props.tokenStore!.clickedToken.balance}</Text>
              <Text style={styles.totalSymbol}>{this.props.tokenStore!.clickedToken.symbol}</Text>
            </View>
            <View style={styles.transfer}>
              <Text style={styles.transferText}>송금 수량</Text>
              <Text style={styles.transferNumber}>{this.amount}</Text>
              <Text style={styles.transferSymbol}>{this.props.tokenStore!.clickedToken.symbol}</Text>
            </View>
            <View style={styles.gasfee}>
              <Text style={styles.gasfeeText}>송금 수수료</Text>
              <Text style={styles.gasfeeNumber}>{this.props.tokenStore!.clickedToken.gasfee}</Text>
              <Text style={styles.gasfeeSymbol}>{this.props.tokenStore!.clickedToken.symbol}</Text>
            </View>
            <View style={styles.balance}>
              <Text style={styles.balanceText}>이후 잔액</Text>
              <Text style={styles.balanceNumber}>{this.amount}</Text>
              <Text style={styles.balanceSymbol}>{this.props.tokenStore!.clickedToken.symbol}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
        </View>
        {this.amount.length != 0 ?
          <Button
            style={styles.button}
            onPress={this.transfer}
          >
            <Text style={styles.buttonFont}>
              보내기
            </Text>
          </Button> :
          <Button
            style={styles.notButton}
          >
            <Text style={styles.notButtonFont}>
              보내기
            </Text>
          </Button>
        }
      </Layout>
    );
  }

  @action private changeAccount = (account: string) => {
    this.account = account
  }

  @action private changeAmount = (amount: string) => {
    this.amount = amount
  }

  private transfer = () => {
    transferEthereum(getAccountInfo(this.props.walletStore!.getMnemonic, 0).privateKey,
      this.account,
       Number.parseFloat(this.amount))
    .then((tx:any)=>{console.log(tx)})
    .catch((tx:any)=>{console.log(tx)});
  }
}
