import React from "react";
import { Image, View, Text } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { route } from "../../constants/route";
import { styles } from "./Styles";
import { Layout } from '../../layout/Layout';
import { ActivityIndicator } from 'react-native-paper';
import { AsyncStorageUtils } from '../../utils/asyncStorageUtils';
import { inject } from 'mobx-react';
import { store } from '../../constants/store';
import { observer } from 'mobx-react/native';
import { TokenStore } from '../../stores/tokenStore';
import { WalletStore } from '../../stores/walletStore';
import { walletTab } from '../../constants/walletTab';
import { getNewWalletMnemonic } from '../../apis/ethers';

interface SplashScreenProps {
  navigation: NavigationScreenProp<any, any>
  tokenStore?: TokenStore
  walletStore?: WalletStore
}

@inject(store.TOKEN_STORE, store.WALLET_STORE)
@observer
export class SplashScreen extends React.Component<SplashScreenProps> {
  componentDidMount() {
    this.navigateToSomething()
  }

  render() {
    return (
      <Layout header={false}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
        </View>
        <View style={styles.loadingBar}>
          <ActivityIndicator animating={true} size="large" color="#39369C" />
        </View>
      </Layout>
    );
  }

  private navigateToSomething = async () => {
    await AsyncStorageUtils.loadPin().then(async pinCode => {
      console.log('temp: ' + pinCode);
      if (this.props.walletStore!.isLocked) {
        //...
        // AsyncStorage 에서 꺼낸 다음

        this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
          destination: route.MAIN_SCREEN,
          first: true
        });
      } else {
        //...
        // AsyncStorage 에서 wallet 유무 검사 후
        console.log(AsyncStorageUtils.loadWalletStorage().then(W => console.log(W)))
        if (await AsyncStorageUtils.loadWalletStorage()) {
          // 없으면 
          await this.props.tokenStore!.loadTokenList()
          await AsyncStorageUtils.storeTokenStorage(this.props.tokenStore!.tokenStorage)
          this.props.navigation.navigate(route.INITIAL_SCREEN)
        }
        else {
          // 있으면
          console.log('있어')
          await AsyncStorageUtils.loadTokenStorage().then(TokenStorage => {
            console.log('loadTokenStorage')
            this.props.tokenStore!.tokenStorage = TokenStorage!
            this.props.tokenStore!.copyTokenStorage()
          })
          await AsyncStorageUtils.loadWalletStorage().then(WalletStorage => {
            console.log('loadWalletStorage')
            this.props.walletStore!.walletStorage = WalletStorage!
            this.props.walletStore!.copyWalletStorage()
            console.log('setWallet 전')
            this.props.walletStore!.setWallet(0)
            console.log('setWallet 후')
          })
          console.log('navigation 전')
          this.props.navigation.navigate(route.MAIN_SCREEN)
        }
      }
    });
  }
}
