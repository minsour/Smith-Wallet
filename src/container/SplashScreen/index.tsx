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
    console.log('hello?');
    await AsyncStorageUtils.loadPin().then(async pinCode => {
      console.log('temp: ' + pinCode);
      if (this.props.walletStore!.islocked) {
        //...
        // AsyncStorage 에서 꺼낸 다음

        this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
          destination: route.MAIN_SCREEN,
          first: true
        });
      } else {
        //...
        // AsyncStorage 에서 wallet 유무 검사 후
        // 없으면 
        this.props.tokenStore!.loadTokenList()
        this.props.navigation.navigate(route.INITIAL_SCREEN)
        // 있으면
        // this.props.navigation.navigate(route.MAIN_SCREEN)
      }
    });
  }
}
