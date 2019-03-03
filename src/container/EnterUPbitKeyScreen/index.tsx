import React from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import { Layout } from '../../layout/Layout';
import { styles } from './Styles';
import { inject, observer } from 'mobx-react';
import { store } from '../../constants/store';
import { WalletStore } from '../../stores/walletStore';
import { observable, action } from 'mobx';
import { TokenStore } from '../../stores/tokenStore';
import { ethers } from 'ethers';
import { walletTab } from '../../constants/walletTab';
import { route } from '../../constants/route';

interface TokenSendScreenProps {
  navigation: NavigationScreenProp<any, any>
  walletStore?: WalletStore
  tokenStore?: TokenStore
}

@inject(store.WALLET_STORE, store.TOKEN_STORE)
@observer
export class EnterUPbitKeyScreen extends React.Component<TokenSendScreenProps> {
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
                label="Access Key"
                value={this.account}
                underlineColor="#030066"
                onChangeText={account => this.changeAccount(account)}
              />
            </View>
            <View>
              <TextInput
                style={styles.amountInput}
                label="Secret Key"
                value={this.amount}
                underlineColor="#030066"
                onChangeText={amount => this.changeAmount(amount)}
              />
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

  private transfer = async () => {
    await this.props.walletStore!.addUPbit()
    this.props.navigation.navigate(route.MAIN_SCREEN)
  }
}