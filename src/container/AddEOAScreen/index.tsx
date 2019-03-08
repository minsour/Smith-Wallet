import React from 'react';
import { View, TouchableOpacity } from 'react-native';
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
export class AddEOAScreen extends React.Component<TokenSendScreenProps> {
  @observable name = ''
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
                label='새로운 계좌 이름'
                value={this.name}
                underlineColor="#030066"
                onChangeText={name => this.changeName(name)}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
        </View>
        {this.name.length != 0 ?
          <Button
            style={styles.button}
            onPress={this.addEOA}
          >
            <Text style={styles.buttonFont}>
              추 가
            </Text>
          </Button> :
          <Button
            style={styles.notButton}
          >
            <Text style={styles.notButtonFont}>
              추 가
            </Text>
          </Button>
        }
      </Layout>
    );
  }

  @action private changeName = (name: string) => {
    this.name = name
  }

  @action private addEOA = () => {
    console.log('1')
    console.log(this.props.walletStore!.Mnemonic)
    this.props.walletStore!.addSmith(this.props.walletStore!.accountLength, this.name)
    console.log('3')
    this.props.navigation.navigate(route.MAIN_SCREEN)
  }
}